import { FC } from 'react';
import classes from './ContactForm.module.scss';
import { ErrorMessage, Field } from 'formik';

interface InputProps {
  type: string;
  htmlType?: string;
  placeholder: string;
  touched: boolean | undefined;
  error: string | undefined;
  disabled: boolean;
}

const Input: FC<InputProps> = ({
  type,
  htmlType,
  placeholder,
  touched,
  error,
  disabled
}) => {
  return (
    <>
      <label
        htmlFor={type}
        className={touched && error ? classes['label-invalid'] : ''}
      >
        {`${type[0].toUpperCase()}${type.slice(1)}`}*
      </label>

      <Field
        id={type}
        type={htmlType || 'text'}
        name={type}
        placeholder={placeholder}
        className={touched && error ? classes['input-invalid'] : ''}
        disabled={disabled}
      />

      <ErrorMessage
        name={type}
        render={(msg) => <p className={classes['error-message']}>{msg}</p>}
      />
    </>
  );
};

export default Input;
