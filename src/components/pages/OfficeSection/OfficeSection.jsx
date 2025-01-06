import React, { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Loading from "../../../shared/Loading/Loading";
import ErrorPage from "../../../shared/Error/ErrorPage";
import SpecificCategorieDetails from "../../OfficeProductDashboard/UserDashboard/SpecificCategorie/SpecificCategorieDetails";

const OfficeSection = () => {
  const [page, setPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const {
    data: office_categorie = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["office_categorie", page],
    queryFn: async () => {
      const res = await fetch(
        `${
          import.meta.env.VITE_COMMON_ROOT
        }/api/v1/office_categorie/get_all_office_categorie?page=${page}`,
        {
          method: "GET",
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
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

  return (
    <>
      <div className="mt-16">
        {!isLoading && office_categorie?.success && (
          <SpecificCategorieDetails
            office_categorie={office_categorie}
            handlePageChange={handlePageChange}
            page={page}
            refetch={refetch}
          />
        )}
      </div>
    </>
  );
};

export default OfficeSection;
