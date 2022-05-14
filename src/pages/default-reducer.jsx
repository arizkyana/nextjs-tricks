import { useReducer } from "react";

const TYPE = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.INCREMENT:
      return { count: state.count + 1 };
    case TYPE.DECREMENT:
      return { count: state.count - 1 };
  }
};

const CounterPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count {state.count}
      <div>
        <button
          type="button"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => dispatch({ type: TYPE.INCREMENT })}
        >
          +
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-red-600 text-white rounded-lg"
          onClick={() => dispatch({ type: TYPE.DECREMENT })}
        >
          -
        </button>
      </div>
    </>
  );
};

export default CounterPage;
