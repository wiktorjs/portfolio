import { useInView } from 'react-intersection-observer';
import classes from './Skills.module.scss';
import skillsArr from '@/store/skills-images';

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 1 });

  return (
    <section id="skills">
      <h2>Main Skillset</h2>
      <ul className={classes.list} ref={ref}>
        {skillsArr.map((skill, i) => (
          <li key={i} className={`${classes.item} ${inView ? classes.visible : ''}`} style={{transitionDelay: `${i/5}s`}}>
            <img src={skill.image} alt={`${skill.name} logo`} /> {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
