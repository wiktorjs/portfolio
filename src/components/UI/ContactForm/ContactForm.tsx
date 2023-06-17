import Input from './Input';
import classes from './ContactForm.module.scss';
import Button from '../Button/Button';
import { FormikErrors, Formik, Form, Field, ErrorMessage } from 'formik';
import { useRef, useState } from 'react';

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
  const formEl = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const initialValues: FormValues = {
    name: '',
    email: '',
    text: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        formEl.current?.submit();
        actions.setSubmitting(false);
        setFormSubmitted(true);
        actions.resetForm();
      }}
      validate={validate}
      isInitialValid={false}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <Form
          className={classes.form}
          action={
            formSubmitted ? '' : 'https://formsubmit.co/3c664f1d39a4f220e1c6c5e5ad9fd83a'
          }
          method="post"
          target='_blank'
          ref={formEl}
        >
          <Input
            type="name"
            placeholder="John Smith"
            error={errors.name}
            touched={touched.name}
            disabled={formSubmitted}
          />

          <Input
            type="email"
            htmlType="email"
            placeholder="example@site.com"
            error={errors.email}
            touched={touched.email}
            disabled={formSubmitted}
          />

          <label
            className={
              touched.text && errors.text ? classes['label-invalid'] : ''
            }
            htmlFor="text"
          >
            Your message*
          </label>

          <Field
            as="textarea"
            id="text"
            name="text"
            placeholder="Type your message"
            className={
              touched.text && errors.text ? classes['input-invalid'] : ''
            }
            disabled={formSubmitted}
          />

          <ErrorMessage
            name="text"
            render={(msg) => <p className={classes['error-message']}>{msg}</p>}
          />

          <Button
            text={
              isSubmitting
                ? 'Submitting...'
                : formSubmitted
                ? 'Done!'
                : 'Contact Me'
            }
            reverse
            form
            invalid={!isValid}
            disabled={isSubmitting || formSubmitted}
          />

          {formSubmitted && <p className={classes.info}>Your inquiry was sent. Thank you!</p>}

          <input type="hidden" name="_captcha" value="false"></input>
        </Form>
      )}
    </Formik>
  );
}
