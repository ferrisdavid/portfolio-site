import { FiTool, FiGithub, FiExternalLink } from "react-icons/fi";

// Animation.
import { m, AnimatePresence } from "framer-motion";

// Components.
import ProjectCard from "../../theme/ProjectCard/ProjectCard";
import { ImageProps } from "next/image";

// Interfaces.
import { IProjectDescriptionConfig } from "../../interfaces/types";

// Styles
import styles from "./ProjectShowcase.module.scss";

// Props
interface Props {
  title: string;
  overview: string;
  src: ImageProps["src"];
  descriptionConfig: IProjectDescriptionConfig;
}

/****************************************
 * ProjectShowcase.tsx - Project Showcase Card with Description + Tools Text
 ****************************************/
const ProjectShowcase = ({
  title,
  overview,
  src,
  descriptionConfig,
}: Props) => {
  const { orientation, descriptions, tools, github, liveLink } =
    descriptionConfig;

  // Helper fns.
  const renderProjectDescription = () => (
    <div className={styles.projectDescription}>
      <div className={styles.header}>Overview</div>
      <div className={styles.descParas}>
        {descriptions.map((desc, i) => (
          <div key={`desc-${title}-${i}`} className={styles.desc}>
            {desc}
          </div>
        ))}
      </div>
      <div className={styles.tools}>
        <FiTool size={20} />
        {tools.join(", ")}
      </div>
      <div className={styles.links}>
        <FiGithub href={github} size={20} />
        <FiExternalLink href={liveLink} size={20} />
      </div>
    </div>
  );

  // Render.
  return (
    <div className={styles.projectShowcase}>
      {orientation === "left" && renderProjectDescription()}
      <ProjectCard title={title} overview={overview} src={src} />
      {orientation === "right" && renderProjectDescription()}
    </div>
  );
};

export default ProjectShowcase;
