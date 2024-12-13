import { TagsInput } from "react-tag-input-component";

function TagsInputField({ tags, setTags, label }) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700">{label}</label>
      <TagsInput value={tags} onChange={setTags} name="tags" />
    </div>
  );
}

export default TagsInputField;
