import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const sliderSettings = {
    // Customize the settings for the slider
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 768, // Adjust settings for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Projects</h2>
      <Slider {...sliderSettings}>
        {projects.map((project, id) => (
          <div key={id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>

      <style>
        {`
  .slick-dots {
        text-align: center;
      }
     
   .slick-dots li button {
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 100%;
        cursor: pointer;
      }
  .slick-prev,.slick-next {
  font-size: 34px; /* Adjust the font size to increase the button size */
  background-color: rgba(0, 0, 0, 0.5); /* Change the button background color */
  width: 30px;
  height: 30px; 
}

/* Add hover styles for better user feedback */
.slick-prev:hover,
.slick-next:hover {
  background-color: rgba(0, 0, 0, 0.7); /* Change the background color on hover */
}
/* Add margin to create a gap between slides */
.projectCardWrapper {
  margin: 0 4rem; /* Adjust the margin to control the gap size */
}
    `}
      </style>
    </section>
  );
};

export default Projects;
