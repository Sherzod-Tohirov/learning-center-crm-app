import { Edit } from "../../../constants/svg";

export function EditButton({ children, ...rest }) {
  return (
    <button className="action-btn" {...rest}>
      <Edit />
    </button>
  );
}
