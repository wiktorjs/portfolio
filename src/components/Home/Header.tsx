import Button from '../UI/Button/Button';
import ProfileCard from '../UI/ProfileCard/ProfileCard';
import SocialMedia from '../UI/SocialMedia/SocialMedia';
import classes from './Header.module.scss';
import headerImage from '@/img/header-image.svg';
import logoImage from '@/img/logo.webp';

export default function Header() {
  return (
    <header className={classes.header} >
      <img className={classes.logo} src={logoImage.src} alt="wiktorjs logo" />
      
      <div className={classes.content}>
        <div className={classes.text}>
          <h1 >
            <span>Hello,</span> <span>my name is</span> <span>Wiktor</span>
          </h1>

          <h2 className={classes.h2}>Front-end Developer</h2>

          <div className={classes.buttons}>
            <Button text="Let's talk" href='#contact' />
            <Button text="Download CV" reverse href='https://drive.google.com/file/d/1gQKldF3KdkhdsvH7nFF6olfL8gJkpVv_/view?usp=sharing' blank />
          </div>

          <SocialMedia />
        </div>

        <div className={classes.graphics}>
          <img className={classes['graphics-bg']} src={headerImage.src} alt='Header background image' />
          <ProfileCard />
        </div>
      </div>

    </header>
  );
}
