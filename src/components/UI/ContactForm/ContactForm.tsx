import Input from "./Input";
import classes from './ContactForm.module.scss';
import Button from "../Button/Button";

export default function ContactForm() {
  return (
    <form
      className={classes.form}
      action="mailto:wiktorj.sienkiewicz@gmail.com"
      method="post"
      target="_blank"
    >
    <Input type="name" placeholder="John Smith" />
    <Input type="email" htmlType="email" placeholder="example@site.com" />

      <label className={classes.label} htmlFor="text">
        Your message*
      </label>

      <textarea
        id="text"
        placeholder="Type your message"
        required
      ></textarea>

    <Button text="Contact Me" reverse form />
    </form>
  );
}
