import './icon.css';

export function FormIcon({ children, icon = "", stylex = "" }) {
  return <span className={`icon ${stylex} ${icon}`}>{children}</span>;
}
