import React from "react";

// Styles.
import styles from "./Logo.module.scss";

/****************************************
 * Logo.tsx -
 ****************************************/
const Logo = () => {
  // Render
  return (
    <svg className={styles.logo} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <g id="logo">
            <path id="diamond" className={styles.diamond} d="M5.01924 15.5773L30 1.1547L54.9808 15.5773V44.4226L30 58.8453L5.01924 44.4226V15.5773Z" />
            <g id="initial" className={styles.initial}>
                <path id="point" className={styles.point} d="M23.0527 16.0811L43 29.0291L28.8591 42.4827" />
                <path id="vertical" className={styles.vertical} d="M23 16V43.6973"/>
            </g>
        </g>
    </svg>
  );
};

export default Logo;