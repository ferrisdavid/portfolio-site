import { m } from "framer-motion";

// Variants.

// Components.
import ProjectCard from "../theme/ProjectCard/ProjectCard";

// Assets.
import bubbles from "../assets/bubbles.png";

// Styles.
import styles from "./Section.module.scss";

/****************************************
 * Projects.tsx -
 ****************************************/
const Projects = () => {
  // Render.
  return (
    <div>
      <div id="projects" className={styles.sectionLink}></div>
      <div style={{ width: "50%" }}>
        <ProjectCard
          title="The Grocery Store"
          overview="An E-Commerce Grocery Store Site designed for the COVID Age."
          src={bubbles}
        />
      </div>
    </div>
  );
};

export default Projects;
