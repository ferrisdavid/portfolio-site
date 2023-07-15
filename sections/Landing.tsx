// Components.
import { m } from "framer-motion";
import Image from "next/image";

// Variants.
import {
  LandingVariants,
  LandingDescriptionVariants,
  LandingDescriptionSectionsVariants,
} from "../constants/variants";

// Assets.
import LandingAnimoji from "../assets/LandingAnimoji.png";
import github from "../assets/github-logo.png";
import linkedin from "../assets/linkedin-logo.png";
import gmail from "../assets/gmail-logo.png";
import file from "../assets/file-text.png";

// Styles
import styles from "./Section.module.scss";

/****************************************
 * Landing.tsx -
 ****************************************/
const Landing = () => {
  // Render.
  return (
    <m.div
      id="landing"
      className={styles.landingSection}
      variants={LandingVariants}
      initial="hidden"
      animate="visible"
    >
      <Image
        className={styles.heroImg}
        src={LandingAnimoji}
        alt="David Ferris Greeting Image"
        quality={100}
      />
      <m.div className={styles.greeting} variants={LandingDescriptionVariants}>
        <m.div
          className={styles.intro}
          variants={LandingDescriptionSectionsVariants}
        >
          Hey There,
        </m.div>
        <m.div
          className={styles.name}
          variants={LandingDescriptionSectionsVariants}
        >
          I&apos;m David Ferris.
        </m.div>
        <m.div
          className={styles.title}
          variants={LandingDescriptionSectionsVariants}
        >
          Full Stack Software Engineer.
        </m.div>
        <m.div
          className={styles.description}
          variants={LandingDescriptionSectionsVariants}
        >
          I am a Software Engineer based out of Toronto Ontario with a passion
          for creating impactful software tools and smooth UI experiences.
        </m.div>
        <m.div
          className={styles.socials}
          variants={LandingDescriptionSectionsVariants}
        >
          <div className={styles.socialLogo} title="Github">
            <Image
              src={github}
              alt="Github Logo"
              quality={100}
              onClick={() =>
                window.open("https://github.com/ferrisdavid", "_blank")
              }
            />
          </div>
          <div className={styles.socialLogo} title="LinkedIn">
            <Image
              src={linkedin}
              alt="LinkedIn Logo"
              quality={100}
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/david-ferris-software/",
                  "_blank"
                )
              }
            />
          </div>
          <div className={styles.socialLogo} title="Gmail">
            <Image
              src={gmail}
              alt="Gmail Logo"
              quality={100}
              onClick={() =>
                (window.location.href = "mailto:david.ferris@torontomu.ca")
              }
            />
          </div>
          <div className={styles.socialLogo} title="Resume">
            <Image
              src={file}
              alt="Resume Logo"
              quality={100}
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/e/2PACX-1vRBGfIjTFmpGrxrN4MLDToB9Y4TnkIwh1RPvomOC42LtzYnFL0QSXblhfeRczUfYY-ApBWyrnOvG5O8/pub",
                  "_blank"
                )
              }
            />
          </div>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Landing;
