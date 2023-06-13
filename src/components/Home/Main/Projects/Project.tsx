import Button from '@/components/UI/Button/Button';
import classes from './Projects.module.scss';
import { FC } from 'react';
interface ProjectProps {
  title: string;
  text: string;
  img: string;
  href: string;
}

const Project: FC<ProjectProps> = ({ title, text, img, href }) => {
  return (
    <>
      <div className={`${classes.project}`}>
        <img className={classes.img} src={img} alt={`${title} overview`}  loading='lazy' />

        <h3>{title}</h3>

        <p>{text}</p>

        <Button text="View Project" href={href} blank />
      </div>
    </>
  );
};

export default Project;
