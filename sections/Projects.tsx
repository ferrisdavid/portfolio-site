import { m } from "framer-motion";

// Variants.

// Components.
import ProjectShowcase from "../components/ProjectShowcase/ProjectShowcase";
import ProjectSeparator from "../theme/ProjectSeparator/ProjectSeparator";

// Constants.
import {
  GroceryStoreConfig,
  SortingVisualizerConfig,
  PortfolioSiteConfig,
} from "../constants/projects";

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
      <div className={styles.sectionHeader}>Projects</div>
      <div style={{ padding: "25px 35px" }}>
        <ProjectShowcase
          title={GroceryStoreConfig.title}
          overview={GroceryStoreConfig.overview}
          src={GroceryStoreConfig.src}
          descriptionConfig={GroceryStoreConfig.descriptionConfig}
        />
        <ProjectSeparator />
        <ProjectShowcase
          title={SortingVisualizerConfig.title}
          overview={SortingVisualizerConfig.overview}
          src={SortingVisualizerConfig.src}
          descriptionConfig={SortingVisualizerConfig.descriptionConfig}
        />
        <ProjectSeparator orientation="right" />
        <ProjectShowcase
          title={PortfolioSiteConfig.title}
          overview={PortfolioSiteConfig.overview}
          src={PortfolioSiteConfig.src}
          descriptionConfig={PortfolioSiteConfig.descriptionConfig}
        />
      </div>
    </div>
  );
};

export default Projects;
