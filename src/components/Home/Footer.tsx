import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';

import classes from './Footer.module.scss';
import footerLogo from '@/img/logo.webp';
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <img
          className={classes.logo}
          src={footerLogo.src}
          alt="wiktorjs logo"
        />

        <ul className={classes.list}>
          <li className={classes.item}>
            <a href="#" className={classes.link}>
              Home
            </a>
          </li>
          <li className={classes.item}>
            <a href="#about" className={classes.link}>
              About Me
            </a>
          </li>
          <li className={classes.item}>
            <a href="#skills" className={classes.link}>
              Skillset
            </a>
          </li>
          <li className={classes.item}>
            <a href="#projects" className={classes.link}>
              My Projects
            </a>
          </li>
          <li className={classes.item}>
            <a href="#contact" className={classes.link}>
              Contact
            </a>
          </li>
        </ul>

        <div className={classes.social}>
          <a
            className={classes['icon-box']}
            href="https://www.linkedin.com/in/wiktorjs"
            target="_blank"
          >
            <LinkedinLogo weight="regular" className={classes.icon} />
          </a>

          <a
            className={classes['icon-box']}
            href="https://github.com/wiktorjs"
            target="_blank"
          >
            <GithubLogo weight="regular" className={classes.icon} />
          </a>

          <a className={classes['icon-box']} href="#contact">
            <EnvelopeSimple weight="regular" className={classes.icon} />
          </a>
        </div>

        <p className={classes.copyright}>
          Copyright &copy; {new Date().getFullYear()} by Wiktor Sienkiewicz
          <span>
            Design inspired by&nbsp;
            <a target="_blank" href="https://www.behance.net/99Ahmedhamed">
              Ahmed Hamed
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
