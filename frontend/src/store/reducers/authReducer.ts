import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, IUser } from "../../types/auth-reducers";
import { RootState } from "../store";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "kaka",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("accessToken");
      state = initialState;
      return state;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      //handle case of first login
      state.isAuthenticated = true;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;




export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
