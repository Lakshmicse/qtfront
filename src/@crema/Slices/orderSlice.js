// src/features/api/orderApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from "@crema/constants/AppConst.jsx";

export const orderApiSlice = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl  ,
    prepareHeaders: (headers, { getState }) => {
 
     const token = localStorage.getItem('token'); // or use another method to get the token
     if (token) {
       headers.set('Authorization', `Bearer ${token}`);
     }
 
     return headers;
   }
   
   }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({ page = 1, limit = 10 }) => `/order?page=${page}&limit=${limit}`,
     
      transformResponse: (response) => ({
        orders: response.results,
        currentPage: response.page,
        totalPages: response.totalPages,
        totalResults: response.totalResults,
      }),
    }),
    getOrderById: builder.query({
      query: (id) => `/order/${id}`,
    }),
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: '/order',
        method: 'POST',
        body: newOrder,
      }),
       // Pick out data and prevent nested properties in a hook or selector
       transformResponse: (response, meta, arg) => response.data,
    }),
    updateOrder: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/order/${id}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApiSlice;
