import "./formfileinput.css";

export function FormFileInput({ children, id, ...rest }) {
  return (
    <div className="flex">
      <label className="file-label" htmlFor={id}>
        Yuklash
      </label>
      <input
        className="file-input"
        id={id}
        type="file"
        accept="image/*"
        {...rest}
      />
    </div>
  );
}
