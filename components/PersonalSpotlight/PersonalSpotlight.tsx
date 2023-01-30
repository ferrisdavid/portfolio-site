// Animation.
import { motion, AnimatePresence } from "framer-motion";
import {
  QualificationsVariants,
  TabsVariants,
  ArrowVariants,
} from "../../constants/variants";

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
    <motion.div className={styles.personalSpotlight}>
      <motion.div className={styles.pictureContainer}>
        <Image
          className={styles.picture}
          src={ProfilePic}
          alt="Profile Picture"
          height={"95%"}
          width={"95%"}
        />
      </motion.div>
      <motion.div className={styles.personalDescription}>
        A Fourth Year Computer Science Student at Ryerson University and SWE
        based in Toronto Ontario.
      </motion.div>
      <motion.div className={styles.secondaryDescription}>
        I have over a years worth of in industry experience as an intern with TD
        Securities where I have developed a strong understanding of the Software
        Development Lifecycle and have honed my skills as both a frontend and
        backend developer using the MERN Stack.
      </motion.div>
    </motion.div>
  );
};

export default PersonalSpotlight;
