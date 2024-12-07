import React, { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
      toast.success(message);
      // role => push to profile !!
      // status => 0 , 1 , 2 ??
      // check user status to push to profile or not
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-10" onSubmit={handleSubmit}>
          <TextField
            label={"نام و نام خانوادگی"}
            name={"name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label={"ایمیل"}
            name={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              name="role"
              id="OWNER"
              value="OWNER"
              label="کارفرما"
              htmlFor="OWNER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              label="فریلنسر"
              htmlFor="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
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
    </div>
  );
}

export default CompleteProfileForm;
