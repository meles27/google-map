// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";
import { TourismEntityType } from "../types/entity_types";

// Define a service using a base URL and expected endpoints
export const tourismApi = createApi({
  reducerPath: "tourismApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    listTourisms: builder.query<TourismEntityType[], void>({
      query: () => {
        return {
          url: config.TOURISMS_URL,
          method: "GET",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useListTourismsQuery } = tourismApi;
