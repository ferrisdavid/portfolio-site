import React, { useEffect, useState } from "react";
import { m, useScroll } from "framer-motion";

// Icons.
import { FiGithub, FiLinkedin } from "react-icons/fi";

// Components.
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import Logo from "../../theme/Logo/Logo";

// Constants.
import { HeaderVariants, HeaderNameVariants } from "../../constants/variants";

// Styles.
import styles from "./TopNavbar.module.scss";

/****************************************
 * TopNavbar.tsx -
 ****************************************/
const TopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll Progress Hook.
  const { scrollYProgress } = useScroll();

  // Assign Page Scroll Listener to Update the scrolled state.
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrolled(v > 0.05));
    return () => unsub();
  }, [scrollYProgress]);

  // Render.
  return (
    <Navbar
      sticky="top"
      expand="sm"
      collapseOnSelect
      className={`${styles.topNav} ${scrolled && styles.scrolled}`}
    >
      <m.div variants={HeaderVariants} initial="hidden" animate='visible' className={styles.icon}>
        <Link to="landing" smooth duration={300}>
          <Logo />
        </Link>
        <m.div variants={HeaderNameVariants} className={`${styles.header} ${scrolled && styles.collapsed}`}>David Ferris</m.div>
      </m.div>

      <Navbar.Toggle
        className={styles.toggle}
        aria-controls="basic-navbar-nav"
      />

      <Navbar.Collapse
        id="basic-navbar-nav"
        className={`mt-1 mt-sm-0 ${styles.rightSection}`}
      >
        <Nav className={styles.links}>
          <div className={`mt-1 ${styles.sectionLinks}`}>
            <Link
              className={styles.link}
              to="about"
              smooth
              duration={300}
              offset={-75}
            >
              About
            </Link>
            <Link
              className={styles.link}
              to="projects"
              smooth
              duration={300}
              offset={-75}
            >
              Projects
            </Link>
            <Link
              className={styles.link}
              to="contact"
              smooth
              duration={300}
              offset={-75}
            >
              Contact
            </Link>
          </div>
          <div className={`${styles.separator} d-none d-sm-block`} />
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
