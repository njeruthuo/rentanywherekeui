import { BASE_URL } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rentalApi = createApi({
  reducerPath: "rentalApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Rentals"],
  endpoints: (builder) => ({
    getRentalList: builder.query({
      query: () => `rentals/rental_api_view/`,
      providesTags: ["Rentals"],
    }),

    createRental: builder.mutation({
      query: (values) => {
        // Convert values to FormData
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((file) => formData.append(key, file));
          } else {
            formData.append(key, value);
          }
        });

        return {
          url: "rentals/rental_api_view/",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Rentals"],
    }),
  }),
});

export const { useCreateRentalMutation, useGetRentalListQuery } = rentalApi;
