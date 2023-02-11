import React from "react";

// Components.
import Image, { ImageProps } from "next/image";

// Assets.
import BackdropBubbles from "../../assets/BackdropBubbles.png";

// Styles.
import styles from "./ProjectCard.module.scss";

// Props.
interface Props {
  title: string;
  overview: string;
  src: ImageProps["src"];
}

/****************************************
 * ProjectCard.tsx - Project Showcase Card Theme Component
 ****************************************/
const ProjectCard = ({ title, overview, src }: Props) => {
  // Render
  return (
    <div className={styles.projectCard}>
      <div className={styles.backdrop}>
        <Image
          layout="fill"
          objectFit="fill"
          objectPosition="center"
          src={BackdropBubbles}
          alt="Project Showcase Image"
          height={"100%"}
          width={"100%"}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.projectHeadline}>
          <div className={styles.title}>{title}</div>
          <div className={styles.overview}>{overview}</div>
        </div>
        <div className={styles.projectShowcase}>
          <Image
            src={src}
            alt="Project Showcase Image"
            height={"300px"}
            width={"600px"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
