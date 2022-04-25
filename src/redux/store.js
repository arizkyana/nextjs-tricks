import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// import product from "./reducers/product";
import counter from "./reducers/counter";
import login from "./reducers/login";
import sendOtp from "./reducers/send-otp";

// BANK
const rootReducer = combineReducers({
  // product,
  counter,
  login,
  sendOtp,
});
const store = configureStore({
  reducer: rootReducer,
});

// export type RootState = ReturnType<typeof store.getState>;

export default store;
