import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// import product from "./reducers/product";
import counter from "./reducers/counter";

// BANK
const rootReducer = combineReducers({
  // product,
  counter,
});
const store = configureStore({
  reducer: rootReducer,
});

// export type RootState = ReturnType<typeof store.getState>;

export default store;
