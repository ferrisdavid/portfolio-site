import type { NextPage } from "next";

// Components.
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Head from "next/head";

// Sections.
import Landing from "../sections/Landing";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

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
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Home;
