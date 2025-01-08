import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Square,
  Calendar,
  Building2,
  Coins,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";
import PostAction from "../../../CommonAction/PostAction";

const CostBenefitAnalysis = () => {
  const { officeId } = useParams();
  const [selectedValue, setSelectedValue] = useState(20);
  const [result, setResult] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const { data: specific_office_categorie = [], isLoading, error } = useQuery({
    queryKey: ["specific_office_categorie", officeId],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_COMMON_ROOT}/api/v1/office_categorie/get_specific_office_categorie/${officeId}`,
        {
          method: "GET",
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  const handelCostBenefitAnalysis = async (data) => {
    const { squareFootage, amount } = data;
    setIsAnalyzing(true);

    try {
      const totalBenefits = selectedValue * squareFootage;
      const totalCosts = amount + 12 * 10000;
      const CBR = totalBenefits / totalCosts;

      const problemStatement = `
        Analyze the following cost-benefit data:
        - Square footage: ${squareFootage}
        - Monthly cost amount: ${amount}
        - Maintenance cost: ${10000}
        - Current Cost-Benefit Ratio (CBR): ${CBR.toFixed(2)}
        
        The CBR is less than 1, indicating a 'Loss.' Provide actionable strategies to make it profitable. Focus on:
        1. Increasing total benefits.
        2. Reducing total costs.
        3. Any creative or industry-specific recommendations.
      `;

      setResult({
        CBR: CBR.toFixed(2),
        status: CBR > 1 ? "Profitable" : "Loss",
        totalBenefits,
        totalCosts,
      });

      if (CBR < 1) {
        const response = await PostAction(
          `${import.meta.env.VITE_COMMON_ROOT}/api/v1/office_categorie/ai_base_costbenefit_analysis`,
          { prompt: problemStatement }
        );

        if (response?.errorSources?.length >= 1) {
          throw new Error(response.message);
        }

        setAnalysis(response?.data);
      }
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Error</h2>
          </div>
          <p className="mt-2 text-red-600">{error?.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {specific_office_categorie.success && (
        <>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">
                  {formatCurrency(
                    specific_office_categorie?.data?.amount,
                    specific_office_categorie?.data?.currency
                  )}
                </h1>
                <span className="px-4 py-1.5 text-sm bg-white/20 rounded-full text-white font-medium">
                  {specific_office_categorie?.data?.office_categorie}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">{specific_office_categorie?.data?.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Square className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">
                      {specific_office_categorie?.data?.squareFootage.toLocaleString()} sq ft
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">
                      Listed on {formatDate(specific_office_categorie?.data?.createdAt)}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Building2 className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">
                      {specific_office_categorie?.data?.office_categorie} Office Space
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Coins className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">
                      {formatCurrency(
                        specific_office_categorie?.data?.amount /
                          specific_office_categorie?.data?.squareFootage,
                        specific_office_categorie?.data?.currency
                      )}{" "}
                      per sq ft
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="perSquareFoot" className="block text-sm font-medium text-gray-700">
                  Select Cost Per Square Foot:
                </label>
                <select
                  id="perSquareFoot"
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(Number(e.target.value))}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {[20, 30, 40, 50, 60, 70, 80, 90].map((value) => (
                    <option key={value} value={value}>
                      {value} BDT
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() =>
                  handelCostBenefitAnalysis({
                    squareFootage: specific_office_categorie?.data?.squareFootage,
                    amount: specific_office_categorie?.data?.amount,
                  })
                }
                disabled={isAnalyzing}
                className="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  "Cost Benefit Analysis"
                )}
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Analysis Results</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Cost-Benefit Ratio (CBR)</p>
                    <p className="text-2xl font-bold text-gray-900">{result.CBR}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Total Benefits</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatCurrency(result.totalBenefits, "BDT")}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Total Costs</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatCurrency(result.totalCosts, "BDT")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-lg font-medium">Status</span>
                  <div className="flex items-center gap-2">
                    {result.status === "Profitable" ? (
                      <TrendingUp className="w-6 h-6 text-green-500" />
                    ) : (
                      <TrendingDown className="w-6 h-6 text-red-500" />
                    )}
                    <span
                      className={`text-lg font-semibold ${
                        result.status === "Profitable" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {result.status}
                    </span>
                  </div>
                </div>

                {analysis && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      AI Analysis & Recommendations
                    </h3>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="prose prose-blue max-w-none">
                        {analysis.split('\n').map((line, index) => (
                          line.trim() && (
                            <p key={index} className="mb-2 text-gray-700">
                              {line}
                            </p>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CostBenefitAnalysis;