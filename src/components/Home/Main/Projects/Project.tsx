import Button from "@/components/UI/Button/Button";
import classes from "./Projects.module.scss";
import { FC } from "react";
interface ProjectProps {
    title: string,
    text: string
}

const Project: FC<ProjectProps> = ({title, text}) => {
    return(
        <div className={classes.project}>
        <h3>{title}</h3>

        <p>
          {text}
        </p>
        <div className={classes['img-box']}></div>

        <Button text="View Project" />
      </div>
    )
}

export default Project;