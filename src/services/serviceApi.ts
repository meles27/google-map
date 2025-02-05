// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import {
  CreateFeedbackInput,
  PaginatedResponse,
  ServicesEntityType,
} from "../types/entity_types";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    listServices: builder.query<
      PaginatedResponse<ServicesEntityType>,
      { category: string }
    >({
      query: (searchParams) => {
        return {
          url: config.SERVICES_URL,
          method: "GET",
          params: searchParams,
        };
      },
    }),

    createService: builder.mutation({
      query: (event) => {
        return {
          url: config.SERVICES_URL,
          method: "POST",
          data: event,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      },
    }),

    listFeedbacks: builder.query<
      ServicesEntityType[],
      { category: string; serviceId: number }
    >({
      query: (searchParams) => {
        return {
          url: config.SERVICES_FEEDBACKS_URL.replace(
            "${serviceId}",
            searchParams.serviceId.toString()
          ),
          method: "GET",
          params: searchParams,
        };
      },
    }),

    createFeedback: builder.mutation<
      ServicesEntityType,
      CreateFeedbackInput & { serviceId: number }
    >({
      query: ({ serviceId, ...feedback }) => {
        return {
          url: config.SERVICES_FEEDBACKS_URL.replace(
            "${serviceId}",
            serviceId?.toString()
          ),
          method: "POST",
          data: feedback,
        };
      },
    }),

    updateFeedback: builder.mutation<
      ServicesEntityType,
      {
        serviceId: string;
        feedbackId: string;
        status: "pending" | "confirmed" | "rejected";
      }
    >({
      query: (props) => {
        return {
          url: config.SERVICES_FEEDBACK_URL.replace(
            "${serviceId}",
            props.serviceId
          ).replace("${feedbackId}", props.feedbackId),
          method: "POST",
          data: {
            status: props.status,
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useListServicesQuery,
  useCreateServiceMutation,
  useCreateFeedbackMutation,
  useListFeedbacksQuery,
  useUpdateFeedbackMutation,
} = serviceApi;
