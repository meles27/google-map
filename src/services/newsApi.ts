// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";
import { NewsEntityType } from "../types/entity_types";

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    listNews: builder.query<NewsEntityType[], { q: string }>({
      query: ({ q }) => {
        return {
          url: q ? config.ALL_NEWS_WITH_QUERY_URL : config.ALL_NEWS_URL,
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
