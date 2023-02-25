// Components.

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
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "40%",
          color: "white",
        }}
      >
        <div className={styles.sectionHeader}>Contact</div>
      </div>
    </div>
  );
};

export default Contact;
