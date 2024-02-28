import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../reducers/authReducer";
import { IContent } from "../../types/content-types";

const BASE_URL = "http://localhost:8080/api/v1/users";

export const authApi = createApi({
  reducerPath: "authApi",
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
    signin: builder.mutation({
      query: (payload) => ({
        url: "/signin",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data); //TODO: REMOVE IN PRODUCTION
          if (data.token) {
            localStorage.setItem("accessToken", data.token);
            dispatch(setUser(data.user));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),

    signup: builder.mutation({
      query: (payload) => ({
        url: "/signup",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data); //TODO: REMOVE IN PRODUCTION
        } catch (error) {
          console.log(error);
        }
      },
    }),

    authMe: builder.query({
      query: () => ({
        url: "/auth-me",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.log(error);
          localStorage.removeItem("accessToken");
        }
      },
    }),

    likeContent: builder.mutation({
      query: (payload) => ({
        url: "/likeContent",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data.message);
        } catch (error) {
          console.log(error);
          //TODO: display error to the user
        }
      },
    }),

    getLikedContent: builder.query<string[], null>({
      query: () => ({
        url: "/getUsersLikedContents",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLikeContentMutation,
  useAuthMeQuery,
  useSigninMutation,
  useSignupMutation,
  useGetLikedContentQuery,
} = authApi;
