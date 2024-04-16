import { Delete } from "../../../constants/svg";

export function DeleteButton({ children, ...rest }) {
  return (
    <button className="action-btn" {...rest}>
      <Delete />
    </button>
  );
}
