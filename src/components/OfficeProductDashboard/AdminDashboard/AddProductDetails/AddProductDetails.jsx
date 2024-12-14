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
              Office Furniture Form
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
            <div className="form-control mb-6">
              <label className="label font-medium text-white">
                Upload Image
              </label>
              <div
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg bg-gradient-to-r bg-white/10 to-white/60 hover:from-gray-700/60 hover:to-gray-600/60 cursor-pointer transition duration-300"
                onClick={() => document.getElementById("fileInput").click()}>
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16l5.586-5.586a2 2 0 012.828 0L16 15m5 5h-6a2 2 0 01-2-2v-1m6 3l-5.586-5.586a2 2 0 00-2.828 0L8 20M16 3h6a2 2 0 012 2v6m-9 9a2 2 0 01-2-2v-6a2 2 0 012-2h6"></path>
                </svg>
                <p className="text-white mt-3 text-sm font-medium">
                  Drag & drop your image here, or{" "}
                  <span className="text-blue-400 underline">browse</span>
                </p>
              </div>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                {...register("furnitureproduct.image", {
                  required: "Image is required",
                })}
                className="hidden "
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                      const preview = document.getElementById("imagePreview");
                      preview.src = reader.result;
                      preview.style.display = "block";
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              {/* Image Preview */}
              <img
                id="imagePreview"
                alt="Preview"
                className="mt-4 w-40 h-40 object-cover rounded-lg shadow-lg hidden"
              />
              {/* Error Message */}
              {errors.furnitureproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.furnitureproduct.image.message}
                </span>
              )}
            </div>

            <h2 className="text-4xl font-extrabold text-center mb-6 relative">
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
            <div className="form-control mb-6">
              <label className="label font-medium text-white">
                Upload Image
              </label>
              <div
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg bg-gradient-to-r bg-white/10 to-white/60 hover:from-gray-700/60 hover:to-gray-600/60 cursor-pointer transition duration-300"
                onClick={() =>
                  document.getElementById("fileInputdeskproduct").click()
                }>
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16l5.586-5.586a2 2 0 012.828 0L16 15m5 5h-6a2 2 0 01-2-2v-1m6 3l-5.586-5.586a2 2 0 00-2.828 0L8 20M16 3h6a2 2 0 012 2v6m-9 9a2 2 0 01-2-2v-6a2 2 0 012-2h6"></path>
                </svg>
                <p className="text-white mt-3 text-sm font-medium">
                  Drag & drop your image here, or{" "}
                  <span className="text-blue-400 underline">browse</span>
                </p>
              </div>
              <input
                id="fileInputdeskproduct"
                type="file"
                accept="image/*"
                {...register("deskproduct.image", {
                  required: "Image is required",
                })}
                className="hidden "
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                      const preview = document.getElementById(
                        "imagePreviewdeskproduct"
                      );
                      preview.src = reader.result;
                      preview.style.display = "block";
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              {/* Image Preview */}
              <img
                id="imagePreviewdeskproduct"
                alt="Preview"
                className="mt-4 w-40 h-40 object-cover rounded-lg shadow-lg hidden"
              />
              {/* Error Message */}
              {errors.deskproduct?.image && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.deskproduct.image.message}
                </span>
              )}
            </div>

            {/* next */}
            {/* electronics */}

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
