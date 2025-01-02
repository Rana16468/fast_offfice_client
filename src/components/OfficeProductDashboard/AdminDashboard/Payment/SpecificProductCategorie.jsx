import React from "react";
import { MapPin, Home, DollarSign, Calendar, ExternalLink } from "lucide-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../shared/Loading/Loading";
import ErrorPage from "../../../../shared/Error/ErrorPage";

const SpecificProductCategorie = () => {
  const { categorieId } = useParams();
  const {
    data: specific_office_categorie = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["specific_office_categorie", categorieId],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_COMMON_ROOT
          }/api/v1/office_categorie/get_specific_office_selling_categorie/${categorieId}`,
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {!isLoading && specific_office_categorie?.success && (
        <>
          <div className="max-w-xl mx-auto bg-gradient-to-r from-white via-gray-200 to-gray-100 rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-lg">
                  {specific_office_categorie?.data.office_categorie}
                </span>
                <span className="text-sm text-gray-500">
                  Listed:{" "}
                  {formatDate(specific_office_categorie?.data.createdAt)}
                </span>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-medium text-gray-900 text-lg">
                    {specific_office_categorie?.data.location}
                  </h3>
                  <a
                    href={specific_office_categorie?.data.maplocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-1 underline">
                    View on Map <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <Home className="w-6 h-6 text-green-500" />
                <span className="text-gray-700 text-lg">
                  {specific_office_categorie?.data.squareFootage.toLocaleString()}{" "}
                  sq ft
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-yellow-500" />
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {specific_office_categorie?.data.amount.toLocaleString()}
                  </span>
                  <span className="text-gray-600 text-lg">
                    {specific_office_categorie?.data.currency}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-500 mt-6 pt-4 border-t">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span>
                  Last updated:{" "}
                  {formatDate(specific_office_categorie?.data.updatedAt)}
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-full mx-auto my-6">
            <div className="relative bg-gradient-to-r from-blue-200 to-blue-500 text-white rounded-lg shadow-lg p-6 my-8">
              <div className="absolute inset-0 opacity-10 bg-[url('https://source.unsplash.com/800x600/?office,city')] bg-cover bg-center"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold text-center mb-2">
                  <span className="block uppercase tracking-wider">Our</span>
                  <span className="block uppercase tracking-wider text-yellow-300">
                    Head Office Location
                  </span>
                </h2>
                <p className="text-center text-lg mb-4">
                  Visit us to explore opportunities and connect in person at our
                  prime location.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.000000000000!2d90.36100000000001!3d23.75000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s11+Diamond+Road,+Dhaka,+Bangladesh!5e0!3m2!1sen!2sbd!4v0000000000000"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"></iframe>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SpecificProductCategorie;
