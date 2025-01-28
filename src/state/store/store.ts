import { configureStore } from "@reduxjs/toolkit";

import { authApi, authReducer } from "../features/auth";
import { rentalApi, rentalReducer } from "../features/rentals";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,

    rental: rentalReducer,
    [rentalApi.reducerPath]: rentalApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, rentalApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
