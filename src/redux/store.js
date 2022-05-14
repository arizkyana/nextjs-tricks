import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// import product from "./reducers/product";
import counter from "./reducers/counter";
import login from "./reducers/login";
import sendOtp from "./reducers/send-otp";
import createPost from "./reducers/create-post";
import registrasi from "./reducers/registrasi";
import listPost from "./reducers/list-post";

// BANK
const rootReducer = combineReducers({
  // product,
  counter,
  login,
  sendOtp,
  createPost,
  registrasi,
  listPost,
});
const store = configureStore({
  reducer: rootReducer,
});

// export type RootState = ReturnType<typeof store.getState>;

export default store;
