import { forwardRef } from "react";
import "./formselect.css";

export const FormSelect = forwardRef(function FormSelect(
  { children, options, ...rest },
  ref
) {
  return (
    <select className="form-select" ref={ref} {...rest}>
      {options.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.value}
        </option>
      ))}
    </select>
  );
});
