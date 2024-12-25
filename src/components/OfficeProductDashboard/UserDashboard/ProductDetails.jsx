import React, { useState } from "react";
import NotFound from "../../../shared/NotFound/NotFound";
import { Link } from "react-router-dom";
import Auth from "../../../utility/auth/Auth";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";
import UpdateModalOfficeFurniture from "./SpecificCategorie/Update_Office_Product/UpdateModalOfficeFurniture";
import UpdateModalOfficeLaptop from "./SpecificCategorie/Update_Office_Product/UpdateModalOfficeLaptop";
const ProductDetails = ({ productdetails, refetch }) => {
  const userrole = Auth();
  const [productdetailsId,setProductseatilsId]=useState('');


  const handelIdOfficeFastructure=(productdetailsId)=>{
    document.getElementById("fastructure_modal").showModal();
    setProductseatilsId(productdetailsId);
  }
  const handelIdOfficeLaptop=(productdetailsId)=>{
    document.getElementById('laptop_modal').showModal();
    setProductseatilsId(productdetailsId);
  }
  return (
    <>
      <div className="container mx-auto p-4">
        {productdetails?.map((data, index) => (
          <div key={index}>
            <h1 className="text-4xl font-extrabold text-center mb-10 relative text-transparent bg-clip-text bg-gradient-to-r from-black via-purple-200 to-gray-900">
              <span className="absolute -left-4 -top-4 text-blue-500 opacity-30 text-[4rem] font-extrabold -z-10">
                {index + 1}
              </span>
              Office Products & Infrastructure
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
              {data?.electronicsproduct && (
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-lg hover:shadow-xl border border-slate-200 rounded-lg transition-transform transform hover:-translate-y-2">
                  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                      src={data?.electronicsproduct.image}
                      alt={data?.electronicsproduct.name}
                      className="h-full w-full rounded-md md:rounded-l-lg object-cover transition-transform transform group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold py-1 px-2 rounded-md">
                      {data?.electronicsproduct.name}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="mb-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 py-1 px-3 text-xs text-white shadow-md w-max text-center">
                      {data?.electronicsproduct?.category || "Category"}
                    </div>

                    <h4 className="mb-2 text-slate-800 text-xl font-bold hover:text-blue-500 transition-colors">
                      {data?.electronicsproduct?.name}
                    </h4>

                    <p className="text-sm font-medium text-slate-700">
                      Quantity:{" "}
                      <span className="font-semibold">
                        {data.electronicsproduct.quantity}
                      </span>
                    </p>
                    <p className="my-4 text-slate-600 leading-relaxed font-light">
                      {data?.electronicsproduct?.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Configuration:
                      </h3>
                      <ul className="list-disc list-inside text-sm text-slate-600">
                        <li>
                          <span className="font-medium">Model:</span>{" "}
                          {data?.electronicsproduct?.desktopconfigration?.model}
                        </li>
                        <li>
                          <span className="font-medium">Processor:</span>{" "}
                          {
                            data.electronicsproduct.desktopconfigration
                              .processor
                          }
                        </li>
                        <li>
                          <span className="font-medium">RAM:</span>{" "}
                          {data.electronicsproduct.desktopconfigration.ram}
                        </li>
                        <li>
                          <span className="font-medium">Storage:</span>{" "}
                          {data.electronicsproduct.desktopconfigration.storage}
                        </li>
                        <li>
                          <span className="font-medium">Display:</span>{" "}
                          {data.electronicsproduct.desktopconfigration.display}
                        </li>
                        <li>
                          <span className="font-medium">Features:</span>{" "}
                          {data.electronicsproduct.desktopconfigration.features}
                        </li>
                      </ul>
                    </div>
                    <Link
                      to={`/fast_office_product/office_gallery/${data?._id}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-all">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>

                    <div className="rounded-sm text-white text-center py-2">
                      <div className="flex flex-wrap justify-center gap-4">
                        {userrole?.role ===
                          `${import.meta.env.VITE_ADMIN_ROLE}` && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg">
                            
                            <button onClick={()=> handelIdOfficeFastructure(data?._id)} className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <MdOutlineBrowserUpdated className="text-3xl" />
                              <span>Update</span>
                            </button>
                            <Link className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <RiDeleteBack2Line className="text-3xl" />
                              <span>Delete</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {data?.laptopproduct && (
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-lg hover:shadow-xl border border-slate-200 rounded-lg transition-transform transform hover:-translate-y-2">
                  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                      src={data.laptopproduct.image}
                      alt={data.laptopproduct.name}
                      className="h-full w-full rounded-md md:rounded-l-lg object-cover transition-transform transform group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold py-1 px-2 rounded-md">
                      {data.laptopproduct.name}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="mb-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 py-1 px-3 text-xs text-white shadow-md w-max text-center">
                      LAPTOP
                    </div>

                    <h4 className="mb-2 text-slate-800 text-xl font-bold hover:text-blue-600 transition-colors">
                      {data.laptopproduct.name}
                    </h4>

                    <p className="mb-6 text-slate-600 leading-relaxed font-light">
                      {data.laptopproduct.description}
                    </p>

                    <p className="text-sm font-medium text-slate-800">
                      Quantity:{" "}
                      <span className="font-semibold">
                        {data.laptopproduct.quantity}
                      </span>
                    </p>

                    <div className="mt-4">
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Configuration:
                      </h3>
                      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>
                          <span className="font-medium">Processor:</span>{" "}
                          {data.laptopproduct.laptopconfigration.processor}
                        </li>
                        <li>
                          <span className="font-medium">RAM:</span>{" "}
                          {data.laptopproduct.laptopconfigration.ram}
                        </li>
                        <li>
                          <span className="font-medium">Storage:</span>{" "}
                          {data.laptopproduct.laptopconfigration.storage}
                        </li>
                        <li>
                          <span className="font-medium">Display:</span>{" "}
                          {data.laptopproduct.laptopconfigration.display}
                        </li>
                        <li>
                          <span className="font-medium">Battery:</span>{" "}
                          {data.laptopproduct.laptopconfigration.battery}
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <Link
                        to={`/fast_office_product/office_gallery/${data?._id}`}
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="rounded-sm text-white text-center py-2">
                      <div className="flex flex-wrap justify-center gap-4">
                        {userrole?.role ===
                          `${import.meta.env.VITE_ADMIN_ROLE}` && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg">
                            
                            <button onClick={()=>handelIdOfficeLaptop(data?._id)} className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <MdOutlineBrowserUpdated className="text-3xl" />
                              <span>Update</span>
                            </button>
                            <Link className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <RiDeleteBack2Line className="text-3xl" />
                              <span>Delete</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {data?.projectorproduct && (
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-lg hover:shadow-2xl border border-slate-200 rounded-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                      src={data.projectorproduct.image}
                      alt={data.projectorproduct.name}
                      className="h-full w-full rounded-md md:rounded-l-lg object-cover transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold py-1 px-2 rounded-md">
                      {data.projectorproduct.name}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 py-1 px-3 text-xs text-white shadow-md w-max text-center">
                      PROJECTOR
                    </div>

                    <h4 className="mb-3 text-slate-800 text-2xl font-bold hover:text-indigo-600 transition-colors">
                      {data.projectorproduct.name}
                    </h4>

                    <p className="mb-6 text-slate-600 leading-relaxed font-light">
                      {data.projectorproduct.description}
                    </p>

                    <p className="text-sm font-medium text-slate-800">
                      Quantity:{" "}
                      <span className="font-semibold">
                        {data.projectorproduct.quantity}
                      </span>
                    </p>

                    <div className="mt-4">
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Configuration:
                      </h3>
                      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>
                          <span className="font-medium">Model:</span>{" "}
                          {data.projectorproduct.projectorconfigration.model}
                        </li>
                        <li>
                          <span className="font-medium">Brightness:</span>{" "}
                          {
                            data.projectorproduct.projectorconfigration
                              .brightness
                          }
                        </li>
                        <li>
                          <span className="font-medium">Lamp Life:</span>{" "}
                          {data.projectorproduct.projectorconfigration.lamplife}
                        </li>
                        <li>
                          <span className="font-medium">Contrast Ratio:</span>{" "}
                          {
                            data.projectorproduct.projectorconfigration
                              .contrast_ratio
                          }
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <Link
                        to={`/fast_office_product/office_gallery/${data?._id}`}
                        className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-purple-700 transition-colors">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>

                    <div className="rounded-sm text-white text-center py-2">
                      <div className="flex flex-wrap justify-center gap-4">
                        {userrole?.role ===
                          `${import.meta.env.VITE_ADMIN_ROLE}` && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg">
                            
                            <button className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <MdOutlineBrowserUpdated className="text-3xl" />
                              <span>Update</span>
                            </button>
                            <Link className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <RiDeleteBack2Line className="text-3xl" />
                              <span>Delete</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {data?.printerproduct && (
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-lg hover:shadow-xl border border-slate-200 rounded-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                      src={data.printerproduct.image}
                      alt={data.printerproduct.name}
                      className="h-full w-full rounded-md md:rounded-l-lg object-cover transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold py-1 px-2 rounded-md">
                      {data.printerproduct.name}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    {/* Badge */}
                    <div className="mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-600 py-1 px-3 text-xs text-white shadow-md w-max text-center">
                      PRINTER
                    </div>

                    <h4 className="mb-3 text-slate-800 text-2xl font-bold hover:text-green-600 transition-colors">
                      {data.printerproduct.name}
                    </h4>

                    <p className="mb-6 text-slate-600 leading-relaxed font-light">
                      {data.printerproduct.description}
                    </p>

                    <p className="text-sm font-medium text-slate-800">
                      Quantity:{" "}
                      <span className="font-semibold">
                        {data.printerproduct.quantity}
                      </span>
                    </p>

                    <div className="mt-4">
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Configuration:
                      </h3>
                      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>
                          <span className="font-medium">Features:</span>{" "}
                          {data.printerproduct.printerconfigration.features}
                        </li>
                        <li>
                          <span className="font-medium">Print Speed:</span>{" "}
                          {data.printerproduct.printerconfigration.printspeed}
                        </li>
                        <li>
                          <span className="font-medium">Connectivity:</span>{" "}
                          {data.printerproduct.printerconfigration.connectivity}
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <Link
                        to={`/fast_office_product/office_gallery/${data?._id}`}
                        className="inline-flex items-center text-sm font-medium text-green-600 hover:text-blue-700 transition-colors">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="rounded-sm text-white text-center py-2">
                      <div className="flex flex-wrap justify-center gap-4">
                        {userrole?.role ===
                          `${import.meta.env.VITE_ADMIN_ROLE}` && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg">
                            
                            <button className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <MdOutlineBrowserUpdated className="text-3xl" />
                              <span>Update</span>
                            </button>
                            <Link className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <RiDeleteBack2Line className="text-3xl" />
                              <span>Delete</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {data.acproduct && (
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-lg hover:shadow-2xl border border-slate-200 rounded-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                      src={data.acproduct.image}
                      alt={data.acproduct.name}
                      className="h-full w-full rounded-md md:rounded-l-lg object-cover transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold py-1 px-2 rounded-md">
                      {data.acproduct.name}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="mb-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 py-1 px-3 text-xs text-white shadow-md w-max text-center">
                      AC PRODUCT
                    </div>

                    <h4 className="mb-3 text-slate-800 text-2xl font-bold hover:text-blue-500 transition-colors">
                      {data.acproduct.name}
                    </h4>

                    <p className="mb-6 text-slate-600 leading-relaxed font-light">
                      {data.acproduct.description}
                    </p>

                    <p className="text-sm font-medium text-slate-800">
                      Quantity:{" "}
                      <span className="font-semibold">
                        {data.acproduct.quantity}
                      </span>
                    </p>

                    <div className="mt-4">
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Configuration:
                      </h3>
                      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        <li>
                          <span className="font-medium">Brand:</span>{" "}
                          {data.acproduct.acconfigration.brand}
                        </li>
                        <li>
                          <span className="font-medium">Capacity:</span>{" "}
                          {data.acproduct.acconfigration.capacity}
                        </li>
                        <li>
                          <span className="font-medium">Energy Rating:</span>{" "}
                          {data.acproduct.acconfigration.energy_rating}
                        </li>
                        <li>
                          <span className="font-medium">Features:</span>{" "}
                          {data.acproduct.acconfigration.features}
                        </li>
                        <li>
                          <span className="font-medium">
                            Power Consumption:
                          </span>{" "}
                          {data.acproduct.acconfigration.power_consumption}
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <Link
                        to={`/fast_office_product/office_gallery/${data?._id}`}
                        className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-teal-500 transition-colors">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="rounded-sm text-white text-center py-2">
                      <div className="flex flex-wrap justify-center gap-4">
                        {userrole?.role ===
                          `${import.meta.env.VITE_ADMIN_ROLE}` && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg">
                            
                            <button className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <MdOutlineBrowserUpdated className="text-3xl" />
                              <span>Update</span>
                            </button>
                            <Link className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <RiDeleteBack2Line className="text-3xl" />
                              <span>Delete</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Furniture */}
              {data.furnitureproduct && (
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-lg hover:shadow-xl border border-slate-200 rounded-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                      src={data.furnitureproduct.image}
                      alt={data.furnitureproduct.name}
                      className="h-full w-full rounded-md md:rounded-l-lg object-cover transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold py-1 px-2 rounded-md">
                      {data.furnitureproduct.name}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    {/* Badge */}
                    <div className="mb-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 py-1 px-3 text-xs text-white shadow-md w-max text-center">
                      FURNITURE
                    </div>

                    {/* Product Name */}
                    <h4 className="mb-3 text-slate-800 text-2xl font-bold hover:text-orange-500 transition-colors">
                      {data.furnitureproduct.name}
                    </h4>

                    {/* Description */}
                    <p className="mb-6 text-slate-600 leading-relaxed font-light">
                      {data.furnitureproduct.description}
                    </p>

                    {/* Quantity */}
                    <p className="text-sm font-medium text-slate-800">
                      Quantity:{" "}
                      <span className="font-semibold">
                        {data.furnitureproduct.quantity}
                      </span>
                    </p>

                    {/* Category */}
                    <div className="mt-4">
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Category:
                      </h3>
                      <p className="text-sm text-slate-600">{data.furniture}</p>
                    </div>

                    {/* View Details Link */}
                    <div className="mt-6">
                      <Link
                        to={`/fast_office_product/office_gallery/${data?._id}`}
                        className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-yellow-500 transition-colors">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="rounded-sm text-white text-center py-2">
                      <div className="flex flex-wrap justify-center gap-4">
                        {userrole?.role ===
                          `${import.meta.env.VITE_ADMIN_ROLE}` && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg">
                            
                            <button className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <MdOutlineBrowserUpdated className="text-3xl" />
                              <span>Update</span>
                            </button>
                            <Link className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <RiDeleteBack2Line className="text-3xl" />
                              <span>Delete</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* dask */}
              {data?.deskproduct && (
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-lg hover:shadow-xl border border-slate-200 rounded-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                      src={data.deskproduct.image}
                      alt={data.deskproduct.name}
                      className="h-full w-full rounded-md md:rounded-l-lg object-cover transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 text-white text-xs font-semibold py-1 px-2 rounded-md">
                      Standing Desk
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="mb-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500 py-1 px-3 text-xs text-white shadow-md w-max text-center">
                      FURNITURE
                    </div>

                    <h4 className="mb-3 text-slate-800 text-2xl font-bold hover:text-blue-500 transition-colors">
                      {data.deskproduct.name}
                    </h4>

                    <p className="mb-6 text-slate-600 leading-relaxed font-light">
                      {data.deskproduct.description}
                    </p>

                    <p className="text-sm font-medium text-slate-800">
                      Quantity:{" "}
                      <span className="font-semibold">
                        {data.deskproduct.quantity}
                      </span>
                    </p>

                    <div className="mt-4">
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Category:
                      </h3>
                      <p className="text-sm text-slate-600">{data.desk}</p>
                    </div>

                    <div className="mt-6">
                      <Link
                        to={`/fast_office_product/office_gallery/${data?._id}`}
                        className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-green-500 transition-colors">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="rounded-sm text-white text-center py-2">
                      <div className="flex flex-wrap justify-center gap-4">
                        {userrole?.role ===
                          `${import.meta.env.VITE_ADMIN_ROLE}` && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg">
                            
                            <button className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <MdOutlineBrowserUpdated className="text-3xl" />
                              <span>Update</span>
                            </button>
                            <Link className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <RiDeleteBack2Line className="text-3xl" />
                              <span>Delete</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {data.officesuppliesproduct && (
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-md hover:shadow-xl border border-slate-200 rounded-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                      src={data.officesuppliesproduct.image}
                      alt={data.officesuppliesproduct.name}
                      className="h-full w-full rounded-md md:rounded-l-lg object-cover transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded-md">
                      {data.electronics}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    {/* Badge */}
                    <div className="mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 py-1 px-3 text-xs text-white shadow-md w-max text-center">
                      {data.officesupplies}
                    </div>

                    {/* Product Name */}
                    <h4 className="mb-3 text-slate-800 text-2xl font-bold hover:text-blue-600 transition-colors">
                      {data.officesuppliesproduct.name}
                    </h4>

                    {/* Description */}
                    <p className="mb-6 text-slate-600 leading-relaxed font-light">
                      {data.officesuppliesproduct.description}
                    </p>

                    {/* Quantity */}
                    <p className="text-sm font-medium text-slate-800">
                      Quantity:{" "}
                      <span className="font-semibold">
                        {data.officesuppliesproduct.quantity}
                      </span>
                    </p>

                    {/* Category */}
                    <div className="mt-4">
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Category:
                      </h3>
                      <p className="text-sm text-slate-600">
                        {data.electronics}
                      </p>
                    </div>

                    {/* View Details Link */}
                    <div className="mt-6">
                      <Link
                        to={`/fast_office_product/office_gallery/${data?._id}`}
                        className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-purple-500 transition-colors">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="rounded-sm text-white text-center py-2">
                      <div className="flex flex-wrap justify-center gap-4">
                        {userrole?.role ===
                          `${import.meta.env.VITE_ADMIN_ROLE}` && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg">
                            
                            <button className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <MdOutlineBrowserUpdated className="text-3xl" />
                              <span>Update</span>
                            </button>
                            <Link className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <RiDeleteBack2Line className="text-3xl" />
                              <span>Delete</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {data?.stationeryproduct && (
                <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-lg hover:shadow-xl border border-slate-200 rounded-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group">
                    <img
                      src={data.stationeryproduct.image}
                      alt={data.stationeryproduct.name}
                      className="h-full w-full rounded-md md:rounded-l-lg object-cover transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold py-1 px-2 rounded-md">
                      {data.stationery}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="mb-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 py-1 px-3 text-xs text-white shadow-md w-max text-center">
                      {data.stationery}
                    </div>

                    <h4 className="mb-3 text-slate-800 text-2xl font-bold hover:text-teal-600 transition-colors">
                      {data.stationeryproduct.name}
                    </h4>

                    <p className="mb-6 text-slate-600 leading-relaxed font-light">
                      {data.stationeryproduct.description}
                    </p>

                    <p className="text-sm font-medium text-slate-800">
                      Quantity:{" "}
                      <span className="font-semibold">
                        {data.stationeryproduct.quantity}
                      </span>
                    </p>

                    <div className="mt-6">
                      <Link
                        to={`/fast_office_product/office_gallery/${data?._id}`}
                        className="inline-flex items-center text-sm font-medium text-teal-500 hover:text-cyan-500 transition-colors">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="rounded-sm text-white text-center py-2">
                      <div className="flex flex-wrap justify-center gap-4">
                        {userrole?.role ===
                          `${import.meta.env.VITE_ADMIN_ROLE}` && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg">
                            
                            <button className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <MdOutlineBrowserUpdated className="text-3xl" />
                              <span>Update</span>
                            </button>
                            <Link className="flex items-center justify-center gap-2 px-4 py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200">
                              <RiDeleteBack2Line className="text-3xl" />
                              <span>Delete</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* office categorie */}

              {data?.officecategorieId && (
                <div className="card w-full bg-base-100 shadow-xl border-2 border-blue-500 rounded-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src="https://fastoffice.com/wp-content/uploads/2021/04/BG-FAST.jpg" // Placeholder for office category image
                      alt={data?.officecategorieId.office_categorie}
                      className="h-52 w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-blue-700 mb-4">
                      {data?.officecategorieId.office_categorie}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Location:</strong>{" "}
                      {data?.officecategorieId.location}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Square Footage:</strong>{" "}
                      {data?.officecategorieId.squareFootage} sq. ft.
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Price:</strong> {data?.officecategorieId.amount}{" "}
                      {data?.officecategorieId.currency}
                    </p>
                    <div className="mt-4">
                      <a
                        href={data?.officecategorieId.maplocation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline">
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {productdetails?.length === 0 && <NotFound />}
      </div>
      <UpdateModalOfficeFurniture productdetailsId={productdetailsId} refetch={refetch}/>;
      <UpdateModalOfficeLaptop productdetailsId={productdetailsId} refetch={refetch}/>
    </>
  );
};

export default ProductDetails;
