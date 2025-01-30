// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import config from "../config";
import { CreateFeedbackInput, ServicesEntityType } from "../types/entity_types";
import axiosBaseQuery from "../utils/baseQuery/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    listServices: builder.query<ServicesEntityType[], { category: string }>({
      query: (searchParams) => {
        return {
          url: config.SERVICES_URL,
          method: "GET",
          params: searchParams,
        };
      },
    }),

    listFeedbacks: builder.query<
      ServicesEntityType[],
      { category: string; serviceId: string }
    >({
      query: (searchParams) => {
        return {
          url: config.SERVICES_FEEDBACKS_URL.replace(
            "${serviceId}",
            searchParams.serviceId
          ),
          method: "GET",
          params: searchParams,
        };
      },
    }),

    createFeedback: builder.mutation<
      ServicesEntityType,
      CreateFeedbackInput & { serviceId: string }
    >({
      query: ({ serviceId, ...feedback }) => {
        return {
          url: config.SERVICES_FEEDBACKS_URL.replace("${serviceId}", serviceId),
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
  useCreateFeedbackMutation,
  useListFeedbacksQuery,
  useUpdateFeedbackMutation,
} = serviceApi;
