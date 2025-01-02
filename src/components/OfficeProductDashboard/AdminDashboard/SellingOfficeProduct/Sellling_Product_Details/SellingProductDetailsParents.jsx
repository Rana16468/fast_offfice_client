import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../../../shared/Loading/Loading";
import ErrorPage from "../../../../../shared/Error/ErrorPage";
import SellingProductDetails from "./SellingProductDetails";

const SellingProductDetailsParents = () => {
  const { categorieId } = useParams();

  const {
    data: office_product = [],
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["office_product",categorieId],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_COMMON_ROOT
          }/api/v1/office_product/specific_office_selling_infastructute/${categorieId}`,
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
        if (error) {
          toast.error(error?.message);
        }
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
     return <ErrorPage message={error?.message}/>
  }


  return (
      <>

      {
          !isLoading && <SellingProductDetails productdetails={office_product?.data?.result} refetch={refetch}/>
      }
          
      </>
  );
};

export default SellingProductDetailsParents;
