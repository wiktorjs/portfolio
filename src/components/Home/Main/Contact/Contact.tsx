import { EnvelopeSimple } from '@phosphor-icons/react';
import classes from './Contact.module.scss';
import ContactForm from '@/components/UI/ContactForm/ContactForm';

export default function Contact() {
  return (
    <section className={classes.contact} id="contact">
      <h2>Contact Me</h2>
      <div className={classes["contact-box"]}>

        <div className={classes["text-box"]}>
            
          <h3>Get In Touch</h3>
          <div className={classes["icon-box"]}>
            <EnvelopeSimple weight='light' className={classes.icon} />

          </div>
        </div>

        <div className={classes["form-box"]}>
          <h4>Contact Info</h4>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
