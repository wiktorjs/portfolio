
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import classes from './SocialMedia.module.scss';
export default function SocialMedia() {
  return (
    <div className={classes.social}>
      <a
        className={classes.link}
        href="https://www.linkedin.com/in/wiktorjs"
        target="_blank"
      >
        <LinkedinLogo weight="regular" className={classes.icon} />
      </a>

      <a className={classes.link} href="https://github.com/wiktorjs" target="_blank">
        <GithubLogo weight='regular' className={classes.icon} />
      </a>

      <a className={classes.link} href="#contact">
        <EnvelopeSimple weight='regular' className={classes.icon} />
      </a>
    </div>
  );
}
