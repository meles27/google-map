// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const mapApi = createApi({
  reducerPath: "mapApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    listMaps: builder.query<object, void>({
      query: () => {
        return {
          url: config.MAP_URL,
          method: "GET",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useListMapsQuery } = mapApi;
