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
} from "lucide-react";
import { FaDeleteLeft } from "react-icons/fa6";
import { getRoleColor } from "../../../../utility/TypesOfImages";
const AllUsers = () => {
    const [page, setPage] = useState(1);
    const [isPageLoading, setIsPageLoading] = useState(false);
    
  const {
    data: allusers = [],
    isLoading,
    error,
    refetch
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

//   console.log(allusers?.data?.meta);
//   console.log(allusers?.data?.result)

const handelDeleteUserAccount=async(userId)=>{
    console.log(userId);
}

  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-50 border-b flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-700">
            User Management
          </h2>
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
                {/* creationTime */}
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Creation Time
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Delete Account
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              { !isLoading && allusers?.success   &&   allusers?.data?.result?.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
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
                  {/* delete account */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600 ">
                       <button onClick={()=>handelDeleteUserAccount(user?._id)} className="btn btn-outline btn-sm btn-error rounded-md"><FaDeleteLeft className="text-xl "/></button>
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
              { length:allusers?.data?.meta?.totalPage || 0 },
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