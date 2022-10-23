import React from "react";

// Icons.
import { FiGithub, FiLinkedin } from "react-icons/fi";

// Components.
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import NavIcon from "../../theme/NavIcon/NavIcon";

// Styles.
import styles from "./TopNavbar.module.scss";

/****************************************
 * TopNavbar.tsx -
 ****************************************/
const TopNavbar = () => {
  // Render.
  return (
    <Navbar sticky="top" expand="sm" collapseOnSelect className={styles.topNav}>
      <div className={styles.icon}>
        <Link to="landing" smooth duration={300} offset={-50}>
          <NavIcon />
        </Link>
        <div className={styles.header}>David Ferris</div>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className={styles.rightSection}>
        <Nav className={styles.links}>
          <div className={styles.sectionLinks}>
            <Link
              className={styles.link}
              to="about"
              smooth
              duration={300}
              offset={-50}
            >
              About
            </Link>
            <Link
              className={styles.link}
              to="projects"
              smooth
              duration={300}
              offset={-50}
            >
              Projects
            </Link>
            <Link
              className={styles.link}
              to="contact"
              smooth
              duration={300}
              offset={-50}
            >
              Contact
            </Link>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.socials}>
            <FiGithub className={styles.socialLink} size={16} />
            <FiLinkedin className={styles.socialLink} size={16} />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
