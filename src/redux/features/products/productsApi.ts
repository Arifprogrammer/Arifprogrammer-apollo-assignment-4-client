import { baseApi } from "../../api/baseApi";
import { setProducts } from "./productSlice";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (limit?: number) => ({
        url: limit ? `/products?limit=${limit}` : "/products",
        method: "GET",
      }),
      providesTags: ["products"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProducts(data.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateProducts: builder.mutation({
      query: (products: { _id: string; orderQuantity: number }[]) => {
        return {
          url: "/products",
          method: "PUT",
          body: products,
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery, useUpdateProductsMutation } = productsApi;
