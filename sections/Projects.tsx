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
    <section>
      <div id="projects" className={styles.sectionLink}></div>

      <h1 className={styles.sectionHeader}>Projects</h1>
      <div className={styles.showcaseContainer}>
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
    </section>
  );
};

export default Projects;
