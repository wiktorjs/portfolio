import Input from './Input';
import classes from './ContactForm.module.scss';
import Button from '../Button/Button';
import { useFormik, FormikErrors } from 'formik';

interface FormValues {
  name: string;
  email: string;
  text: string;
}

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};
  if (!values.name) {
    errors.name = 'Name is required.';
  } else if (values.name.length < 3) {
    errors.name = 'Name must be 3 characters or more';
  }

  if (!values.email) {
    errors.email = 'Email is required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.text) {
    errors.text = 'Message is required.';
  } else if (values.text.length < 20) {
    errors.text = 'Message must be 20 characters or more';
  }

  return errors;
};

export default function ContactForm() {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: '',
    },
    validate,
    onSubmit: (values) => {},
  });

  return (
    <form
      className={classes.form}
      // action="/send_message.ts"
      method="post"
      onSubmit={formik.handleSubmit}
    >
      <Input
        type="name"
        placeholder="John Smith"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.errors.name}
        touched={formik.touched.name}
      />

      <Input
        type="email"
        htmlType="email"
        placeholder="example@site.com"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.errors.email}
        touched={formik.touched.email}
      />

      <label
        className={
          formik.touched.text && formik.errors.text
            ? classes['label-invalid']
            : ''
        }
        htmlFor="text"
      >
        Your message*
      </label>

      <textarea
        id="text"
        placeholder="Type your message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.text}
        className={
          formik.touched.text && formik.errors.text
            ? classes['input-invalid']
            : ''
        }
      ></textarea>
      
      {formik.touched.text && formik.errors.text && (
        <p className={classes['error-message']}>{formik.errors.text}</p>
      )}

      <Button text="Contact Me" reverse form invalid={formik.errors} />
    </form>
  );
}
