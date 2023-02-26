// Components.
import GalaxyCanvas from "../components/GalaxyCanvas/GalaxyCanvas";

// Constants.

// Styles.
import styles from "./Section.module.scss";

/****************************************
 * Contact.tsx -
 ****************************************/
const Contact = () => {
  // Render.
  return (
    <div className={styles.waveContainer}>
      <div id="contact" className={styles.sectionLink}></div>
      <div className={styles.contactContainer}>
        <div className={styles.sectionHeader}>Contact</div>
      </div>
      <GalaxyCanvas />
    </div>
  );
};

export default Contact;
