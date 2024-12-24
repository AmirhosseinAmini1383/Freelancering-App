import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import useChangeUserStatus from "./useChangeUserStatus";
import Loading from "../../../ui/Loading";
import { useQueryClient } from "@tanstack/react-query";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeUserStatus } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        label="تغییر وضعیت"
        name="status"
        options={options}
        register={register}
        required
      />
      <div className="!mt-8">
        {isUpdating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full text-white">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default ChangeUserStatus;
