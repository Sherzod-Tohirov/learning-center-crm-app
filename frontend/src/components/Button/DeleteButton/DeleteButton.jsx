import { forwardRef } from "react";
import { AnimatedLoaderReddish, Delete } from "../../../constants/svg";

export const DeleteButton = forwardRef(function DeleteButton(
  { children, isLoading = null, ...rest },
  ref
) {
  return (
    <button className="action-btn relative text-red-500" ref={ref} {...rest}>
      <Delete />
    </button>
  );
});
