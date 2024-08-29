// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from "@crema/constants/AppConst.jsx";

export const productVariantApiSlice = createApi({
  reducerPath: 'productVariantApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getProductVariants: builder.query({
      query: () => 'productVariant',
      transformResponse: (response) => ({
        variants : response.results,
        currentPage: response.page,
        totalPages: response.totalPages,
        totalResults: response.totalResults,
      }),
    }),
    addProductVariant: builder.mutation({
      query: (newVariant) => ({
        url: 'productVariant',
        method: 'POST',
        body: newVariant,
      }),
    }),
    updateProductVariant: builder.mutation({
      query: ({ id, ...updatedVariant }) => ({
        url: `productVariant/${id}`,
        method: 'PUT',
        body: updatedVariant,
      }),
    }),
    deleteProductVariant: builder.mutation({
      query: (id) => ({
        url: `productVariant/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProductVariantsQuery,
  useAddProductVariantMutation,
  useUpdateProductVariantMutation,
  useDeleteProductVariantMutation,
} = productVariantApiSlice;
