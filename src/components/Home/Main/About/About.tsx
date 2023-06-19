import Button from '@/components/UI/Button/Button';
import classes from './About.module.scss';
import aboutImg from '@/img/wiktorjs.webp';
import Background from '@/components/UI/Background/Background';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <section
      id="about"
      ref={ref}
      className={`${classes.section} ${inView ? classes.visible : ''}`}
    >
      <Background reverse />

      <div className={classes.wrapper}>
        <h2>About Me</h2>

        <div className={classes.about}>
          <h3 className={classes.h3}>Front-end Developer</h3>

          <div className={classes.text}>
            <p>
              Hi there! My name is Wiktor - currently a first year student at
              University of Warsaw. In 2022 I&apos;ve discovered my passion for
              coding. I tried many things but it was front-end development that
              truly captured my heart. Keeping an eye for each and tiniest of
              details, I strive to create visually appealing web applications. I
              always make sure that my apps are well-optimized, easy to use by
              the end users and run smoothly. Let&apos;s connect and discuss how
              I can contribute to your next front-end development project.
            </p>
            <img
              className={classes.img}
              src={aboutImg.src}
              alt="Wiktor's photo"
            />
          </div>

          <Button text="Contact Me" href="#contact" />
        </div>
      </div>
    </section>
  );
}
