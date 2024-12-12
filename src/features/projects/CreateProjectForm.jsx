import { useState } from "react";
import TextField from "../../ui/TextField";

function CreateProjectForm() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <form className="">
        <TextField
          label="عنوان پروژه"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
}

export default CreateProjectForm;
