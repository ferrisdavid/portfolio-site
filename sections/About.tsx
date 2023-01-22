// Components.
import QualificationsTabs from "../components/QualificationsTabs/QualificationsTabs";

// Assets.
import TDLogo from "../assets/TDLogo.png";

// Interfaces.
import { ITab } from "../interfaces/types";

// Styles.
import styles from "./Section.module.scss";

/****************************************
 * About.tsx -
 ****************************************/
const About = () => {
  const tabs: ITab[] = [
    {
      tab: "Experience",
      content: [
        {
          img: TDLogo,
          title: "Software Developer Intern",
          duration: "May 2021 - September 2021",
          bullets: ["Thing 1"],
        },
        {
          img: TDLogo,
          title: "Software Engineer Intern",
          duration: "May 2021 - September 2021",
          bullets: ["Thing 1"],
        },
      ],
    },
    {
      tab: "Education",
      content: [
        {
          img: TDLogo,
          title: "Ryerson University",
          duration: "May 2021 - September 2021",
          bullets: ["Thing 1"],
        },
      ],
    },
  ];
  // Render.
  return (
    <div id="about">
      <div className={styles.sectionHeader}>About</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ flexGrow: 1 }}>Personal Highlight</div>
        <QualificationsTabs tabs={tabs} />
      </div>
    </div>
  );
};

export default About;
