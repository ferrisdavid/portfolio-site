// Animation.
import { motion, AnimatePresence } from "framer-motion";
import {
  QualificationsVariants,
  TabsVariants,
  ArrowVariants,
} from "../../constants/variants";

import Image from "next/image";
import test from "../../assets/Animoji.png";

// Styles
import styles from "./PersonalSpotlight.module.scss";

/****************************************
 * PersonalSpotlight.tsx - Personal Description
 ****************************************/
const PersonalSpotlight = () => {
  // Render.
  return (
    <motion.div className={styles.personalSpotlight}>
      <div className={styles.pictureContainer}>
        <Image className={styles.picture} src={test} alt="Profile Picture" />
      </div>
      <div className={styles.personalDescription}>
        I am a Fourth Year Computer Science Student at Ryerson University in
        Toronto Ontario.
      </div>
    </motion.div>
  );
};

export default PersonalSpotlight;
