// Components.
import Image from "next/image";

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
    <div id="landing" className={styles.landingSection}>
      <Image
        className={styles.heroImg}
        src={LandingAnimoji}
        alt="David Ferris Greeting Image"
        quality={100}
      />
      <div className={styles.greeting}>
        <div className={styles.intro}>Hey There,</div>
        <div className={styles.name}>I&apos;m David Ferris.</div>
        <div className={styles.title}>Full Stack Software Engineer.</div>
        <div className={styles.description}>
          I am a Software Engineer based out of Toronto Ontario with a passion
          for creating impactful software tools and smooth UI experiences.
        </div>
        <div className={styles.socials}>
          <div className={styles.socialLogo}>
            <Image
              src={github}
              alt="Github Logo"
              quality={100}
              onClick={() =>
                window.open("https://github.com/ferrisdavid", "_blank")
              }
            />
          </div>
          <div className={styles.socialLogo}>
            <Image
              src={linkedin}
              className={styles.socialLogo}
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
          <div className={styles.socialLogo}>
            <Image
              src={gmail}
              className={styles.socialLogo}
              alt="Gmail Logo"
              quality={100}
              onClick={() =>
                (window.location.href = "mailto:david.ferris@torontomu.ca")
              }
            />
          </div>
          <div className={styles.socialLogo}>
            <Image
              src={file}
              className={styles.socialLogo}
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
        </div>
      </div>
    </div>
  );
};

export default Landing;
