// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import { PaginatedResponse, UserEntityType } from "../types/entity_types";
import { JwtTokenIface, LoginType } from "../types/types";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    listUsers: builder.query<PaginatedResponse<UserEntityType>, void>({
      query: () => {
        return {
          url: config.USERS_URL,
          method: "GET",
        };
      },
    }),
    retrieveUser: builder.query<
      PaginatedResponse<UserEntityType>,
      { userId: number | string }
    >({
      query: ({ userId }) => {
        return {
          url: config.USER_URL.replace("${userId}", userId.toString()),
          method: "GET",
        };
      },
    }),
    jwtToken: builder.mutation<JwtTokenIface, LoginType>({
      query: (args) => {
        return {
          url: config.LOGIN_URL,
          method: "POST",
          data: args,
        };
      },
    }),
    refreshToken: builder.mutation({
      query: (args: { refresh: string }) => {
        return {
          url: config.REFRESH_TOKEN_URL,
          method: "POST",
          data: args,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useJwtTokenMutation,
  useRefreshTokenMutation,
  useListUsersQuery,
} = authApi;
