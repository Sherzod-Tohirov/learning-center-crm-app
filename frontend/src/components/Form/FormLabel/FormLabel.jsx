import './formlabel.css';

export function FormLabel({ children, ...rest }) {
  return <label className="form-label" {...rest}>{children}</label>;
}
