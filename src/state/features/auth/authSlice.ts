import { InitialStateType } from ".";
import { authApi } from "./authApi";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialStateType = {
  token: localStorage.getItem("signInToken") || "",
  isLoggedIn: localStorage.getItem("signInToken") !== null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      localStorage.removeItem("signInToken");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, action) => {
        const token = action.payload.token;
        localStorage.setItem("signInToken", token);
      }
    );
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
