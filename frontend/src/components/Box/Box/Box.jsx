export function Box({ children, stylex = "", ...rest }) {
  return <div className={`flex items-center ${stylex}`} {...rest}>{children}</div>;
}
