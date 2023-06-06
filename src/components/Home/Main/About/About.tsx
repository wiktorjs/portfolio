import classes from "./About.module.scss";
import aboutImg from "@/img/wiktorjs.webp";
export default function About() {
    return(
        <section id="about">
        <h2>About Me</h2>
  
        <div className={classes.about}>
          <h3 className={classes.h3}>Front-end Developer</h3>
  
          <div className={classes.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              recusandae, harum illum ipsa nemo animi deleniti, saepe nam est
              adipisci tempora neque quasi assumenda fugit ut molestiae laborum
              fugiat? Incidunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestiae inventore possimus culpa ad aliquam ex
              incidunt quisquam reiciendis, fugiat cupiditate velit cum magni
              voluptates. Nulla aspernatur facilis nostrum quasi consequuntur!
            </p>
            <img className={classes.img} src={aboutImg.src} />
          </div>
        
        </div>
      </section>
    )
}