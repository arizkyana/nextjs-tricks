import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useCounterDispatcher } from "../redux/reducers/counter";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { counter, makeDecrement, makeIncrement } = useCounterDispatcher();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl font-bold">{counter.count}</div>
      <div>
        <button
          type="button"
          className="bg-blue-500 text-white p-3"
          onClick={() => makeIncrement()}
        >
          +
        </button>
        <button
          type="button"
          className="bg-red-500 text-white p-3"
          onClick={() => makeDecrement()}
        >
          -
        </button>
      </div>
    </div>
  );
}
