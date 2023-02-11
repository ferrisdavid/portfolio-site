// Types.
import { IProject } from "../interfaces/types";

// Assets.
import GroceryStoreShowcase from "../assets/GroceryStoreShowcase.png";
import SortingVisualizerShowcase from "../assets/SortingVisualizerShowcase.png";
import PortfolioSiteShowcase from "../assets/PortfolioSiteShowcase.png";

export const GroceryStoreConfig: IProject = {
  title: "The Grocery Store",
  overview: "An E-Commerce Grocery Store Site designed for the COVID Age.",
  src: GroceryStoreShowcase,
  descriptionConfig: {
    orientation: "right",
    descriptions: [
      "Due to COVID-19 the simple task of shopping for daily necessities has become a stressful nightmare for millions around the world, The Grocery Store aims to bring some of the relaxation and comfort back to this process which has been lost.",
      "The Grocery Store is an ecommerce site where users can shop their daily necessities, it implements all the common functionalities of an ecommerce site such as a shopping cart, checkout, and order history, and extends the functionality to become an expansive consumer tool with functions such as a store locator for grocery stores of the users choice, nutritional facts for common food items, as well as a built in grocery list builder to help consumers prepare for their needs.",
    ],
    tools: ["React", "HTML", "CSS"],
    github: "",
    liveLink: "",
  },
};

export const SortingVisualizerConfig: IProject = {
  title: "Sorting Visualizer",
  overview: "Web Application Visualization tool for common Sorting Algorithms.",
  src: SortingVisualizerShowcase,
  descriptionConfig: {
    orientation: "left",
    descriptions: [
      "The Sorting Visualizer is a web Application built using the react library to visualize various common sorting algorithms. This project helped me gain a better understanding of key computer science fundamentals such as data structures, objects, and sorting algorithms while also giving me the opportunity to develop knowledge of the structure of web applications and key fundamentals such as CSS, JavaScript, and, additionally, React components.",
      "This project was created out of an interest in the various sorting algorithms that are so fundamental in the world of computer science and the differences between them. I hope you enjoy playing around with these visualizations.",
    ],
    tools: ["React", "HTML", "CSS"],
    github: "",
    liveLink: "",
  },
};

export const PortfolioSiteConfig: IProject = {
  title: "Portfolio Website",
  overview: "My Software Engineering Portfolio Website.",
  src: PortfolioSiteShowcase,
  descriptionConfig: {
    orientation: "right",
    descriptions: [
      "The Sorting Visualizer is a web Application built using the react library to visualize various common sorting algorithms. This project helped me gain a better understanding of key computer science fundamentals such as data structures, objects, and sorting algorithms while also giving me the opportunity to develop knowledge of the structure of web applications and key fundamentals such as CSS, JavaScript, and, additionally, React components. ",
      "This project was created out of an interest in the various sorting algorithms that are so fundamental in the world of computer science and the differences between them. I hope you enjoy playing around with these visualizations.",
    ],
    tools: ["React", "HTML", "CSS"],
    github: "",
    liveLink: "",
  },
};
