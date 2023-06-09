import classes from './ProfileCard.module.scss';
import cardImage from '@/img/wiktorjs.webp'
export default function ProfileCard() {
  return (
    <div className={classes.card}>
      <img className={classes.img} src={cardImage.src} alt="Wiktor's photo" />
      <div className={classes.text}>
        <p className={classes.p1}>Wiktor Sienkiewicz</p>
        <p className={classes.p2}>Front-end Developer</p>
      </div>
    </div>
  );
}
