import { StaticImageData } from "next/image";

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
