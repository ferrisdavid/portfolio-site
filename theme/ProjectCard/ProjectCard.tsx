import React from "react";
import { m } from "framer-motion";

// Components.
import Image, { ImageProps } from "next/image";

// Variants.
import { ProjectShowcaseCardVariants } from "../../constants/variants";

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
    <m.div
      className={styles.projectCard}
      variants={ProjectShowcaseCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.75 }}
    >
      <div className={styles.backdrop}>
        <Image
          layout="fill"
          objectFit="fill"
          objectPosition="center"
          src={BackdropBubbles}
          alt="Project Showcase Image"
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
            width={"685px"}
          />
        </div>
      </div>
    </m.div>
  );
};

export default ProjectCard;
