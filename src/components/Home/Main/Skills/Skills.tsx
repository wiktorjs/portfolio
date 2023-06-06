import classes from './Skills.module.scss';
import skillsArr from '@/store/skills-images';

export default function Skills() {
  return (
    <section id="skills">
      <h2>Main Skillset</h2>
      <ul className={classes.list}>
        {skillsArr.map((skill, i) => (
          <li key={i}>
            <img src={skill.image} alt={`${skill.name} logo`} /> {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
