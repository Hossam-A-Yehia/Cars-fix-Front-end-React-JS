import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: JSON.parse(localStorage.getItem("userCars")) || null,
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    startLogin: (state, action) => {
      state.users = null;
      state.isFetching = true;
      state.erorr = false;
    },
    loginSuccess: (state, action) => {
      state.users = action.payload;
      state.isFetching = false;
      state.erorr = false;
      window.localStorage.setItem("userCars", JSON.stringify(state.users));
    },
    loginFailure: (state, action) => {
      state.users = null;
      state.isFetching = false;
      state.erorr = true;
    },
    logout: (state, action) => {
      state.users = null;
      state.isFetching = false;
      state.erorr = true;
      window.localStorage.removeItem("userCars");
    },
    updateUser: (state, action) => {
      state.users = action.payload;
      state.isFetching = false;
      state.erorr = false;
      window.localStorage.setItem("userCars", JSON.stringify(state.users));
    },
  },
});

export const { startLogin, loginSuccess, loginFailure, logout, updateUser } =
  usersSlice.actions;
export default usersSlice.reducer;
