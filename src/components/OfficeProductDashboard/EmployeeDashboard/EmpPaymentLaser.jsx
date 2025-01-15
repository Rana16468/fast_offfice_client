import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Monitor, Smartphone, Tablet, ChevronLeft, ChevronRight, Calendar, CreditCard, User, Search } from 'lucide-react';
import Loading from '../../../shared/Loading/Loading';
import ErrorPage from '../../../shared/Error/ErrorPage';

const EmpPaymentLaser = () => {
  const [page, setPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: emp_payment_laser = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["emp_payment_laser", page],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_COMMON_ROOT}/api/v1/payment/all_payment_list?page=${page}`,
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
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handlePageChange = async (newPage) => {
    setIsPageLoading(true);
    setPage(newPage);
    try {
      await refetch();
    } catch (error) {
      console.error("Page change error:", error);
    } finally {
      setIsPageLoading(false);
    }
  };

  const getDeviceIcon = (device) => {
    switch (device?.toLowerCase()) {
      case 'desktop':
        return <Monitor className="w-4 h-4" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4" />;
      case 'tablet':
        return <Tablet className="w-4 h-4" />;
      default:
        return null;
    }
  };

  // Filter function for search
  const filteredTransactions = emp_payment_laser?.data?.result?.filter(payment => {
    const searchLower = searchTerm.toLowerCase();
    return (
      payment.transactionId?.toLowerCase().includes(searchLower) ||
      payment.userId.name?.toLowerCase().includes(searchLower) ||
      payment.email?.toLowerCase().includes(searchLower) ||
      payment.userId.device?.toLowerCase().includes(searchLower) ||
      payment.userId.browser?.toLowerCase().includes(searchLower) ||
      payment.userId.districtName?.toLowerCase().includes(searchLower)
    );
  });

  if (isLoading || isPageLoading) {
    return <Loading/>
  }

  if (error) {
    return <ErrorPage message={error?.message}/>
  }

  return (
    <div className="w-full bg-white border border-gray-200 shadow-sm rounded-md">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-blue-500" />
          Payment Transactions
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          {new Date().toLocaleDateString()}
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="p-6 pb-0">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search transactions by name, email, ID, device..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 pr-10 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <span className="text-sm">Clear</span>
            </button>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-4 py-3 text-left">Transaction Details</th>
                <th className="px-4 py-3 text-left">User Info</th>
                <th className="px-4 py-3 text-left">Device Details</th>
                <th className="px-4 py-3 text-right">Amount</th>
                <th className="px-4 py-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTransactions?.map((payment) => (
                <tr key={payment._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-gray-500">{payment.transactionId}</span>
                      <span className="text-xs text-gray-400">
                        {new Date(payment.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{payment.userId.name}</span>
                        <span className="text-xs text-gray-500">{payment.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {getDeviceIcon(payment.userId.device)}
                        <span className="text-xs">{payment.userId.device}</span>
                      </div>
                      <span className="text-gray-300">|</span>
                      <span className="text-xs text-gray-500">{payment.userId.browser}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-xs text-gray-500">{payment.userId.os}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-xs text-gray-500">{payment.userId.districtName}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-semibold text-gray-900">৳{payment.price.toLocaleString()}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {payment.payment ? (
                      <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                        Paid
                      </span>
                    ) : (
                      <span className="px-3 py-1 text-xs font-medium bg-red-50 text-red-700 rounded-full">
                        Pending
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-600">
            Showing {filteredTransactions?.length || 0} of{' '}
            {emp_payment_laser?.data?.meta?.total || 0} transactions
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page <= 1}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page >= emp_payment_laser?.data?.meta?.totalPage}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpPaymentLaser;