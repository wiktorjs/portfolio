import { FC } from 'react';
import classes from './Background.module.scss';

interface BackgroundProps {
  reverse?: boolean;
}
const Background: FC<BackgroundProps> = ({ reverse }) => {
  return (
    <div
      className={`${classes.background} ${reverse ? classes.reverse : ''}`}
    ></div>
  );
};

export default Background;
