import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AgoraUIKit from "agora-react-uikit";
import { FaVideo } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading/Loading";
import ErrorPage from "../../shared/Error/ErrorPage";

const AttenedVideoCall = () => {
  const [searchParams] = useSearchParams(); // Get the search parameters
  const videoCallingId = searchParams.get("videoCallingId");
  const categoryId = searchParams.get("categoryId");
  const [startVideoCall, setStartVideoCall] = useState(false);
  const navigate = useNavigate();

  const {
    data: find_specific_room = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["find_specific_room", categoryId],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_COMMON_ROOT}/api/v1/room/find_specific_room/${categoryId}`,
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

  const { data } = find_specific_room;
  const roomDetails = data || {};
  const { name, categorieId = {}, roomId } = roomDetails;
  const {
    location,
    squareFootage,
    currency,
    amount,
    office_categorie,
    maplocation,
  } = categorieId;

  const rtcProps = {
    appId: import.meta.env.VITE_VIDEO_CALL_APP_ID || "test",
    channel: videoCallingId,
    token: null,
  };

  const callbacks = {
    EndCall: () => {
      setStartVideoCall(false);
      navigate("/fast_office_product");
    },
  };

  return (
    <>
     {startVideoCall ? (
  <div className="flex w-full h-screen">
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  </div>
) : (
  <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mt-10 gap-6">
    <h1 className="text-2xl font-bold text-gray-800">Room Details</h1>
    <div className="w-full p-6 border rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-white">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Room Information
      </h2>
      <ul className="space-y-2 text-gray-600">
        <li><strong>Room Name:</strong> {name}</li>
        <li><strong>Room ID:</strong> {roomId}</li>
        <li><strong>Location:</strong> {location}</li>
        <li><strong>Square Footage:</strong> {squareFootage} sqft</li>
        <li><strong>Category:</strong> {office_categorie}</li>
        <li><strong>Price:</strong> {currency} {amount}</li>
      </ul>
      <div className="mt-4">
        <a
          href={maplocation}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition duration-200"
        >
          View on Map
        </a>
      </div>
    </div>
    <button
      onClick={() => setStartVideoCall(true)}
      className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      Start Call <FaVideo className="w-5 h-5" />
    </button>
    <img
      src="https://cdn.imgbin.com/3/20/19/imgbin-business-people-meeting-BeyUxMFXesYQv3UgUXZ6ne82S.jpg"
      className="w-full h-64 object-cover rounded-lg shadow-md"
      alt="Video call preview"
    />
  </div>
)}

    </>
  );
};

export default AttenedVideoCall;
