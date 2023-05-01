import "../components/Login/Login.css";

export default function Input({
  id,
  label,
  placeholder,
  type,
  register,
  errorMessage,
}) {
  return (
    <div className="input-group">
      <label className="input-group__label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="form-control"
        {...register}
      ></input>
      <span className="error-message">{errorMessage}</span>
    </div>
  );
}
