const InputField = ({
  className,
  errorClassName,
  label,
  type,
  register,
  name,
  errors,
  validation,
}) => (
  <>
    <input
      className={className}
      type={type}
      placeholder={label}
      {...register(name, validation)}
    />
    {errors[name] && <p className={errorClassName}>{errors[name].message}</p>}
  </>
);

export default InputField;
