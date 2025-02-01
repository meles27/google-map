// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";
import { DashboardDataStructure } from "../types/dashboard_types";

// Define a service using a base URL and expected endpoints
export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    listDashboard: builder.query<DashboardDataStructure, void>({
      query: () => {
        return {
          url: config.DASHBOARD_URL,
          method: "GET",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useListDashboardQuery } = dashboardApi;
