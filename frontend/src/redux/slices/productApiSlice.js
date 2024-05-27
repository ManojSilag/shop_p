import { PRODUCTS_URL } from "../../constant";
import { apiSlice } from "./apiSlice";

export const prodcutsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Products']
    }),
    getProductDetails: builder.query({
      query: (ID) => ({
        url: `${PRODUCTS_URL}/${ID}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: "POST",
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['Products']
    }),
  }),
});

export const {
  useGetProductsQuery,
  useUpdateProductMutation,
  useGetProductDetailsQuery,
  useCreateProductMutation,
} = prodcutsApiSlice;
