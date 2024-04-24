import "./formbtn.css";
import { ClockLoader } from "react-spinners";
export function FormButton({
  children,
  stylex = "",
  isLoading = false,
  disabled,
  ...rest
}) {
  return (
    <button className={`form-btn ${stylex} ${disabled ? 'disabled-btn' : ''}`} type="submit" {...rest} disabled={disabled}>
      {children} <ClockLoader color="#fff" size={20} loading={isLoading} />
    </button>
  );
}
