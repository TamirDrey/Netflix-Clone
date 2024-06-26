import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, IUser } from "../../types/auth-reducers";
import { RootState } from "../store";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("accessToken");
      state = initialState;
      return state;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      return state;
    },
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectUser = (state: RootState) => state.auth.user;
