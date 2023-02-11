import { StaticImageData, ImageProps } from "next/image";

interface ITabContent {
  img: StaticImageData;
  width: string;
  height: string;
  title: string;
  duration: string;
  bullets?: string[];
}

export interface ITab {
  tab: string;
  content: ITabContent[];
}

export interface IProject {
  title: string;
  overview: string;
  src: ImageProps["src"];
  descriptionConfig: IProjectDescriptionConfig;
}

export interface IProjectDescriptionConfig {
  orientation: "left" | "right";
  descriptions: string[];
  tools: string[];
  github: string;
  liveLink: string;
}
