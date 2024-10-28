// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    jwtToken: builder.mutation({
      query: (arg: { username: string; password: string }) => {
        return {
          url: config.TOKEN_URL,
          method: "POST",
          data: arg,
        };
      },
    }),
    refreshToken: builder.mutation({
      query: (arg: { refresh: string }) => {
        return {
          url: config.REFRESH_TOKEN_URL,
          method: "POST",
          data: arg,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useJwtTokenMutation, useRefreshTokenMutation } = authApi;
