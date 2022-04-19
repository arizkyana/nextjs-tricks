import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  count: 0,
};
// slices
const slices = createSlice({
  initialState,
  name: "counter",
  reducers: {
    setIncrement(state, action) {
      Object.assign(state, {
        ...state,
        count: state.count + 1,
      });
    },
    setDecrement(state, action) {
      Object.assign(state, {
        ...state,
        count: state.count - 1,
      });
    },
  },
});

export const { setIncrement, setDecrement } = slices.actions;

// ATM
export const useCounterDispatcher = () => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const makeIncrement = () => dispatch(setIncrement());
  const makeDecrement = () => dispatch(setDecrement());

  return {
    counter,
    makeIncrement,
    makeDecrement,
  };
};

export default slices.reducer;
