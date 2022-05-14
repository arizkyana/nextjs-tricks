import { useEffect, useState } from "react";

const SimpleState = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("counter now > ", counter);
  }, [counter]);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 5);
          console.log(counter);
        }}
      >
        Click Me {counter}
      </button>
    </div>
  );
};

export default SimpleState;
