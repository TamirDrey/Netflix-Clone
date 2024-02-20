import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../reducers/authReducer";


// Replace this with your actual API endpoint
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

    login: builder.mutation({
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
        async onQueryStarted(args, {dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            console.log(data); //TODO: REMOVE IN PRODUCTION 
          } catch (error) {
            console.log(error);
          }
        },
      }),

  }),
});

export const {
  useLoginMutation,
  useAuthMeQuery,
  useSignupMutation
} = authApi;
