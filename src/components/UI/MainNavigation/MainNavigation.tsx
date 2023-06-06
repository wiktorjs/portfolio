import Image from "next/image";
import classes from "./MainNavigation.module.scss";
import logoImage from "@/img/logo.webp";
import Button from "../Button/Button";

export default function MainNavigation() {

    return (
        <nav className={classes.navigation}>
       <img className={classes.logo} src={logoImage.src}  alt="wiktorjs logo"/>
        <ul className={classes.list}>
          <li className={classes.item}>
            <a href="#" className={classes.link}>Home</a>
          </li>
          <li className={classes.item}>
            <a href="#about" className={classes.link}>About Me</a>
          </li>
          <li className={classes.item}>
            <a href="#skills" className={classes.link}>Skillset</a>
          </li>
          <li className={classes.item}>
            <a href="#projects" className={classes.link}>My Projects</a>
          </li>
          <li className={classes.item}>
           <Button text="Contact Me"/>
          </li>
        </ul>
      </nav>
    )
}