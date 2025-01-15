import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../../shared/Loading/Loading";
import ErrorPage from "../../../shared/Error/ErrorPage";
import { Star, Trash } from "lucide-react";
import Swal from "sweetalert2";
import DeleteAction from "../../CommonAction/DeleteAction";
import { showSuccessMessage } from "../../../utility/TypesOfImages";

const ComplainSection = () => {
  const [page, setPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: allcomplainbox = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allcomplainbox"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_COMMON_ROOT}/api/v1/contract/`,
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
        toast.error(error?.message);
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

  const handeleDeleteComplain = (id) => {
    Swal.fire({
      title: "Do you want to Delete Complain?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await DeleteAction(
            `${import.meta.env.VITE_COMMON_ROOT}/api/v1/contract/${id}`,
            refetch
          );
          if (response?.errorSources?.length >= 1) {
            toast.error(response.message);
            return;
          }

          showSuccessMessage(response.message);
        } catch (error) {
          return <ErrorPage message={error?.message} />;
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const filteredComplaints =
    allcomplainbox?.success &&
    allcomplainbox?.data?.result.filter(
      (complain) =>
        complain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complain.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (isLoading || isPageLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage message={error?.message} />;
  }

  return (
    <>
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center mb-6 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            User Complain Box
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-100 blur-lg animate-pulse"></div>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">
          We value your feedback. Please share your concerns with us and we'll
          address them promptly.
        </p>
      </div>

      <div className="container mx-auto p-4">
        <div className="relative mb-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search by name, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800 placeholder-gray-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-gray-500">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m-2.15-1.85a7 7 0 1110 0 7 7 0 01-10 0z"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Photo</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">Subject</th>
                <th className="border border-gray-300 px-4 py-2">Message</th>
                <th className="border border-gray-300 px-4 py-2">CreatedAt</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((contact) => (
                <tr key={contact._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={contact.photo}
                      alt={contact.name}
                      className="w-10 h-10 rounded-full mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.phoneNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.address}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.subject}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.message}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(contact?.createdAt).toLocaleString("en-US")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                    <button
                      className="text-yellow-500 hover:text-yellow-600"
                      title="Favorite">
                      <Star />
                    </button>
                    <button
                      onClick={() => handeleDeleteComplain(contact?._id)}
                      className="text-red-500 hover:text-red-600"
                      title="Delete">
                      <Trash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
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
                { length: allcomplainbox?.data?.meta?.totalPage || 0 },
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
                  disabled={page === allcomplainbox?.data?.meta?.totalPage}
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${
                    page === allcomplainbox?.data?.meta.totalPage
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ComplainSection;
