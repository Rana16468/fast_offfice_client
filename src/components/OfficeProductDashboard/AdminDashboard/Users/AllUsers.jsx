import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../../../shared/Loading/Loading";
import ErrorPage from "../../../../shared/Error/ErrorPage";
import {
  Users,
  Mail,
  Monitor,
  Chrome,
  MapPin,
  Calendar,
  Shield,
  CheckCircle2,
  UserCircle,
  Search,
} from "lucide-react";
import { FaDeleteLeft } from "react-icons/fa6";
import {
  getRoleColor,
  showSuccessMessage,
} from "../../../../utility/TypesOfImages";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import PatchAction from "../../../CommonAction/PatchAction";

const AllUsers = () => {
  const [page, setPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(null);

  const {
    data: allusers = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_COMMON_ROOT}/api/v1/auth/all_users`,
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

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredUsers(null);
      return;
    }

    const searchResults = allusers?.data?.result?.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.districtName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(searchResults);
  }, [searchTerm, allusers]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is already handled by the useEffect above
  };

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

  const handelDeleteUserAccount = async (userId) => {
    console.log(userId);
  };

  const handleChange = async (event, userId) => {
    const selectedValue = event.target.value;

    if (!selectedValue) {
      toast.error("selected value not founded");
    }

    try {
      Swal.fire({
        title: "Do you want to Change User Role?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Change Role",
        denyButtonText: `Don't  Change`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await PatchAction(
            `${import.meta.env.VITE_COMMON_ROOT}/api/v1/auth/chnage_role_status/${userId}`,
            { role: selectedValue },
            refetch
          );
          if (response?.errorSources?.length >= 1) {
            toast.error(response.message);
            return;
          }

          showSuccessMessage(response.message);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch (error) {
      if (error) {
        return <ErrorPage message={error?.message} />;
      }
    }
  };

  const displayedUsers = filteredUsers || allusers?.data?.result;

  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-50 border-b">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-700">
                User Management
              </h2>
            </div>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-md w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, email, role or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  User
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  System Info
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Location
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Creation Time
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Change Role
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Delete Account
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {displayedUsers?.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  {/* Rest of your existing table row code */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      {user.photo ? (
                        <img
                          src={user.photo}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <UserCircle className="w-10 h-10 text-gray-400" />
                      )}
                      <div>
                        <div className="font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Mail className="w-4 h-4" />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(
                        user.role
                      )}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Monitor className="w-4 h-4" />
                        {user.os} ({user.device})
                      </div>
                      <div className="flex items-center gap-1">
                        <Chrome className="w-4 h-4" />
                        {user.browser}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {user.districtName}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {user.creationTime}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <select
                      onChange={(event) => handleChange(event, user?._id)}
                      className="select select-bordered w-full max-w-xs bg-white text-gray-700 font-medium shadow-md rounded-lg transition-transform transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <option disabled selected className="text-gray-400">
                        Change Role?
                      </option>
                      <option
                        value={import.meta.env.VITE_USER_ROLE}
                        className="bg-gray-100 hover:bg-blue-100">
                        {import.meta.env.VITE_USER_ROLE}
                      </option>
                      <option
                        value={import.meta.env.VITE_ADMIN_ROLE}
                        className="bg-gray-100 hover:bg-blue-100">
                        {import.meta.env.VITE_ADMIN_ROLE}
                      </option>
                      <option
                        value={import.meta.env.VITE_EMPLOYEE_ROLE}
                        className="bg-gray-100 hover:bg-blue-100">
                        {import.meta.env.VITE_EMPLOYEE_ROLE}
                      </option>
                    </select>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      {user.isVerify ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <Shield className="w-5 h-5 text-yellow-500" />
                      )}
                      <span className="text-sm text-gray-600">
                        {user.isVerify ? "Verified" : "Pending"}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <button
                        onClick={() => handelDeleteUserAccount(user?._id)}
                        className="btn btn-outline btn-sm btn-error rounded-md">
                        <FaDeleteLeft className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
            { length: allusers?.data?.meta?.totalPage || 0 },
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
              disabled={page === allusers?.data?.meta?.totalPage}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${
                page === allusers?.data?.meta?.totalPage
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AllUsers;