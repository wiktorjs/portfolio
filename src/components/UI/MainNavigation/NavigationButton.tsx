import classes from './NavigationButton.module.scss';
import { FC } from 'react';

interface NavBtnProps {
  active: boolean,
  onClick: () => void,
}
const NavigationButton: FC<NavBtnProps> = ({active, onClick}) => {

  return (
    <button
      className={`${classes.button} ${active ? classes.active : ''}`}
      aria-label="Main Menu"
      aria-controls="mobile-navigation"
      aria-expanded={active}
      onClick={onClick}
    >
      <span className={`${classes.top}  ${ active ? classes.active: ''}`}></span>
      <span className={`${classes.mid}  ${ active ? classes.active: ''}`}></span>
      <span className={`${classes.bottom}  ${ active ? classes.active: ''}`}></span>
    </button>
  );
}

export default NavigationButton;
