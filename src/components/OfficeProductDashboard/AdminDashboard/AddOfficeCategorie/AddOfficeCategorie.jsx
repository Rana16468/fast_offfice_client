

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, MapPin, DollarSign, Ruler } from "lucide-react";
import { officeCategorieOptions } from "../../../../utility/Userrole";
import toast from "react-hot-toast";
import PostAction from "../../../CommonAction/PostAction";



const officeCategorieSchemaz = z.object({
  squareFootage: z
    .number()
    .min(100, { message: "Minimum 100 sq ft required" })
    .max(10000, { message: "Maximum 10,000 sq ft allowed" }),
  location: z
    .string()
    .min(3, { message: "Location must be at least 3 characters" })
    .max(100, { message: "Location must be less than 100 characters" }),
  currency: z.enum(["USD", "BDT"]),
  amount: z
    .number()
    .min(100, { message: "Minimum amount is 100" })
    .max(1000000, { message: "Maximum amount is 1,000,000" }),
  office_categorie: z.enum([
    "Basic",
    "Minimalist",
    "Luxury",
    "Bootstrapped",
    "DIY",
    "Bare Bones",
    "Frugal",
  ]),
  maplocation: z
    .string()
    .min(3, { message: "Map location must be at least 3 characters" })
    .max(50000, { message: "Map location must be less than 200 characters" }),
});

const AddOfficeCategorie = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(officeCategorieSchemaz),
    defaultValues: {
      squareFootage: 500,
      location: "",
      currency: "USD",
      amount: 5000,
      office_categorie: "Basic",
      maplocation: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      PostAction(data,`${import.meta.env.VITE_COMMON_ROOT}/api/v1/office_categorie/create_office_categorie`);
     

      reset();
    } catch (error) {

       
      toast.error("Submission Error:", error);
    }
  };

  return (
    <div
    className="bg-cover bg-center rounded relative  "
    style={{
      backgroundImage:
        "url('https://t4.ftcdn.net/jpg/06/98/63/49/360_F_698634901_ZiquGePY1Ay8PrO8foPZQ0AQSi8cL9ry.jpg')",
    }}>
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-white/60 shadow-md  bg-opacity-40"></div>
  
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div className="bg-white/10 shadow-lg border rounded-xl w-full max-w-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Office Categorie Registration
        </h2>
  
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Location Input */}
            <div>
              <label className="text-gray-700 mb-2 flex items-center">
                <MapPin className="mr-2 text-blue-500" size={20} />
                Location
              </label>
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 
                      ${
                        errors.location
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-500"
                      }`}
                    placeholder="Enter office location"
                  />
                )}
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>
  
            {/* Map Location Input */}
            <div>
              <label className="text-gray-700 mb-2 flex items-center">
                <Building2 className="mr-2 text-green-500" size={20} />
                Map Location
              </label>
              <Controller
                name="maplocation"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 
                      ${
                        errors.maplocation
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-500"
                      }`}
                    placeholder="Enter map location"
                  />
                )}
              />
              {errors.maplocation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.maplocation.message}
                </p>
              )}
            </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-6">
            {/* Square Footage */}
            <div>
              <label className="text-gray-700 mb-2 flex items-center">
                <Ruler className="mr-2 text-purple-500" size={20} />
                Square Footage
              </label>
              <Controller
                name="squareFootage"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 
                      ${
                        errors.squareFootage
                          ? "border-red-500 focus:ring-red-300"
                          : "border-gray-300 focus:ring-blue-500"
                      }`}
                    placeholder="Office square footage"
                  />
                )}
              />
              {errors.squareFootage && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.squareFootage.message}
                </p>
              )}
            </div>
  
            {/* Amount Input */}
            <div>
              <label className="text-gray-700 mb-2 flex items-center">
                <DollarSign className="mr-2 text-green-600" size={20} />
                Amount
              </label>
              <div className="flex">
                <Controller
                  name="currency"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="border border-r-0 rounded-l-lg px-3 py-2 bg-gray-100">
                      <option value="USD">USD</option>
                      <option value="BDT">BDT</option>
                    </select>
                  )}
                />
                <Controller
                  name="amount"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => onChange(Number(e.target.value))}
                      className={`w-full px-4 py-2 border-y border-r rounded-r-lg transition-all focus:outline-none focus:ring-2 
                        ${
                          errors.amount
                            ? "border-red-500 focus:ring-red-300"
                            : "border-gray-300 focus:ring-blue-500"
                        }`}
                      placeholder="Enter amount"
                    />
                  )}
                />
              </div>
              {(errors.currency || errors.amount) && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.amount?.message || errors.currency?.message}
                </p>
              )}
            </div>
          </div>
  
          {/* Office Categorie Dropdown */}
          <div>
            <label className="block text-gray-700 mb-2">Office Categorie</label>
            <Controller
              name="office_categorie"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className={`w-full px-4 py-3 border rounded-lg transition-all focus:outline-none focus:ring-2 
                    ${
                      errors.office_categorie
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}>
                  {officeCategorieOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.office_categorie && (
              <p className="text-red-500 text-sm mt-1">
                {errors.office_categorie.message}
              </p>
            )}
          </div>
  
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-200 to-purple-500 hover:from-blue-200 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                }`}>
              {isSubmitting ? "Submitting..." : "Submit Office Categorie"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default AddOfficeCategorie;
