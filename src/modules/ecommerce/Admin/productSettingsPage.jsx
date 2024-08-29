import React, { useEffect } from 'react';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import AppLoader from '@crema/components/AppLoader';
import AppAnimate from '@crema/components/AppAnimate';
import { useParams } from 'react-router-dom';
import { isEmptyObject } from '@crema/helpers/ApiHelper';
import AddEditProduct from './ProductSettings';
import { useGetProductByIdQuery } from '@crema/Slices/productsSlice';

const ProductEditPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product...</div>;

  console.log(product);
  return (
    <AddEditProduct selectedProd={product} />
  
  );
};
export default ProductEditPage;
