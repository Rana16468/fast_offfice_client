import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-full w-full h-full text-center">
          <div className="bg-gradient-to-r  text-gray-950 p-2 rounded-xl font-serif text-2xl  font-semibold">
            Data Not Found --- Fast Office 
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mt-4">
            We couldn’t find the information you're looking for
          </h3>
          <p className="text-slate-600 mt-2 text-sm">
            Sorry, the data you're trying to access is currently unavailable.
            Please try again later or contact support.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className=  "bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold py-2 px-4 rounded-md">
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
