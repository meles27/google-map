// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import { BusinessEntityType, PaginatedResponse } from "../types/entity_types";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const businessApi = createApi({
  reducerPath: "businessApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    listBusiness: builder.query<PaginatedResponse<BusinessEntityType>, void>({
      query: () => {
        return {
          url: config.BUSINESSES_URL,
          method: "GET",
        };
      },
    }),
    createBusiness: builder.mutation({
      query: (event) => {
        return {
          url: config.BUSINESSES_URL,
          method: "POST",
          data: event,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useListBusinessQuery, useCreateBusinessMutation } = businessApi;
