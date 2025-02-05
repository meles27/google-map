// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import { NewsEntityType, PaginatedResponse } from "../types/entity_types";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    listNews: builder.query<PaginatedResponse<NewsEntityType>, { q: string }>({
      query: ({ q }) => {
        return {
          url: config.ALL_NEWS_URL,
          method: "GET",
          params: { q },
        };
      },
    }),
    retrieveNews: builder.query<NewsEntityType, { newsId: string }>({
      query: ({ newsId }) => {
        return {
          url: config.SINGLE_NEWS_URL.replace("${newsId}", newsId),
          method: "GET",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useListNewsQuery, useRetrieveNewsQuery } = newsApi;
