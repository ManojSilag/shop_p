import { PRODUCTS_URL } from "../../constant";
import { apiSlice } from "./apiSlice";

export const prodcutsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (ID) => ({
        url: `${PRODUCTS_URL}/${ID}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } =
  prodcutsApiSlice;
