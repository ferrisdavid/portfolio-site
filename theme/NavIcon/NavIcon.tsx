import React from "react";

// Styles.
import styles from "./NavIcon.module.scss";

/****************************************
 * NavIcon.tsx -
 ****************************************/
const NavIcon = () => {
  // Render
  return (
    <div className={styles.navIcon}>
      <div className={styles.logo}>DF</div>
    </div>
  );
};

export default NavIcon;
