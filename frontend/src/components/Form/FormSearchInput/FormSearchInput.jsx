import { forwardRef } from "react";
import "./search.css";

export const FormSearchInput = forwardRef(function FormSearchInput(
  { children, ...rest },
  ref
) {
  return <input className="search-input" ref={ref} type="search" {...rest} />;
});
