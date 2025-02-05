// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import { EventEntityType, PaginatedResponse } from "../types/entity_types";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const eventApi = createApi({
  reducerPath: "eventApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    listEvents: builder.query<PaginatedResponse<EventEntityType>, void>({
      query: () => {
        return {
          url: config.EVENTS_URL,
          method: "GET",
        };
      },
    }),
    createEvent: builder.mutation<
      Omit<EventEntityType, "id" | "createdAt" | "updatedAt">,
      object
    >({
      query: (event) => {
        return {
          url: config.EVENTS_URL,
          method: "POST",
          data: event,
        };
      },
    }),
    register: builder.mutation<object, string>({
      query: (eventId) => {
        return {
          url: config.REGISTER_FOR_EVENT_URL.replace("${eventId}", eventId),
          method: "POST",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useListEventsQuery,
  useCreateEventMutation,
  useRegisterMutation,
} = eventApi;
