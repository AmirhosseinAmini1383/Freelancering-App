import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSendOtp, phoneNumber, onChange, isSendingOtp }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSendOtp}>
        <TextField
          name="phonenumber"
          label="شماره موبایل"
          value={phoneNumber}
          onChange={onChange}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
