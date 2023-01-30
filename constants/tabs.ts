// Types.
import { ITab } from "../interfaces/types";

// Assets.
import TDLogo from "../assets/Animoji.png";
import RyersonLogo from "../assets/Bubbles.png";

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
        bullets: ["Did This", "Did That", "Completed This"],
      },
      {
        img: TDLogo,
        width: "70%",
        height: "70%",
        title: "Software Engineer Intern",
        duration: "May 2021 - September 2021",
        bullets: ["Did This", "Did That", "Completed This"],
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
