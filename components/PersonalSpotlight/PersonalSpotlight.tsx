// Animation.
import { m } from "framer-motion";
import { PersonalDescriptionVariants } from "../../constants/variants";

import Image from "next/image";
import ProfilePic from "../../assets/DavidProfilePic.jpg";

// Styles
import styles from "./PersonalSpotlight.module.scss";

/****************************************
 * PersonalSpotlight.tsx - Personal Description
 ****************************************/
const PersonalSpotlight = () => {
  // Render.
  return (
    <m.div
      variants={PersonalDescriptionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.personalSpotlight}
    >
      <m.div
        variants={PersonalDescriptionVariants}
        className={styles.pictureContainer}
      >
        <Image
          className={styles.picture}
          src={ProfilePic}
          alt="Profile Picture"
          height={"95%"}
          width={"95%"}
        />
      </m.div>
      <m.h2
        variants={PersonalDescriptionVariants}
        className={styles.personalDescription}
      >
        Fourth Year Computer Science Student at Ryerson University and SWE based
        in Toronto Ontario.
      </m.h2>
      <m.p
        variants={PersonalDescriptionVariants}
        className={`${styles.secondaryDescription} d-none d-md-block`}
      >
        I have over a years worth of in industry experience as an intern with TD
        Securities where I have developed a strong understanding of the Software
        Development Lifecycle and have honed my skills as both a frontend and
        backend developer using the MERN Stack, (Mongo, Express, React, and
        NodeJS).
      </m.p>

      <m.p
        variants={PersonalDescriptionVariants}
        className={styles.secondaryDescription}
      >
        My love for technology is in building software to create impactful
        experiences for users no matter how big or small.
      </m.p>
    </m.div>
  );
};

export default PersonalSpotlight;
