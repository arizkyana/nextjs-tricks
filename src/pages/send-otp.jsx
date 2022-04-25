import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSendOtpDispatcher } from "../redux/reducers/send-otp";

const SendOtpPage = () => {
  let intervalCountDown;
  const [counting, setCounting] = useState(5); // 60detik
  const [startCounting, setStartCounting] = useState(false);
  const { push } = useRouter();

  const {
    sendOtp: { loading },
    resendOtp,
  } = useSendOtpDispatcher();

  const isStop = false;

  useEffect(() => {
    let timer;
    if (startCounting && counting > 0) {
      timer = setInterval(() => {
        setCounting(counting - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);

      if (counting === 1) {
        setCounting(59);
        setStartCounting(false);
        resendOtp({
          email: "test@mail.com", // -> ganti pakai email yang benar
        });
      }
    };
  }, [startCounting, counting]);

  const handleCountDown = () => {
    setStartCounting(true);
  };

  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col space-y-3 justify-center items-center">
        <div>resend otp in {counting}s</div>
        <button
          onClick={() => handleCountDown()}
          type="button"
          disabled={startCounting}
          className={`${
            startCounting
              ? "bg-gray-600 hover:bg-gray-500"
              : "bg-blue-600 hover:bg-blue-500"
          }  text-white py-3 px-6 rounded-lg`}
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default SendOtpPage;
