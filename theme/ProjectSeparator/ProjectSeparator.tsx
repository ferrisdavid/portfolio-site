// Styles.
import styles from "./ProjectSeparator.module.scss";

// Props.
interface Props {
  orientation?: "right" | "left";
}

/****************************************
 * ProjectSeparator.tsx - Visual Theme Component to Separate Project Showcases
 ****************************************/
const ProjectSeparator = ({ orientation = "left" }: Props) => (
  <div className={`${styles.separator} ${styles[orientation]}`}>
    <svg className={styles.rotate}>
      <line x1="15" y1="5" x2="15" y2="50" className={styles.line} />
      <ellipse cx="15" cy="65" rx="7" ry="7" className={styles.circle} />
      <ellipse cx="15" cy="85" rx="4" ry="4" className={styles.circle} />
      <line x1="15" y1="100" x2="15" y2="115" className={styles.line} />
    </svg>
  </div>
);

export default ProjectSeparator;
