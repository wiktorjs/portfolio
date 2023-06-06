import { FC } from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  text: string;
  reverse?: boolean;
  form?: boolean;
}

const Button: FC<ButtonProps> = ({ text, reverse, form }) => {
  return (
    <a
      className={`${classes.btn} ${reverse ? classes.reverse : ''} ${form ? classes.form : ''}`}
      href="#contact"
    >
      <span className={`${classes.key} ${classes['key--1']}`}></span>
      <span className={classes.text}>{text}</span>
      <span className={`${classes.key} ${classes['key--2']}`}></span>
      <span className={`${classes.key} ${classes['key--3']}`}></span>
    </a>
  );
};

export default Button;
