import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loading from "../../../../../shared/Loading/Loading";
import ErrorPage from "../../../../../shared/Error/ErrorPage";

const OfficeGallery = () => {
  const { productdetailsId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const productSections = [
    { key: "furnitureproduct", title: "Furniture" },
    { key: "deskproduct", title: "Desk" },
    { key: "electronicsproduct", title: "Electronics" },
    { key: "laptopproduct", title: "Laptop" },
    { key: "projectorproduct", title: "Projector" },
    { key: "printerproduct", title: "Printer" },
    { key: "officesuppliesproduct", title: "Office Supplies" },
    { key: "stationeryproduct", title: "Stationery" },
    { key: "acproduct", title: "Air Conditioner" },
  ];

  const {
    data: office_gallery = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["office_gallery", productdetailsId],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_COMMON_ROOT
          }/api/v1/office_product/find_specific_office_gallery/${productdetailsId}`,
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
        throw error;
      }
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage message={error?.message} />;

  const galleryData = office_gallery?.data;

  const ImageModal = ({ image, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 btn btn-circle btn-sm">
          ✕
        </button>
        <img
          src={image?.image}
          alt={image?.name || image?.roomname}
          className="w-full  h-auto object-cover"
        />
        <div className="p-4 bg-base-200">
          <h3 className="text-lg font-semibold">
            {image?.name || image?.roomname}
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container mx-auto p-4">
        {/* Main Products Gallery */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-center mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Office Equipment Gallery
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-200 blur-lg animate-pulse"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {productSections.map((section) => {
              const product = galleryData?.[section.key];
              if (!product) return null;

              return (
                <div
                  key={section.key}
                  className="card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <figure className="h-52 relative overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold py-1 px-2 rounded-md">
                        {product.name}
                      </div>
                  </figure>
                  <div className="card-body p-6">
                    <h3 className="card-title text-xl font-semibold text-gray-800">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 ">{product.name}</p>
                    <div className="card-actions justify-end ">
                      <button
                        className="btn btn-primary btn-sm rounded-sm px-4 py-2 transition-transform duration-300 hover:scale-105"
                        onClick={() => setSelectedImage(product)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infrastructure Gallery */}
        {galleryData?.officeinfastructure?.length > 0 && (
          <div>
            <h2 className="text-4xl font-extrabold text-center mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Office Infrastructure
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-200 blur-lg animate-pulse"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {galleryData.officeinfastructure.map((room) => (
                <div
                  key={room._id}
                  className="card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <figure className="h-52 relative overflow-hidden rounded-t-xl">
                    <img
                      src={room.image}
                      alt={room.roomname}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold py-1 px-2 rounded-md">
                        {room.roomname}
                      </div>
                  </figure>
                  <div className="card-body p-6">
                    <h3 className="card-title text-xl font-semibold text-gray-800">
                      {room.roomname}
                    </h3>
                    <div className="card-actions justify-end mt-4">
                      <button
                        className="btn btn-primary btn-sm rounded-sm px-4 py-2 transition-transform duration-300 hover:scale-105"
                        onClick={() => setSelectedImage(room)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </>
  );
};

export default OfficeGallery;
