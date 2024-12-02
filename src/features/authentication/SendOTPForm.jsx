import { useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOtpHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="space-y-10" onSubmit={sendOtpHandler}>
        <TextField
          name="phonenumber"
          label="شماره موبایل"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
