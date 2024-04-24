import './formlabel.css';

export function FormLabel({ children, id = '', ...rest }) {
  return <label id={id} className="form-label" {...rest}>{children}</label>;
}
