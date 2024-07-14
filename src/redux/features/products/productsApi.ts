import { baseApi } from "../../api/baseApi";
import { setProducts } from "./productSlice";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (limit?: number) => ({
        url: limit ? `/products?limit=${limit}` : "/products",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProducts(data.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
