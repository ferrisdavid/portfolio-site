import { FiTool, FiGithub, FiExternalLink } from "react-icons/fi";
import { m } from "framer-motion";

// Components.
import ProjectCard from "../../theme/ProjectCard/ProjectCard";
import { ImageProps } from "next/image";

// Variants.
import { ProjectShowcaseDescVariants } from "../../constants/variants";

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
    <m.div
      className={styles.projectDescription}
      variants={ProjectShowcaseDescVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.75 }}
    >
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
        <FiGithub onClick={() => window.open(github)} size={20} />
        <FiExternalLink onClick={() => window.open(liveLink)} size={20} />
      </div>
    </m.div>
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
