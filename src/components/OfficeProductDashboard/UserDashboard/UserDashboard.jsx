import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../shared/Loading/Loading";
import ErrorPage from "../../../shared/Error/ErrorPage";
import { ArrowUpRight, DollarSign, BarChart2, TrendingUp } from 'lucide-react';

const UserDashboard = () => {
  const {
    data: user_dashboard = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user_dashboard"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_COMMON_ROOT}/api/v1/payment/user_dashboard`,
          {
            method: "GET",
            headers: {
              authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        if (!res.ok) throw new Error("Network response was not ok");
        return await res.json();
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage message={error?.message} />;

  const totalPayments =  !isLoading && user_dashboard?.success && user_dashboard?.data?.paymentLaserInfo.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const averagePayment = totalPayments / user_dashboard?.data?.paymentLaserInfo.length;
  const chartData = user_dashboard?.data?.paymentLaserInfo.map((item, index) => ({
    name: `Transaction ${index + 1}`,
    price: item.price,
    transactionId: item.transactionId.slice(-4),
  }));

  const COLORS = ["#6366f1", "#06b6d4", "#f59e0b", "#10b981"];
  
  const squareFootageData = !isLoading && user_dashboard?.success && user_dashboard?.data?.officeCategories.map((cat) => ({
    name: cat.office_categorie,
    squareFootage: cat.squareFootage,
    amount: cat.amount,
  }));

  const pieData =!isLoading && user_dashboard?.success &&  user_dashboard?.data?.officeCategories.reduce((acc, curr) => {
    const existing = acc.find((item) => item.name === curr.office_categorie);
    if (existing) {
      existing.value += curr.amount;
    } else {
      acc.push({ name: curr.office_categorie, value: curr.amount });
    }
    return acc;
  }, []);

  return (
    <div className="min-h-screen  p-4 lg:p-8">
      {/* Office Categories Section */}
      <div className="max-w-7xl mx-auto mb-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
          <h2 className="text-2xl font-bold text-white">
            Office Categories Overview
          </h2>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pieData.map((item, index) => (
              <div
                key={item.name}
                className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${COLORS[index % COLORS.length]}15` }}
                  >
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                  </div>
                  <ArrowUpRight className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  ${item.value.toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <BarChart2 className="mr-2 text-indigo-500" />
                Square Footage vs Amount
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={squareFootageData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke={COLORS[0]} />
                    <YAxis yAxisId="right" orientation="right" stroke={COLORS[1]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="squareFootage"
                      fill={COLORS[0]}
                      name="Square Footage"
                      radius={[6, 6, 0, 0]}
                    />
                    <Bar
                      yAxisId="right"
                      dataKey="amount"
                      fill={COLORS[1]}
                      name="Amount"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <DollarSign className="mr-2 text-cyan-500" />
                Amount Distribution
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Analytics Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
          <h2 className="text-2xl font-bold text-white">
            Payment Analytics Overview
          </h2>
        </div>

        <div className="p-6 space-y-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-blue-700 font-semibold">Total Transactions</h3>
                <div className="p-2 bg-blue-200 rounded-lg">
                  <BarChart2 className="text-blue-700" size={24} />
                </div>
              </div>
              <p className="text-3xl font-bold text-blue-900">
                {user_dashboard?.data?.paymentLaserInfo.length}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-green-700 font-semibold">Total Amount</h3>
                <div className="p-2 bg-green-200 rounded-lg">
                  <DollarSign className="text-green-700" size={24} />
                </div>
              </div>
              <p className="text-3xl font-bold text-green-900">
                ${totalPayments.toLocaleString()}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-purple-700 font-semibold">Average Payment</h3>
                <div className="p-2 bg-purple-200 rounded-lg">
                  <TrendingUp className="text-purple-700" size={24} />
                </div>
              </div>
              <p className="text-3xl font-bold text-purple-900">
                ${averagePayment.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Charts */}
          <div className="space-y-8">
            {/* Payment Distribution Chart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <BarChart2 className="mr-2 text-blue-500" />
                Payment Distribution
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="transactionId" 
                      label={{ value: 'Transaction ID (Last 4 digits)', position: 'bottom' }}
                    />
                    <YAxis 
                      label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="price" 
                      fill="#6366f1" 
                      name="Payment Amount" 
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Payment Trend Chart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <TrendingUp className="mr-2 text-cyan-500" />
                Payment Trend
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="transactionId" 
                      label={{ value: 'Transaction ID (Last 4 digits)', position: 'bottom' }}
                    />
                    <YAxis 
                      label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#06b6d4" 
                      name="Payment Amount"
                      strokeWidth={2}
                      dot={{ fill: '#06b6d4', r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;