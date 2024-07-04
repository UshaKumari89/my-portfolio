import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";
// import { FaArrowUpRight } from 'react-icons/fa';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.aboutDesciption}>
            <p> I am a passionate baker, an expressive painter, and a proud mom of two incredible kids. But that's not all! In 2021, I embarked on a new journey as a Frontend Developer, diving headfirst into online learning. Driven by insatiable curiosity and a love for creating beautiful, efficient user experiences, I've immersed myself in the world of HTML, CSS, and JavaScript.

To further enhance my skills, I secured a spot in the prestigious online Frontend Developer course at Folkuniversitetet in Gothenburg, where I studied from 2022 to 2024. I have successfully completed my studies and a six-month internship at Domestic Holding.

Now, I am eagerly seeking a job opportunity to apply and expand my knowledge in a real-world setting. My journey in Frontend Development has just begun, but I am excited about the endless possibilities and the many creative solutions I will build!

  </p>
            </div>
      </div>
    </section>
  );
};
export default About;