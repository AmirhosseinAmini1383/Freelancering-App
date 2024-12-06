import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function AuthContainer() {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09904369464");

  const {
    isPending: isSendingOtp,
    data: otpResponse,
    error,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            setStep={setStep}
            onSendOtp={sendOtpHandler}
            isSendingOtp={isSendingOtp}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onReSendOtp={sendOtpHandler}
            phoneNumber={phoneNumber}
            onBack={() => setStep((prevStep) => prevStep - 1)}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
