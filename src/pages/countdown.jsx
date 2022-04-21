import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CountDownPage = () => {
  let intervalCountDown;
  const [counting, setCounting] = useState(3);
  const [startCounting, setStartCounting] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (startCounting) {
      intervalCountDown = setInterval(() => {
        setCounting(counting - 1);
      }, 1000);
      if (counting === 1) {
        clearInterval(intervalCountDown);
        // window.location.href = "http://google.com";
        push("/verifikasi");
      }
    }
  }, [startCounting, counting]);

  const handleCountDown = () => {
    setStartCounting(true);
  };

  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl">{counting}</h1>
      </div>
      <div>
        <button
          onClick={() => handleCountDown()}
          type="button"
          className="bg-blue-600 text-white p-3 rounded-lg"
        >
          Please Wait {counting}s
        </button>
      </div>
    </div>
  );
};

export default CountDownPage;
