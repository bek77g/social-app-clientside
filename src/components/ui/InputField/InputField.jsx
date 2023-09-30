const InputField = ({
  className,
  errorClassName,
  label,
  type,
  register = () => {},
  name,
  errors = {},
}) => (
  <>
    <input
      className={className}
      type={type}
      placeholder={label}
      {...register(name)}
    />
    {errors[name] && <p className={errorClassName}>{errors[name].message}</p>}
  </>
);

export default InputField;
