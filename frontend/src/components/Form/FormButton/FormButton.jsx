import "./formbtn.css";

export function FormButton({ children, stylex = '', ...rest }) {
  return (
    <button className={`form-btn ${stylex}`} type="submit" {...rest}>
      {children}
    </button>
  );
}
