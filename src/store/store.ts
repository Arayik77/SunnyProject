import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import userProfileReducer from "../features/users/userProfile";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    userProfile: userProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
