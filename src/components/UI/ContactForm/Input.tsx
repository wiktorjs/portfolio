import { FC } from 'react';

interface InputProps {
  type: string;
  htmlType?: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({ type, htmlType, placeholder }) => {
  return (
    <>
      <label htmlFor={type}>
        {`${type[0].toUpperCase()}${type.slice(1)}`}*
      </label>

      <input
        id={type}
        type={htmlType || 'text'}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;
