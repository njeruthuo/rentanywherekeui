export type InitialStateType = {
  token: string;
  isLoggedIn: boolean;
};

import authReducer from "./authSlice";

export { authReducer };
