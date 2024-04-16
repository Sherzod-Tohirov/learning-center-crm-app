import "./table.css";

export function Table({ children, stylex = '', ...rest }) {
  return (
    <table className={`table ${stylex}`} {...rest}>
      {children}
    </table>
  );
}
