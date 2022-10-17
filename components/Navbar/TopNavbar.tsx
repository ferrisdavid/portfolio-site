import React from "react";

// Components.
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

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
          <div>ICON</div>
        </Link>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className={styles.rightSection}>
        <Nav className={styles.links}>
          <div className={styles.sectionLinks}>
            <Link to="about" smooth duration={300} offset={-50}>
              About
            </Link>
            <Link to="projects" smooth duration={300} offset={-50}>
              Projects
            </Link>
            <Link to="contact" smooth duration={300} offset={-50}>
              Contact
            </Link>
          </div>
          <div>|</div>
          <div>SOCIALS</div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
