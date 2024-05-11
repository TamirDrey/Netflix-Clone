import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContent } from "../../types/content-types";

const BASE_URL = "https://netflix-clone-server-gamma.vercel.app/api/v1/content";

export const groupByGenre = (contentList: IContent[]) => {
  const grouped: { [key: string]: IContent[] } = {};
  contentList.forEach((content) => {
    if (!grouped[content.genre!]) {
      grouped[content.genre!] = [];
    }
    grouped[content.genre!].push(content);
  });
  return grouped;
};

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
    getById: builder.query<IContent, string>({
      query: (payload) => ({
        url: `/getById/${payload}`,
        method: "GET",
      }),
    }),
    getRandom: builder.query<IContent, null>({
      query: () => ({
        url: "/getRandom",
        method: "GET",
      }),
    }),
    getMovies: builder.query<IContent[], null>({     
      query: () => ({
        url: "/getMovies",
        method: "GET",
      }),
    }),
    getSeries: builder.query<IContent[], null>({
      query: () => ({
        url: "/getSeries",
        method: "GET",
      }),
    }),
    getSearch: builder.query<IContent[], string>({
      query: (searchQuery) => ({
        url: `/search?q=${searchQuery}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetALLQuery,
  useGetByIdQuery,
  useGetRandomQuery,
  useGetMoviesQuery,
  useGetSeriesQuery,
  useGetSearchQuery
} = contentApi;
