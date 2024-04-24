import { forwardRef } from "react";
import "./forminput.css";

export const FormInput = forwardRef(function FormInput(
  { children, error = false, ...rest },
  ref
) {
  return (
    <div className="relative flex flex-col gap-2">
      <input
        className={`form-input ${error ? "invalid-input" : ""}`}
        ref={ref}
        type="text"
        {...rest}
      />
      {error ? <span className="error-msg">{error}</span> : ""}
    </div>
  );
});
