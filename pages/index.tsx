import type { NextPage } from "next";

// Components.
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Head from "next/head";
import Image from "next/image";

// Sections.
import Landing from "../sections/Landing";
import About from "../sections/About";

// Styles.
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>David Ferris Portfolio</title>
        <meta
          name="description"
          content="David Ferris Software Engineer Portfolio Website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopNavbar />
        <div className="sections">
          <Landing />
          <About />
          <div id="projects" style={{ height: "300px" }}>
            Projects
          </div>
          <div id="contact" style={{ height: "300px" }}>
            Contact
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
