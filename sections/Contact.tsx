// Components.
import GalaxyCanvas from "../components/GalaxyCanvas/GalaxyCanvas";

// Icons.
import { FiMail, FiLinkedin, FiGithub, FiFileText } from "react-icons/fi";

// Styles.
import styles from "./Section.module.scss";

/****************************************
 * Contact.tsx -
 ****************************************/
const Contact = () => {
  // Render.
  return (
    <section className={styles.waveContainer}>
      <div id="contact" className={styles.sectionLink}></div>
      
      <div className={styles.contactContainer}>
        <h1 className={styles.sectionHeader}>Contact</h1>
        <div className={styles.content}>
          <h2 className={styles.action}>Lets Get in Touch!</h2>
          <p className={styles.body}>
            If you&apos;re interested in my work or just want to chat, check out
            my resume or reach me through my socials below. I look forward to
            hearing from you!
          </p>
        </div>
        <div className={styles.links}>
          <FiFileText
            size={18}
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/e/2PACX-1vRBGfIjTFmpGrxrN4MLDToB9Y4TnkIwh1RPvomOC42LtzYnFL0QSXblhfeRczUfYY-ApBWyrnOvG5O8/pub",
                "_blank"
              )
            }
          />
          <FiMail
            size={18}
            onClick={() =>
              (window.location.href = "mailto:david.ferris@torontomu.ca")
            }
          />
          <FiLinkedin
            size={18}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/david-ferris-software/",
                "_blank"
              )
            }
          />
          <FiGithub
            size={18}
            onClick={() =>
              window.open("https://github.com/ferrisdavid", "_blank")
            }
          />
        </div>
      </div>

      <GalaxyCanvas />
    </section>
  );
};

export default Contact;
