// Components.
import QualificationsTabs from "../components/QualificationsTabs/QualificationsTabs";
import PersonalSpotlight from "../components/PersonalSpotlight/PersonalSpotlight";

// Constants.
import { Tabs } from "../constants/tabs";

// Styles.
import styles from "./Section.module.scss";

/****************************************
 * About.tsx -
 ****************************************/
const About = () => {
  // Render.
  return (
    <div>
      <div id="about" className={styles.sectionLink} />
      <div className={styles.sectionHeader}>About</div>
      <div className={styles.aboutContainer}>
        <PersonalSpotlight />
        <QualificationsTabs tabs={Tabs} />
      </div>
    </div>
  );
};

export default About;
