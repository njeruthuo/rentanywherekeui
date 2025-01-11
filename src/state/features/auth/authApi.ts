import { IValues } from "@/types/auth";
import { BASE_URL } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    signIn: builder.mutation<unknown, IValues>({
      query: (values) => ({
        url: "users/user_api_view/",
        method: "POST",
        body: values,
      }),
    }),

    signUp: builder.mutation<unknown, IValues>({
      query: (values) => ({
        url: "users/user_api_view/",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
