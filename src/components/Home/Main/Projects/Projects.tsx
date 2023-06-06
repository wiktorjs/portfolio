import projectsArr from "@/store/projects";
import Project from "./Project";
import classes from "./Projects.module.scss";

export default function Projects() {
    return(
        <section id="projects">
      <h2>My Latest Projects</h2>

      <div className={classes.projects}>
        {projectsArr.map((project, i) => <Project key={i} title={project.name} text={project.desc} />)}

      </div> 
    </section>

    )
}