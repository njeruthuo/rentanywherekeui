import { BASE_URL } from "@/lib/constants";
import { IValues, LoginCred } from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    signIn: builder.mutation<unknown, LoginCred>({
      query: (values) => ({
        url: "users/user_api_view/?act=signin",
        method: "POST",
        body: values,
      }),
    }),

    signUp: builder.mutation<unknown, IValues>({
      query: (values) => ({
        url: "users/user_api_view/?act=signup",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
