import Button from '@/components/UI/Button/Button';
import classes from './Projects.module.scss';
import { FC } from 'react';
interface ProjectProps {
  title: string;
  text: string;
  img: string;

}

const Project: FC<ProjectProps> = ({ title, text, img }) => {
  return (
    <>
      <div className={`${classes.project}`}>
        <img className={classes.img} src={img} alt={`${title} overview`}  />

        <h3>{title}</h3>

        <p>{text}</p>

        <Button text="View Project" />
      </div>
    </>
  );
};

export default Project;
