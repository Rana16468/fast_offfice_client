import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../../../shared/Loading/Loading";
import { toast } from "react-hot-toast";
import SpecificCategorieDetails from "./SpecificCategorieDetails";

const SpecificCategorie = () => {
  const [searchParams] = useSearchParams();
  const categorie = searchParams.get("v");
  const [page, setPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const {
    data: office_categorie = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["office_categorie", categorie, page],
    queryFn: async () => {
      const res = await fetch(
        `${
          import.meta.env.VITE_COMMON_ROOT
        }/api/v1/office_categorie/get_all_office_categorie?office_categorie=${categorie}&page=${page}`,
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
    console.error("Fetch error:", error);
    return <p className="text-red-500">Error loading data: {error.message}</p>;
  }

  


  return (
    <>
      {
        !isLoading && <SpecificCategorieDetails office_categorie={office_categorie} handlePageChange={handlePageChange} page={page}  refetch={ refetch}/>
      }
    </>
  );
};

export default SpecificCategorie;