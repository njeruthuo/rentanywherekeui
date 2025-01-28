import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rentalApi = createApi({
  reducerPath: "rentalApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["Rentals"],
  endpoints: (builder) => ({
    createRental: builder.mutation({
      query: (values) => ({
        url: "",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Rentals"],
    }),
  }),
});

export const { useCreateRentalMutation } = rentalApi;
