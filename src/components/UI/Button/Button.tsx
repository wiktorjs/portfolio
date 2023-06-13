import { FC } from 'react';
import classes from './Button.module.scss';
import { FormikErrors } from 'formik';


interface ButtonProps {
  text: string;
  reverse?: boolean;
  form?: boolean;
  href?: string;
  blank?: boolean;
  invalid?: FormikErrors<{ name: string; email: string; text: string; }> 

}

const Button: FC<ButtonProps> = ({ text, reverse, form, href, blank, invalid }) => {

  return (
    <>
      {!form && (
        <a
          className={`${classes.btn} ${reverse ? classes.reverse : ''}`}
          href={`${href}`}
          target={blank ? '_blank' : '_self'}
        >
          <span className={`${classes.key} ${classes['key--1']}`}></span>
          <span className={classes.text}>{text}</span>
          <span className={`${classes.key} ${classes['key--2']}`}></span>
          <span className={`${classes.key} ${classes['key--3']}`}></span>
        </a>
      )}

      {form && (
        <button
          type="submit"
          className={`${classes.btn} ${reverse ? classes.reverse : ''} ${
            classes.form
          }`}
          disabled
        >
          <span className={`${classes.key} ${classes['key--1']}`}></span>
          <span className={classes.text}>{text}</span>
          <span className={`${classes.key} ${classes['key--2']}`}></span>
          <span className={`${classes.key} ${classes['key--3']}`}></span>
        </button>
      )}
    </>
  );
};

export default Button;
