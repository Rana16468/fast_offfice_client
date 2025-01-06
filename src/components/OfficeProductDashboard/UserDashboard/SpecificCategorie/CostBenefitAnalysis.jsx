import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../../shared/Loading/Loading";
import ErrorPage from "../../../../shared/Error/ErrorPage";
import { MapPin, Square, Calendar, Building2, Coins } from "lucide-react";

const CostBenefitAnalysis = () => {
  const { officeId } = useParams();
  const [selectedValue, setSelectedValue] = useState(20);
  const [result, setResult] = useState(null);

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Format currency
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
        `${
          import.meta.env.VITE_COMMON_ROOT
        }/api/v1/office_categorie/get_specific_office_categorie/${officeId}`,
        {
          method: "GET",
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage message={error?.message} />;

  const handelCostBenefitAnalysis = (data) => {
    const { squareFootage, amount } = data;
    const totalBenefits = selectedValue * squareFootage;
    const totalCosts = amount + 12 * 10000;
    const CBR = totalBenefits / totalCosts;

    setResult({
      CBR: CBR.toFixed(2),
      status: CBR > 1 ? "Profitable" : "Loss",
    });

    if(result?.status){
        // console.log("Loss")
        // starting AI Analysis
    };

  };

  return (
    <>
      {!isLoading && specific_office_categorie.success && (
        <div className="max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {formatCurrency(
                  specific_office_categorie?.data?.amount,
                  specific_office_categorie?.data?.currency
                )}
              </h2>
              <span className="px-3 py-1 text-sm bg-white/20 rounded-full text-white">
                {specific_office_categorie?.data?.office_categorie}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-sm">
                  {specific_office_categorie?.data?.location}
                </span>
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
                  Listed on{" "}
                  {formatDate(specific_office_categorie?.data?.createdAt)}
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Building2 className="w-5 h-5 text-blue-500" />
                <span className="text-sm">
                  {specific_office_categorie?.data?.office_categorie} Office
                  Space
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

            <div className="space-y-3">
              <label
                htmlFor="perSquareFoot"
                className="block text-gray-700 text-sm"
              >
                Select Cost Per Square Foot:
              </label>
              <select
                id="perSquareFoot"
                value={selectedValue}
                onChange={(e) => setSelectedValue(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Cost Benefit Analysis
            </button>

            {result && (
              <div className="mt-4 p-4 border rounded-md bg-gray-50">
                <p className="text-sm text-gray-700">
                  Cost-Benefit Ratio (CBR): <strong>{result.CBR}</strong>
                </p>
                <p
                  className={`text-sm font-bold ${
                    result.status === "Profitable"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {result.status}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CostBenefitAnalysis;
