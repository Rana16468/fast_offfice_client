import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { FaDeleteLeft } from "react-icons/fa6";
const AddProductDetails = () => {
  const [searchParams] = useSearchParams();
  const officecategorieId = searchParams.get("id");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Using useFieldArray for dynamic field handling
  const { fields, append, remove } = useFieldArray({
    control,
    name: "officeinfrastructure", // Field name for infrastructure
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-full   shadow-md rounded-lg "
          style={{
            backgroundImage:
              "url('https://t4.ftcdn.net/jpg/06/98/63/49/360_F_698634901_ZiquGePY1Ay8PrO8foPZQ0AQSi8cL9ry.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
          }}>
          <h2 className="text-4xl font-extrabold text-center mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Office Furniture
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-100 blur-lg animate-pulse"></div>
          </h2>

          <div className=" bg-white/30 shadow-md p-3 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
              {/* Furniture Name */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Furniture
                </label>
                <input
                  type="text"
                  defaultValue="Office Furniture"
                  {...register("furniture", {
                    required: "Furniture name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.furniture && "input-error"
                  }`}
                />
                {errors.furniture && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.furniture.message}
                  </span>
                )}
              </div>

              {/* Product Name */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Product Name
                </label>
                <input
                  type="text"
                  defaultValue="Ergonomic Chair"
                  {...register("furnitureproduct.name", {
                    required: "Product name is required",
                  })}
                  className={`input input-bordered bg-white/30 w-full ${
                    errors.furnitureproduct?.name && "input-error"
                  }`}
                />
                {errors.furnitureproduct?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.furnitureproduct.name.message}
                  </span>
                )}
              </div>
            </div>
            {/* Quantity */}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">Quantity</label>
              <input
                type="number"
                defaultValue={20}
                {...register("furnitureproduct.quantity", {
                  required: "Quantity is required",
                  min: { value: 1, message: "Quantity must be at least 1" },
                })}
                className={`input input-bordered bg-white/30 w-full ${
                  errors.furnitureproduct?.quantity && "input-error"
                }`}
              />
              {errors.furnitureproduct?.quantity && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.furnitureproduct.quantity.message}
                </span>
              )}
            </div>
            {/* Description */}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">
                Description
              </label>
              <textarea
                defaultValue="Comfortable ergonomic chair with adjustable height and lumbar support."
                {...register("furnitureproduct.description", {
                  required: "Description is required",
                })}
                className={`textarea textarea-bordered w-full bg-white/50 ${
                  errors.furnitureproduct?.description && "textarea-error"
                }`}></textarea>
              {errors.furnitureproduct?.description && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.furnitureproduct.description.message}
                </span>
              )}
            </div>
            {/* images */}
            <div className="flex-1">
              <label className="label font-medium text-white ">
                Upload Image
              </label>
              <div className="relative flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg bg-white/30 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  {...register(`furnitureproduct.image`, {
                    required: "Image is required",
                  })}
                  className="absolute inset-0 opacity-0 cursor-pointer "
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Drag & Drop your image here, or{" "}
                    <span className="text-blue-500 underline">Browse</span>
                  </p>
                </div>
              </div>

              {errors.furnitureproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.furnitureproduct.image.message}
                </span>
              )}
            </div>
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Standing Desk
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-100 blur-lg animate-pulse"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
              {/* Furniture Name */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Furniture
                </label>
                <input
                  type="text"
                  defaultValue="Desk"
                  {...register("desk", {
                    required: "Desk name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.desk && "input-error"
                  }`}
                />
                {errors.desk && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.desk.message}
                  </span>
                )}
              </div>

              {/* Desk Name */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Desk Name
                </label>
                <input
                  type="text"
                  defaultValue="Standing Desk"
                  {...register("deskproduct.name", {
                    required: "deskproduct name is required",
                  })}
                  className={`input input-bordered bg-white/30 w-full ${
                    errors.deskproduct?.name && "input-error"
                  }`}
                />
                {errors.deskproduct?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.deskproduct.name.message}
                  </span>
                )}
              </div>
            </div>
            {/* desk quentity */}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">Quantity</label>
              <input
                type="number"
                defaultValue={20}
                {...register("deskproduct.quantity", {
                  required: "Quantity is required",
                  min: { value: 1, message: "Quantity must be at least 1" },
                })}
                className={`input input-bordered bg-white/30 w-full ${
                  errors.deskproduct?.quantity && "input-error"
                }`}
              />
              {errors.deskproduct?.quantity && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.deskproduct.quantity.message}
                </span>
              )}
            </div>
            {/* desk discription */}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">
                Description
              </label>
              <textarea
                defaultValue="Comfortable ergonomic chair with adjustable height and lumbar support."
                {...register("deskproduct.description", {
                  required: "Description is required",
                })}
                className={`textarea textarea-bordered w-full bg-white/50 ${
                  errors.deskproduct?.description && "textarea-error"
                }`}></textarea>
              {errors.deskproduct?.description && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.deskproduct.description.message}
                </span>
              )}
            </div>
            {/* desk images */}
            <div className="flex-1">
              <label className="label font-medium text-white ">
                Upload Image
              </label>
              <div className="relative flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg bg-white/30 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  {...register(`deskproduct.image`, {
                    required: "Image is required",
                  })}
                  className="absolute inset-0 opacity-0 cursor-pointer "
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Drag & Drop your image here, or{" "}
                    <span className="text-blue-500 underline">Browse</span>
                  </p>
                </div>
              </div>

              {errors.deskproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.deskproduct.image.message}
                </span>
              )}
            </div>
            {/* Office Electronics Product  */}
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Office Electronics Product
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-100 blur-lg animate-pulse"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
              {/* electronicsproduct cetegorie */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Electronics
                </label>
                <input
                  type="text"
                  defaultValue="Electronics"
                  {...register("electronics", {
                    required: "Electronics name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.electronics && "input-error"
                  }`}
                />
                {errors.electronics && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.electronics.message}
                  </span>
                )}
              </div>

              {/* electronicsproduct name */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Electronics Product Name
                </label>
                <input
                  type="text"
                  defaultValue="Desktop Compute"
                  {...register("electronicsproduct.name", {
                    required: "electronicsproduct name is required",
                  })}
                  className={`input input-bordered bg-white/30 w-full ${
                    errors.electronicsproduct?.name && "input-error"
                  }`}
                />
                {errors.electronicsproduct?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.electronicsproduct.name.message}
                  </span>
                )}
              </div>
            </div>
            {/* electronic quentity */}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">Quantity</label>
              <input
                type="number"
                defaultValue={20}
                {...register("electronicsproduct.quantity", {
                  required: "Quantity is required",
                  min: { value: 1, message: "Quantity must be at least 1" },
                })}
                className={`input input-bordered bg-white/30 w-full ${
                  errors.electronicsproduct?.quantity && "input-error"
                }`}
              />
              {errors.electronicsproduct?.quantity && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.electronicsproduct.quantity.message}
                </span>
              )}
            </div>
            {/* electronicsproduct discription */}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">
                Description
              </label>
              <textarea
                defaultValue="Comfortable ergonomic chair with adjustable height and lumbar support."
                {...register("electronicsproduct.description", {
                  required: "Description is required",
                })}
                className={`textarea textarea-bordered w-full bg-white/50 ${
                  errors.electronicsproduct?.description && "textarea-error"
                }`}></textarea>
              {errors.electronicsproduct?.description && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.electronicsproduct.description.message}
                </span>
              )}
            </div>
            {/* electronicsproduct images */}
            <div className="flex-1">
              <label className="label font-medium text-white ">
                Upload Image
              </label>
              <div className="relative flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg bg-white/30 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  {...register(`electronicsproduct.image`, {
                    required: "Image is required",
                  })}
                  className="absolute inset-0 opacity-0 cursor-pointer "
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Drag & Drop your image here, or{" "}
                    <span className="text-blue-500 underline">Browse</span>
                  </p>
                </div>
              </div>

              {errors.electronicsproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.electronicsproduct.image.message}
                </span>
              )}
            </div>
            {/* electronicsproduct under desktopconfigration  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Desktop Name Field */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Desktop Name
                </label>
                <input
                  type="text"
                  defaultValue="TECLAST K24 Air"
                  {...register("electronicsproduct.desktopconfigration.name", {
                    required: "Desktop configuration name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.electronicsproduct?.desktopconfigration?.name
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.electronicsproduct?.desktopconfigration?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.electronicsproduct.desktopconfigration.name.message}
                  </span>
                )}
              </div>

              {/* Desktop Model Field */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Desktop Model
                </label>
                <input
                  type="text"
                  defaultValue="K24 Air"
                  {...register("electronicsproduct.desktopconfigration.model", {
                    required: "Desktop configuration model is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.electronicsproduct?.desktopconfigration?.model
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.electronicsproduct?.desktopconfigration?.model && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.electronicsproduct.desktopconfigration.model
                        .message
                    }
                  </span>
                )}
              </div>
            </div>
            {/* second two  field desktop configration  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">
                  Processor Name
                </label>
                <input
                  type="text"
                  defaultValue="Intel Celeron N5095 (6M Cache, up to 3.40 GHz)"
                  {...register(
                    "electronicsproduct.desktopconfigration.processor",
                    {
                      required: "processor configuration name is required",
                    }
                  )}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.electronicsproduct?.desktopconfigration?.processor
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.electronicsproduct?.desktopconfigration?.processor && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.electronicsproduct.desktopconfigration.processor
                        .message
                    }
                  </span>
                )}
              </div>

              {/* Desktop Model Field */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Desktop Ram
                </label>
                <input
                  type="text"
                  defaultValue="8GB DDR4"
                  {...register("electronicsproduct.desktopconfigration.ram", {
                    required: "Desktop configuration model is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.electronicsproduct?.desktopconfigration?.ram
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.electronicsproduct?.desktopconfigration?.ram && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.electronicsproduct.desktopconfigration.ram.message}
                  </span>
                )}
              </div>
            </div>
            {/* electronicsproduct under desktopconfigration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">
                  Desktop Storage
                </label>
                <input
                  type="text"
                  defaultValue="512GB SSD"
                  {...register(
                    "electronicsproduct.desktopconfigration.storage",
                    {
                      required: "processor configuration name is required",
                    }
                  )}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.electronicsproduct?.desktopconfigration?.storage
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.electronicsproduct?.desktopconfigration?.storage && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.electronicsproduct.desktopconfigration.storage
                        .message
                    }
                  </span>
                )}
              </div>

              {/* Desktop Model Field */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Desktop Display
                </label>
                <input
                  type="text"
                  defaultValue="24-inch FHD"
                  {...register(
                    "electronicsproduct.desktopconfigration.display",
                    {
                      required: "Desktop configuration model is required",
                    }
                  )}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.electronicsproduct?.desktopconfigration?.display
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.electronicsproduct?.desktopconfigration?.display && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.electronicsproduct.desktopconfigration.display
                        .message
                    }
                  </span>
                )}
              </div>
            </div>
            {/* electronicsproduct under desktopconfigration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">
                  Desktop Features
                </label>
                <input
                  type="text"
                  defaultValue="Built-in Speaker, High Definition Audio"
                  {...register(
                    "electronicsproduct.desktopconfigration.features",
                    {
                      required: "processor configuration name is required",
                    }
                  )}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.electronicsproduct?.desktopconfigration?.features
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.electronicsproduct?.desktopconfigration?.features && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.electronicsproduct.desktopconfigration.features
                        .message
                    }
                  </span>
                )}
              </div>
            </div>
            {/*laptop product added  */}
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Office Laptop ProducT
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-100 blur-lg animate-pulse"></div>
            </h2>
            {/* start form laptop product added  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Laptop Name */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Laptop Name
                </label>
                <input
                  type="text"
                  defaultValue="name"
                  {...register("laptopproduct.name", {
                    required: "Laptop name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.laptopproduct?.name ? "input-error" : ""
                  }`}
                />
                {errors.laptopproduct?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.laptopproduct.name.message}
                  </span>
                )}
              </div>

              {/* Laptop Quantity */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Laptop Quantity
                </label>
                <input
                  type="number"
                  defaultValue={2}
                  {...register("laptopproduct.quantity", {
                    required: "Quantity is required",
                    min: {
                      value: 1,
                      message: "Quantity must be at least 1",
                    },
                  })}
                  className={`input input-bordered bg-white/30 w-full ${
                    errors.laptopproduct?.quantity ? "input-error" : ""
                  }`}
                />
                {errors.laptopproduct?.quantity && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.laptopproduct.quantity.message}
                  </span>
                )}
              </div>
            </div>
            {/*Laptop  Description */}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">
                Laptop Description
              </label>
              <textarea
                defaultValue="Slim and lightweight laptop ideal for professionals on the go."
                {...register("laptopproduct.description", {
                  required: "Description is required",
                })}
                className={`textarea textarea-bordered w-full bg-white/50 ${
                  errors.laptopproduct?.description && "textarea-error"
                }`}></textarea>
              {errors.laptopproduct?.description && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.laptopproduct.description.message}
                </span>
              )}
            </div>
            {/* Laptop images */}
            <div className="flex-1">
              <label className="label font-medium text-white ">
                Upload Image
              </label>
              <div className="relative flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg bg-white/30 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  {...register(`laptopproduct.image`, {
                    required: "Image is required",
                  })}
                  className="absolute inset-0 opacity-0 cursor-pointer "
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Drag & Drop your image here, or{" "}
                    <span className="text-blue-500 underline">Browse</span>
                  </p>
                </div>
              </div>

              {errors.laptopproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.laptopproduct.image.message}
                </span>
              )}
            </div>
            {/* laptopproduct under laptopconfigration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Configuration Name Field */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Configuration Name
                </label>
                <input
                  type="text"
                  defaultValue="Dell Latitude 5420"
                  {...register("laptopproduct.laptopconfigration.name", {
                    required: "Laptop configuration name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.laptopproduct?.laptopconfigration?.name
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.laptopproduct?.laptopconfigration?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.laptopproduct.laptopconfigration.name.message}
                  </span>
                )}
              </div>

              {/* Laptop Processor Field */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Laptop Processor
                </label>
                <input
                  type="text"
                  defaultValue="Intel Core i5 (11th Gen)"
                  {...register("laptopproduct.laptopconfigration.processor", {
                    required: "Processor is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.laptopproduct?.laptopconfigration?.processor
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.laptopproduct?.laptopconfigration?.processor && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.laptopproduct.laptopconfigration.processor.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Configuration Name Field */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Laptop Ram
                </label>
                <input
                  type="text"
                  defaultValue="16GB DDR4"
                  {...register("laptopproduct.laptopconfigration.ram", {
                    required: "Laptop ram configuration name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.laptopproduct?.laptopconfigration?.ram
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.laptopproduct?.laptopconfigration?.ram && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.laptopproduct.laptopconfigration.ram.message}
                  </span>
                )}
              </div>

              {/* Laptop Processor Field */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Laptop Storage
                </label>
                <input
                  type="text"
                  defaultValue="512GB SSD"
                  {...register("laptopproduct.laptopconfigration.storage", {
                    required: "Laptop storage is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.laptopproduct?.laptopconfigration?.storage
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.laptopproduct?.laptopconfigration?.storage && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.laptopproduct.laptopconfigration.storage.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Configuration Name Field */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Laptop Display
                </label>
                <input
                  type="text"
                  defaultValue="14-inch FHD"
                  {...register("laptopproduct.laptopconfigration.display", {
                    required: "Laptop ram configuration name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.laptopproduct?.laptopconfigration?.display
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.laptopproduct?.laptopconfigration?.display && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.laptopproduct.laptopconfigration.display.message}
                  </span>
                )}
              </div>

              {/* Laptop Processor Field */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Laptop Battery
                </label>
                <input
                  type="text"
                  defaultValue="Up to 10 hours"
                  {...register("laptopproduct.laptopconfigration.battery", {
                    required: "Laptop battery is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.laptopproduct?.laptopconfigration?.battery
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.laptopproduct?.laptopconfigration?.battery && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.laptopproduct.laptopconfigration.battery.message}
                  </span>
                )}
              </div>
            </div>
            {/* start office projector form  */}
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Office ProjectoR
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-100 blur-lg animate-pulse"></div>
            </h2>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">
                  Projector
                </label>
                <input
                  type="text"
                  defaultValue="Projector"
                  {...register("projector", {
                    required: "Furniture name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.projector && "input-error"
                  }`}
                />
                {errors.projector && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.projector.message}
                  </span>
                )}
              </div>

              {/* Projector Name */}

              <div className="form-control">
                <label className="label font-medium text-white">
                  Office Projector Name
                </label>
                <input
                  type="text"
                  defaultValue="Projector"
                  {...register("projectorproduct.name", {
                    required: "Projector name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.projectorproduct?.name ? "input-error" : ""
                  }`}
                />
                {errors.projectorproduct?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.projectorproduct.name.message}
                  </span>
                )}
              </div>

              {/* Projector Quantity */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Projector Quantity
                </label>
                <input
                  type="number"
                  defaultValue={2}
                  {...register("projectorproduct.quantity", {
                    required: "Quantity is required",
                    min: {
                      value: 1,
                      message: "Quantity must be at least 1",
                    },
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.projectorproduct?.quantity ? "input-error" : ""
                  }`}
                />
                {errors.projectorproduct?.quantity && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.projectorproduct.quantity.message}
                  </span>
                )}
              </div>
            </div>
            {/* projector description */}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">
                Projector Description
              </label>
              <textarea
                defaultValue="Slim and lightweight projector ideal for professionals on the go."
                {...register("projectorproduct.description", {
                  required: "Description is required",
                })}
                className={`textarea textarea-bordered w-full bg-white/50 ${
                  errors.projectorproduct?.description ? "textarea-error" : ""
                }`}></textarea>
              {errors.projectorproduct?.description && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.projectorproduct.description.message}
                </span>
              )}
            </div>
            {/*projector  image */}
            <div className="flex-1">
              <label className="label font-medium text-white ">
                Upload Image
              </label>
              <div className="relative flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg bg-white/30 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  {...register(`projectorproduct.image`, {
                    required: "Image is required",
                  })}
                  className="absolute inset-0 opacity-0 cursor-pointer "
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Drag & Drop your image here, or{" "}
                    <span className="text-blue-500 underline">Browse</span>
                  </p>
                </div>
              </div>

              {errors.projectorproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.projectorproduct.image.message}
                </span>
              )}
            </div>
            {/* projector Under projectorconfigration started  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Projector Configuration Name */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Projector Configuration Name
                </label>
                <input
                  type="text"
                  defaultValue="C8 Wi-Fi"
                  {...register("projectorproduct.projectorconfigration.name", {
                    required: "Projector configuration name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.projectorproduct?.projectorconfigration?.name
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.projectorproduct?.projectorconfigration?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.projectorproduct.projectorconfigration.name.message}
                  </span>
                )}
              </div>

              {/* Projector Model Name */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Model Name
                </label>
                <input
                  type="text"
                  defaultValue="Cheerlux C8"
                  {...register("projectorproduct.projectorconfigration.model", {
                    required: "Model name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.projectorproduct?.projectorconfigration?.model
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.projectorproduct?.projectorconfigration?.model && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.projectorproduct.projectorconfigration.model
                        .message
                    }
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">
                  Brightness
                </label>
                <input
                  type="text"
                  defaultValue="2200 lumens"
                  {...register(
                    "projectorproduct.projectorconfigration.brightness",
                    {
                      required: "brightness name is required",
                    }
                  )}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.projectorproduct?.projectorconfigration?.brightness
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.projectorproduct?.projectorconfigration?.brightness && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.projectorproduct.projectorconfigration.brightness
                        .message
                    }
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label font-medium text-white">
                  Lamp life
                </label>
                <input
                  type="text"
                  defaultValue="50000 Hours"
                  {...register(
                    "projectorproduct.projectorconfigration.lamplife",
                    {
                      required: "lamplife name is required",
                    }
                  )}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.projectorproduct?.projectorconfigration?.lamplife
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.projectorproduct?.projectorconfigration?.lamplife && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.projectorproduct.projectorconfigration.lamplife
                        .message
                    }
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">
                  Contrast Ratio
                </label>
                <input
                  type="text"
                  defaultValue="2000:1"
                  {...register(
                    "projectorproduct.projectorconfigration.contrast_ratio",
                    {
                      required: "contrast_ratio name is required",
                    }
                  )}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.projectorproduct?.projectorconfigration
                      ?.contrast_ratio
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.projectorproduct?.projectorconfigration
                  ?.contrast_ratio && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.projectorproduct.projectorconfigration
                        .contrast_ratio.message
                    }
                  </span>
                )}
              </div>
            </div>
            {/* officesupplies started */}
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Office SupplieS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-100 blur-lg animate-pulse"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">
                  Office Supplies
                </label>
                <input
                  type="text"
                  defaultValue="Office Supplies"
                  {...register("officesupplies", {
                    required: "officesupplies is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.officesupplies && "input-error"
                  }`}
                />
                {errors.officesupplies && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.officesupplies.message}
                  </span>
                )}
              </div>

              {/* officesuppliesproduct Name */}

              <div className="form-control">
                <label className="label font-medium text-white">
                  Office Supplies Name
                </label>
                <input
                  type="text"
                  defaultValue="Whiteboard"
                  {...register("officesuppliesproduct.name", {
                    required: "officesuppliesproduct name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.officesuppliesproduct?.name ? "input-error" : ""
                  }`}
                />
                {errors.officesuppliesproduct?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.officesuppliesproduct.name.message}
                  </span>
                )}
              </div>

              {/* Projector Quantity */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Supplies Quantity
                </label>
                <input
                  type="number"
                  defaultValue={2}
                  {...register("officesuppliesproduct.quantity", {
                    required: "Quantity is required",
                    min: {
                      value: 1,
                      message: "Quantity must be at least 1",
                    },
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.officesuppliesproduct?.quantity ? "input-error" : ""
                  }`}
                />
                {errors.officesuppliesproduct?.quantity && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.officesuppliesproduct.quantity.message}
                  </span>
                )}
              </div>
            </div>
            {/*description*/}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">
                Supplies Description
              </label>
              <textarea
                defaultValue="Magnetic whiteboard with a sturdy frame and marker tray"
                {...register("officesuppliesproduct.description", {
                  required: "Description is required",
                })}
                className={`textarea textarea-bordered w-full bg-white/50 ${
                  errors.officesuppliesproduct?.description
                    ? "textarea-error"
                    : ""
                }`}></textarea>
              {errors.officesuppliesproduct?.description && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.officesuppliesproduct.description.message}
                </span>
              )}
            </div>
            {/* image */}
            <div className="flex-1">
              <label className="label font-medium text-white ">
                Upload Image
              </label>
              <div className="relative flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg bg-white/30 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  {...register(`officesuppliesproduct.image`, {
                    required: "Image is required",
                  })}
                  className="absolute inset-0 opacity-0 cursor-pointer "
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Drag & Drop your image here, or{" "}
                    <span className="text-blue-500 underline">Browse</span>
                  </p>
                </div>
              </div>

              {errors.officesuppliesproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.officesuppliesproduct.image.message}
                </span>
              )}
            </div>
            {/*---------- Printer Product ----------*/}
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Printer ProducT
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-100 blur-lg animate-pulse"></div>
            </h2>
            {/* started */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">
                  Printer Product Name
                </label>
                <input
                  type="text"
                  defaultValue="Office Printer"
                  {...register("printerproduct.name", {
                    required: "printer product is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.printerproduct?.name ? "input-error" : ""
                  }`}
                />
                {errors.printerproduct?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.printerproduct?.name.message}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label font-medium text-white">
                  Printer Product Quantity
                </label>
                <input
                  type="number"
                  defaultValue={2}
                  {...register("printerproduct.quantity", {
                    required: "Quantity is required",
                    min: {
                      value: 1,
                      message: "Quantity must be at least 1",
                    },
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.printerproduct?.quantity ? "input-error" : ""
                  }`}
                />
                {errors.printerproduct?.quantity && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.printerproduct.quantity.message}
                  </span>
                )}
              </div>
            </div>
            {/*description*/}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">
                Printer Product Description
              </label>
              <textarea
                defaultValue="Multi-functional office printer with scanning and copying capabilities."
                {...register("printerproduct.description", {
                  required: "Description is required",
                })}
                className={`textarea textarea-bordered w-full bg-white/50 ${
                  errors.printerproduct?.description ? "textarea-error" : ""
                }`}></textarea>
              {errors.printerproduct?.description && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.printerproduct.description.message}
                </span>
              )}
            </div>
            {/* image */}
            <div className="flex-1">
              <label className="label font-medium text-white ">
                Upload Image
              </label>
              <div className="relative flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg bg-white/30 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  {...register(`printerproduct.image`, {
                    required: "Image is required",
                  })}
                  className="absolute inset-0 opacity-0 cursor-pointer "
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Drag & Drop your image here, or{" "}
                    <span className="text-blue-500 underline">Browse</span>
                  </p>
                </div>
              </div>

              {errors.printerproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.printerproduct.image.message}
                </span>
              )}
            </div>
            {/* printerproduct under printerconfigration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Printer Configuration Name */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Printer Configuration Name
                </label>
                <input
                  type="text"
                  defaultValue="HP LaserJet Pro MFP"
                  {...register("printerproduct.printerconfigration.name", {
                    required: "Printer configuration name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.printerproduct?.printerconfigration?.name
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.printerproduct?.printerconfigration?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.printerproduct.printerconfigration.name.message}
                  </span>
                )}
              </div>

              {/* Printer Configuration Features */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Printer Configuration Features
                </label>
                <input
                  type="text"
                  defaultValue="Print, Scan, Copy"
                  {...register("printerproduct.printerconfigration.features", {
                    required: "Printer configuration features are required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.printerproduct?.printerconfigration?.features
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.printerproduct?.printerconfigration?.features && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.printerproduct.printerconfigration.features.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Printer Configuration Name */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Print Speed
                </label>
                <input
                  type="text"
                  defaultValue="30 ppm"
                  {...register(
                    "printerproduct.printerconfigration.printspeed",
                    {
                      required: "Printer configuration name is required",
                    }
                  )}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.printerproduct?.printerconfigration?.printspeed
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.printerproduct?.printerconfigration?.printspeed && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.printerproduct.printerconfigration.printspeed
                        .message
                    }
                  </span>
                )}
              </div>

              {/* Printer Configuration Features */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Printer Connectivity
                </label>
                <input
                  type="text"
                  defaultValue="Wi-Fi, Ethernet, USB"
                  {...register(
                    "printerproduct.printerconfigration.connectivity",
                    {
                      required: "Printer configuration features are required",
                    }
                  )}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.printerproduct?.printerconfigration?.connectivity
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.printerproduct?.printerconfigration?.connectivity && (
                  <span className="text-sm text-red-500 mt-1">
                    {
                      errors.printerproduct.printerconfigration.connectivity
                        .message
                    }
                  </span>
                )}
              </div>
            </div>
            {/* stationery */}
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Office StationerY
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-100 blur-lg animate-pulse"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">
                  Stationery
                </label>
                <input
                  type="text"
                  defaultValue="Stationery"
                  {...register("stationery", {
                    required: "officesupplies is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.stationery && "input-error"
                  }`}
                />
                {errors.stationery && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.stationery.message}
                  </span>
                )}
              </div>

              {/* stationeryproduct name*/}

              <div className="form-control">
                <label className="label font-medium text-white">
                  Stationery Product Name
                </label>
                <input
                  type="text"
                  defaultValue="Stationery Set"
                  {...register("stationeryproduct.name", {
                    required: "stationeryproduct is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.stationeryproduct?.name ? "input-error" : ""
                  }`}
                />
                {errors.stationeryproduct?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.stationeryproduct.name.message}
                  </span>
                )}
              </div>

              {/* Stationery Product Quantity */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Stationery Product Quantity
                </label>
                <input
                  type="number"
                  defaultValue={2}
                  {...register("stationeryproduct.quantity", {
                    required: "Quantity is required",
                    min: {
                      value: 1,
                      message: "Quantity must be at least 1",
                    },
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.stationeryproduct?.quantity ? "input-error" : ""
                  }`}
                />
                {errors.stationeryproduct?.quantity && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.stationeryproduct.quantity.message}
                  </span>
                )}
              </div>
            </div>
            {/*description*/}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">
                Stationery Product Description
              </label>
              <textarea
                defaultValue="Multi-functional office printer with scanning and copying capabilities."
                {...register("stationeryproduct.description", {
                  required: "Description is required",
                })}
                className={`textarea textarea-bordered w-full bg-white/50 ${
                  errors.stationeryproduct?.description ? "textarea-error" : ""
                }`}></textarea>
              {errors.stationeryproduct?.description && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.stationeryproduct.description.message}
                </span>
              )}
            </div>
            {/* image */}
            <div className="flex-1">
              <label className="label font-medium text-white ">
                Upload Image
              </label>
              <div className="relative flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg bg-white/30 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  {...register(`stationeryproduct.image`, {
                    required: "Image is required",
                  })}
                  className="absolute inset-0 opacity-0 cursor-pointer "
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Drag & Drop your image here, or{" "}
                    <span className="text-blue-500 underline">Browse</span>
                  </p>
                </div>
              </div>

              {errors.stationeryproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.stationeryproduct.image.message}
                </span>
              )}
            </div>
            {/* Air Conditioners */}
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                AC Section
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-100 blur-lg animate-pulse"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">AC</label>
                <input
                  type="text"
                  defaultValue="Air Conditioners"
                  {...register("ac", {
                    required: "officesupplies is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.ac && "input-error"
                  }`}
                />
                {errors.ac && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.ac.message}
                  </span>
                )}
              </div>

              {/* stationeryproduct name*/}

              <div className="form-control">
                <label className="label font-medium text-white">
                  AC Product Name
                </label>
                <input
                  type="text"
                  defaultValue="Split Air Conditioner"
                  {...register("acproduct.name", {
                    required: "acproduct is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.acproduct?.name ? "input-error" : ""
                  }`}
                />
                {errors.acproduct?.name && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.acproduct.name.message}
                  </span>
                )}
              </div>

              {/* AC Quantity */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  AC Quantity
                </label>
                <input
                  type="number"
                  defaultValue={10}
                  {...register("acproduct.quantity", {
                    required: "Quantity is required",
                    min: {
                      value: 1,
                      message: "Quantity must be at least 1",
                    },
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.acproduct?.quantity ? "input-error" : ""
                  }`}
                />
                {errors.acproduct?.quantity && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.acproduct.quantity.message}
                  </span>
                )}
              </div>
            </div>
            {/*description*/}
            <div className="form-control mb-4">
              <label className="label font-medium text-white">
                AC Product Description
              </label>
              <textarea
                defaultValue="Energy-efficient split AC with fast cooling and low noise operation."
                {...register("acproduct.description", {
                  required: "Description is required",
                })}
                className={`textarea textarea-bordered w-full bg-white/50 ${
                  errors.acproduct?.description ? "textarea-error" : ""
                }`}></textarea>
              {errors.acproduct?.description && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.acproduct.description.message}
                </span>
              )}
            </div>
            {/* image */}
            <div className="flex-1">
              <label className="label font-medium text-white ">
                Upload Image
              </label>
              <div className="relative flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg bg-white/30 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  {...register(`acproduct.image`, {
                    required: "Image is required",
                  })}
                  className="absolute inset-0 opacity-0 cursor-pointer "
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Drag & Drop your image here, or{" "}
                    <span className="text-blue-500 underline">Browse</span>
                  </p>
                </div>
              </div>

              {errors.acproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.acproduct.image.message}
                </span>
              )}
            </div>
            {/* acproduct under acconfigration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* AC Configuration Brand */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  AC Configuration Brand
                </label>
                <input
                  type="text"
                  defaultValue="Daikin"
                  {...register("acproduct.acconfigration.brand", {
                    required: "AC brand name is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.acproduct?.acconfigration?.brand ? "input-error" : ""
                  }`}
                />
                {/* Error Message */}
                {errors.acproduct?.acconfigration?.brand && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.acproduct.acconfigration.brand.message}
                  </span>
                )}
              </div>

              {/* AC Configuration Capacity */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  AC Capacity
                </label>
                <input
                  type="text"
                  defaultValue="1.5 Ton"
                  {...register("acproduct.acconfigration.capacity", {
                    required: "AC capacity is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.acproduct?.acconfigration?.capacity
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.acproduct?.acconfigration?.capacity && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.acproduct.acconfigration.capacity.message}
                  </span>
                )}
              </div>
            </div>
            {/* energy rating and features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* AC Configuration Energy Rating */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  Energy Rating
                </label>
                <input
                  type="text"
                  defaultValue="5 Star"
                  {...register("acproduct.acconfigration.energy_rating", {
                    required: "Energy rating is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.acproduct?.acconfigration?.energy_rating
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.acproduct?.acconfigration?.energy_rating && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.acproduct.acconfigration.energy_rating.message}
                  </span>
                )}
              </div>

              {/* AC Configuration Features */}
              <div className="form-control">
                <label className="label font-medium text-white">
                  AC Features
                </label>
                <input
                  type="text"
                  defaultValue="Inverter Technology, Auto Clean, Wi-Fi Control"
                  {...register("acproduct.acconfigration.features", {
                    required: "AC features are required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.acproduct?.acconfigration?.features
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.acproduct?.acconfigration?.features && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.acproduct.acconfigration.features.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label font-medium text-white">
                  Power Consumption
                </label>
                <input
                  type="text"
                  defaultValue="1450 W"
                  {...register("acproduct.acconfigration.power_consumption", {
                    required: "Power consumption is required",
                  })}
                  className={`input input-bordered bg-white/60 w-full ${
                    errors.acproduct?.acconfigration?.power_consumption
                      ? "input-error"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errors.acproduct?.acconfigration?.power_consumption && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors.acproduct.acconfigration.power_consumption.message}
                  </span>
                )}
              </div>
            </div>
            {/* New Office Infrastructure Section */}
            <div className="form-control mb-6">
              <label className="label font-medium text-white">
                Office Infrastructure
              </label>
              {fields.map((item, index) => (
                <div key={item.id} className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="label font-medium text-white">
                      Room Name
                    </label>
                    <input
                      type="text"
                      {...register(`officeinfrastructure[${index}].roomname`, {
                        required: "Room name is required",
                      })}
                      className={`input input-bordered w-full bg-white/30 ${
                        errors.officeinfrastructure?.[index]?.roomname &&
                        "input-error"
                      }`}
                    />
                    {errors.officeinfrastructure?.[index]?.roomname && (
                      <span className="text-sm text-red-500 mt-1">
                        {errors.officeinfrastructure[index].roomname.message}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <label className="label font-medium text-white ">
                      Upload Image
                    </label>
                    <div className="relative flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-lg bg-white/30 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        {...register(`officeinfrastructure[${index}].image`, {
                          required: "Image is required",
                        })}
                        className="absolute inset-0 opacity-0 cursor-pointer "
                      />
                      <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-gray-600 text-sm font-medium">
                          Drag & Drop your image here, or{" "}
                          <span className="text-blue-500 underline">
                            Browse
                          </span>
                        </p>
                      </div>
                    </div>

                    {errors.officeinfrastructure?.[index]?.image && (
                      <span className="text-sm text-red-500 mt-1">
                        {errors.officeinfrastructure[index].image.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="btn btn-outline btn-error btn-sm   self-end">
                    <FaDeleteLeft className="text-xl" />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => append({ roomname: "", image: "" })}
                className="btn bg-blue-500 hover:bg-blue-700 text-white">
                + Add Room Fast Office Infastructure
              </button>
            </div>
            {/* Submit Button */}
            <div className="form-control flex">
              <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-700 text-white">
                Submit Fast Office Infastructure
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProductDetails;
