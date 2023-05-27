import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./UsersSlice";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: { cart: CartSlice, user: usersSlice },
});
