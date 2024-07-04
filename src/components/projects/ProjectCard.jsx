import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";



const ProjectCard = ({ project }) => {
    // console.log(project); // lägg till detta
  
    const {title, imageSrc, description, skills, demo, source } = project;
        return (
 <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills ? skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          }) : null}
        </ul>
        </div>
     
        <div className={styles.links}>
          <a href={demo} className={styles.link}>
            Demo
          </a>

          
          <a href={source} className={styles.link}>
            Source
          </a>
        </div>
      </div>
    );
  };


  
  export default ProjectCard;
