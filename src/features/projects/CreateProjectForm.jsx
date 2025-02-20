import { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import TagsInputField from "../../ui/TagsInput";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hook/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || new Date()));

  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="عنوان"
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
          label="توضیحات"
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
          label="بودجه"
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

        <div className="!mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button
              type="submit"
              className="btn btn--primary w-full text-white"
            >
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProjectForm;
