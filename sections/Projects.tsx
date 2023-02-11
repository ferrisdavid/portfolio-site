import { m } from "framer-motion";

// Variants.

// Components.
import ProjectShowcase from "../components/ProjectShowcase/ProjectShowcase";

// Assets.
import TempShowcase from "../assets/GroceryStoreShowcase.png";

// Styles.
import styles from "./Section.module.scss";

/****************************************
 * Projects.tsx -
 ****************************************/
const Projects = () => {
  const descriptionConfig = {
    orientation: "right",
    descriptions: [
      "Due to COVID-19 the simple task of shopping for daily necessities has become a stressful nightmare for millions around the world, The Grocery Store aims to bring some of the relaxation and comfort back to this process which has been lost.",
      "The Grocery Store is an ecommerce site where users can shop their daily necessities, it implements all the common functionalities of an ecommerce site such as a shopping cart, checkout, and order history, and extends the functionality to become an expansive consumer tool with functions such as a store locator for grocery stores of the users choice, nutritional facts for common food items, as well as a built in grocery list builder to help consumers prepare for their needs.",
    ],
    tools: ["React", "HTML", "CSS"],
    github: "",
    liveLink: "",
  };
  // Render.
  return (
    <div>
      <div id="projects" className={styles.sectionLink}></div>
      <div className={styles.sectionHeader}>Projects</div>
      <div style={{ padding: "25px 35px" }}>
        <ProjectShowcase
          title="The Grocery Store"
          overview="An E-Commerce Grocery Store Site designed for the COVID Age."
          src={TempShowcase}
          descriptionConfig={descriptionConfig as any}
        />
        <div style={{ width: "1px", height: "20px" }} />
        <svg>
          <ellipse
            cx="15"
            cy="15"
            rx="5"
            ry="5"
            stroke="red"
            style={{ fill: "transparent", strokeWidth: "1px" }}
          />
        </svg>
        <div style={{ width: "1px", height: "20px" }} />
      </div>
    </div>
  );
};

export default Projects;
