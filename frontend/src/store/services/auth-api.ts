import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../reducers/authReducer";

const BASE_URL = "https://netflix-clone-project-backend.vercel.app/api/v1/users";

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
        mode: 'no-cors',
      }),
      async onQueryStarted(_,{ dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
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
      })
    }),

    authMe: builder.query({
      query: () => ({
        url: "/auth-me",
      }),
      async onQueryStarted(_,{ dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user));
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
      async onQueryStarted(_,{ dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useLikeContentMutation,
  useAuthMeQuery,
  useSigninMutation,
  useSignupMutation,
} = authApi;
