import { forwardRef } from 'react';
import './forminput.css';

export const FormInput = forwardRef(function FormInput({ children, ...rest }, ref) {
    return <input className="form-input" ref={ref} type="text" {...rest} />;
  }) 
