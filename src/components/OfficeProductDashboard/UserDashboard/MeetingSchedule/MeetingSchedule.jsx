import React from "react";
import { MapPin, DollarSign, Maximize2, Hash, Mail } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../shared/Loading/Loading";
import ErrorPage from "../../../../shared/Error/ErrorPage";
import { Link } from "react-router-dom";
import Auth from "../../../../utility/auth/Auth";
import Swal from "sweetalert2";
import DeleteAction from "../../../CommonAction/DeleteAction";
import toast from "react-hot-toast";
import { showSuccessMessage } from "../../../../utility/TypesOfImages";

const MeetingSchedule = () => {
  const userrole = Auth();
  const {
    data: allconference = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allconference"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_COMMON_ROOT}/api/v1/room/find_all_room`,
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
        throw new Error(error.message);
      }
    },
  });
  

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage message={error?.message} />;
  }

  const handelDeleteMeetingSchedule = (id) => {
    Swal.fire({
      title: "Do you want to Delete Conference Room?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await DeleteAction(
            `${import.meta.env.VITE_COMMON_ROOT}/api/v1/room/delete_room/${id}`,
            refetch
          );
          if (response?.errorSources?.length >= 1) {
            toast.error(response.message);
            return;
          }

          showSuccessMessage(response.message);
        } catch (error) {
          if (error) {
            return <ErrorPage message={error?.message} />;
          }
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {!isLoading &&
        allconference?.data?.result?.map((room, index) => (
          <div
            key={room._id}
            className="overflow-hidden bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{room.name}</h3>
                <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {room.categorieId.office_categorie}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Hash className="w-4 h-4" />
                  <span>Room ID: {room.roomId}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{room.email}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{room.categorieId.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Maximize2 className="w-4 h-4" />
                  <span>{room.categorieId.squareFootage} sq ft</span>
                </div>

                <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                  <DollarSign className="w-5 h-5" />
                  <span>
                    {room.categorieId.amount.toLocaleString()}{" "}
                    {room.categorieId.currency}
                  </span>
                </div>
              </div>

              <a
                href={room.categorieId.maplocation}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                View on Map
              </a>
              <Link
                to={`/fast_office_product/attend_videocall?videoCallingId=${room?.roomId}&categoryId=${room?._id}`}
                className="block text-center bg-green-50 text-green-600 py-2 px-4 rounded-lg hover:bg-green-100 transition-colors duration-200">
                Video Calling
              </Link>

              {[
                import.meta.env.VITE_EMPLOYEE_ROLE,
                import.meta.env.VITE_ADMIN_ROLE,
              ].includes(userrole?.role) && (
                <button
                  onClick={() => handelDeleteMeetingSchedule(room?._id)}
                  className="block text-center bg-red-200 text-black-200 py-2 px-4 rounded-lg hover:bg-green-100 transition-colors duration-200">
                  Delete Room
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default MeetingSchedule;
