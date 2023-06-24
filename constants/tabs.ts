// Types.
import { ITab } from "../interfaces/types";

// Assets.
import TDLogo from "../assets/TDLogo.png";
import RyersonLogo from "../assets/RyersonLogo.png";

export const Tabs: ITab[] = [
  {
    tab: "Experience",
    content: [
      {
        img: TDLogo,
        width: "70%",
        height: "70%",
        title: "Software Developer Intern",
        duration: "May 2021 - September 2021",
        bullets: [
          "Led the front-end development of a new React dashboard web application from initial idea to deployment and maintenance to surface internal performance metrics from various sources.",
          "Worked closely with multiple teams to gather requirements and roadmap development for the internal dashboard application providing a single source of metrics for an entire platform.",
        ],
      },
      {
        img: TDLogo,
        width: "70%",
        height: "70%",
        title: "Software Engineer Intern",
        duration: "May 2021 - September 2021",
        bullets: [
          "Led the development of 2 new backend services using nodeJS, Express, and MongoDB for application agnostic persistent user preference storage and application logging/metric tracking used by over 15 applications leading to a reduction in development efforts by an average of 30 days.",
          "Built and Led multiple frontend applications with React + Typescript in collaboration with external teams which consisted of requirements gathering, high level architecture design, UI/UX design using Figma, product sprint plannings and development roadmapping.",
        ],
      },
    ],
  },
  {
    tab: "Education",
    content: [
      {
        img: RyersonLogo,
        width: "100%",
        height: "75%",
        title: "Bachelor of Science (Hons.)",
        duration: "Computer Science (2019-2024) - 4.26 CGPA",
      },
      {
        img: RyersonLogo,
        width: "100%",
        height: "75%",
        title: "Computer Science Deans List",
        duration: "2019-2022",
      },
      {
        img: RyersonLogo,
        width: "100%",
        height: "75%",
        title: "Mathematics Faculty Award",
        duration: "2019",
      },
    ],
  },
];
