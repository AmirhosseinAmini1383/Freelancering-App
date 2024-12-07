import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight, HiRefresh } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";

const RESEND_TIME = 90;
function CheckOTPForm({ phoneNumber, onBack, onReSendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        // push to panel based on role
        // if (user.role === "OWNER") navigate("/owner");
        // if (user.role === "FREELANCER") navigate("/freelancer");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500 mb-2" />
      </button>
      <form onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800 mb-3">
          کد تایید را وارد کنید
        </p>
        {otpResponse && (
          <p className="mb-8 text-secondary-500 flex items-center gap-x-1 text-sm">
            <span>{otpResponse?.message}</span>
            <button onClick={onBack}>
              <CiEdit className="w-5 h-5 text-primary-900" />
            </button>
          </p>
        )}
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> - </span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 items-center justify-between"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: "0.5rem",
          }}
        />
        <div className="mt-4 mb-10 text-secondary-500 text-sm">
          {time > 0 ? (
            <p>{time} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={onReSendOtp} className="flex items-center gap-x-1">
              <span>ارسال مجدد کد تایید</span>
              <span>
                <HiRefresh className="w-4 h-4 text-primary-900" />
              </span>
            </button>
          )}
        </div>
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
