import { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="عنوان پروژه"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "عنوان پروژه ضروری است",
            minLength: {
              value: 10,
              message: "حداقل ۱۰ کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />

        <TextField
          label="توضیحات پروژه"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات پروژه ضروری است",
            minLength: {
              value: 15,
              message: "حداقل ۱۵ کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />

        <TextField
          label="بودجه پروژه"
          name="budget"
          register={register}
          type="number"
          required
          validationSchema={{
            required: "بودجه پروژه ضروری است",
          }}
          errors={errors}
        />

        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
}

export default CreateProjectForm;
