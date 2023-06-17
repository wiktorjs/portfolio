import { FC } from 'react';
import classes from "./ContactForm.module.scss";

interface InputProps {
  type: string;
  htmlType?: string;
  placeholder: string;
  onChange: any;
  onBlur: any;
  value: string;
  touched: boolean | undefined;
  error: string | undefined;
}

const Input: FC<InputProps> = ({ type, htmlType, placeholder, onChange, onBlur, value, error, touched }) => {
  return (
    <>
      <label htmlFor={type} className={touched && error ? classes['label-invalid'] : ''}>
        {`${type[0].toUpperCase()}${type.slice(1)}`}*
      </label>

      <input
        id={type}
        type={htmlType || 'text'}
        name={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={touched && error ? classes['input-invalid'] : ''}
      />

      {touched && error && <p className={classes['error-message']}>{error}</p>}
    </>
  );
};

export default Input;
