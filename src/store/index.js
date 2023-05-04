import { configureStore } from "@reduxjs/toolkit"
import usersSlice from "./UsersSlice"

export const store = configureStore({
  reducer: { user: usersSlice },
})


