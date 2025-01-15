import React, { useEffect, useState } from "react";
import { Table, Monitor, Smartphone, Globe, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../../../shared/Loading/Loading";
import ErrorPage from "../../../../shared/Error/ErrorPage";
import { Link } from "react-router-dom";

const PaymentDisplay = () => {
  const [page, setPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: allpaymentList = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allpaymentList"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_COMMON_ROOT
          }/api/v1/payment/all_payment_list_admin`,
          {
            method: "GET",
            headers: {
              authorization: `${localStorage.getItem("token")}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        return data;
      } catch (error) {
        if (error) {
          toast.error(error?.message);
        }
      }
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

  if (isLoading || isPageLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorPage message={error?.message} />;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const DeviceIcon = ({ device }) => {
    return device === "desktop" ? (
      <Monitor className="w-4 h-4 text-gray-500" />
    ) : (
      <Smartphone className="w-4 h-4 text-gray-500" />
    );
  };

  // Filter payments based on search term
  const filteredPayments = allpaymentList?.data?.result?.filter(
    (payment) =>
      payment.userId.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.userId.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Table className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Payment Transactions</h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search by name, email, transaction ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-12 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Device Info
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                IP Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Categorie
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Office
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {!isLoading &&
              filteredPayments
                ?.sort((a, b) => b?._id - a?._id)
                .map((payment) => (
                  <tr key={payment._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {payment.userId.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {payment.userId.email}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {payment.phone}
                      </div>
                      <div className="text-sm text-gray-500">
                        {payment.address}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <DeviceIcon device={payment.userId.device} />
                        <div>
                          <div className="text-sm text-gray-900">
                            {payment.userId.os}
                          </div>
                          <div className="text-sm text-gray-500">
                            {payment.userId.browser}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <div className="text-sm text-gray-900">
                          {payment.ipaddress}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {payment.transactionId}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        ${payment.price.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {formatDate(payment.createdAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <Link
                          to={`/fast_office_product/specific_office_categorie/${payment?.categorieId}`}
                          className="btn btn-outline btn-sm">
                          Categorie
                        </Link>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <Link
                          to={`/fast_office_product/selling_product_details_parents/${payment?.categorieId}`}
                          className="btn btn-outline btn-sm">
                          Office
                        </Link>
                      </span>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <nav aria-label="Page navigation" className="mt-6">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${
                page === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}>
              Previous
            </button>
          </li>
          {Array.from(
            { length: allpaymentList?.data?.meta?.totalPage || 0 },
            (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    page === index + 1
                      ? "text-blue-600 border border-gray-300 bg-blue-50"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  }`}>
                  {index + 1}
                </button>
              </li>
            )
          )}
          <li>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === allpaymentList?.data?.meta?.totalPage}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${
                page === allpaymentList?.data?.meta?.totalPage
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaymentDisplay;
