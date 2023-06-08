import classes from "./MainNavigation.module.scss";
import logoImage from "@/img/logo.webp";
import Button from "../Button/Button";
import NavigationButton from "./NavigationButton";
import { useState } from "react";

export default function MainNavigation() {
  const [isActive, setIsActive] = useState(false);

    return (
      <>
      <NavigationButton active={isActive} onClick={() => setIsActive(prevState => !prevState)} />
        <nav className={`${classes.navigation} ${isActive ? classes.active : ''}`}>
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
      </>
    )
}