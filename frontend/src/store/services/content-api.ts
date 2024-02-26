import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContent } from "../../types/content-types";

const BASE_URL = "http://localhost:8080/api/v1/content";

export const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { endpoint }) => {
      const token = localStorage.getItem("accessToken");
      if (token && endpoint !== "signin") {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getALL: builder.query<IContent[], null>({
      query: () => ({
        url: "/getAll",
        method: "GET",
      }),
    }),
  }),
});

export const {
    useGetALLQuery,
} = contentApi


