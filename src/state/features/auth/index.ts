export type InitialStateType = {
  token: string;
  isLoggedIn: boolean;
};

import authReducer from "./authSlice";
import { authApi } from "./authApi";

export { authReducer, authApi };
