import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Loading from '../../../shared/Loading/Loading';
import ProductDetails from './ProductDetails';

const ProductDetailsParents = () => {

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
            }/api/v1/office_product/specific_office_infastructure/${categorieId}`,
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
      toast.error(error?.message);
    }


    return (
        <>

        {
            !isLoading && <ProductDetails productdetails={office_product?.data?.result} refetch={refetch}/>
        }
            
        </>
    );
};

export default ProductDetailsParents;