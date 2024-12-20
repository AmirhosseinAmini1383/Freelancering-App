import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSendOtp, isSendingOtp ,register}) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSendOtp}>
        <TextField name="phoneNumber" label="شماره موبایل" register={register} />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full text-white">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
