import RadioInput from "./RadioInput";

function RadioInputGroup({ configs, register, errors, watch }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex items-center justify-center gap-x-8">
        {options.map(({ value, label }) => (
          <RadioInput
            key={value}
            id={value}
            value={value}
            label={label}
            name={name}
            watch={watch}
            register={register}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
