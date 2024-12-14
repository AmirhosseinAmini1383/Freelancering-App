import { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import TagsInputField from "../../ui/TagsInput";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hook/useCategories";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const { categories } = useCategories();

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

        <RHFSelect
          name="category"
          label="دسته بندی"
          register={register}
          options={categories}
        />

        <TagsInputField tags={tags} setTags={setTags} label="تگ" />

        <DatePickerField date={date} setDate={setDate} label="ددلاین" />

        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
}

export default CreateProjectForm;
