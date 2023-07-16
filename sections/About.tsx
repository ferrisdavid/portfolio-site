import { m } from "framer-motion";

// Variants.
import { ArrowVariants } from "../constants/variants";

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
    <section>
      <div id="about" className={styles.sectionLink}></div>
      <h1 className={styles.sectionHeader}>About</h1>
      <div className={styles.aboutContainer}>
        <m.div
          className={styles.triangle}
          variants={ArrowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <PersonalSpotlight />
        <QualificationsTabs tabs={Tabs} />
      </div>
    </section>
  );
};

export default About;
