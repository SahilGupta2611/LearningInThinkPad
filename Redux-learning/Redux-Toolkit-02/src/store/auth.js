import { createSlice } from "@reduxjs/toolkit";

const intialAuthState = { isAuthenticated: false };
const isLoggedIn = localStorage.getItem("Login");

const authSlice = createSlice({
  name: "Authentication",
  initialState: intialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

if (isLoggedIn) {
  authSlice.actions.login();
}

export const authActions = authSlice.actions;

export default authSlice.reducer;
