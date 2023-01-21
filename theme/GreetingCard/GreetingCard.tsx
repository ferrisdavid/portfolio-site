import React, { useState, useEffect } from "react";

// Components.
import Image from "next/image";

// Assets.
import bubbles from "../../assets/bubbles.png";
import animoji from "../../assets/Animoji.png";
import dots from "../../assets/Dots.png";

// Styles.
import styles from "./GreetingCard.module.scss";

/****************************************
 * GreetingCard.tsx -
 ****************************************/
const GreetingCard = () => {
  // Greeting Card Fade Effect
  const [showGreetingCard, setShowGreetingCard] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowGreetingCard(true), 650);
  }, []);

  // Render.
  return (
    <div
      className={`${styles.greetingCard} ${showGreetingCard && styles.visible}`}
    >
      <div className={styles.topRow}>
        <Image height="50%" width="50%" src={bubbles} alt="bubbles" />
      </div>
      <div className={styles.greeting}>
        <div>Hi, I&apos;m David! Software Engineer &amp; Tech Enthusiast</div>
      </div>
      <div className={styles.animojiContainer}>
        <Image
          src={animoji}
          alt="David Animoji"
          objectPosition="center"
          quality={100}
        />
      </div>
      <div className={styles.bottomRow}>
        <Image
          className={styles.bottomBubbles}
          height="50%"
          width="50%"
          src={bubbles}
          alt="bubbles"
        />
      </div>
      <div className={styles.introCard}>
        <Image
          className={styles.dots}
          src={dots}
          alt="ellipses"
          height={5}
          width={20}
        />
        <hr className={styles.introSeparator} />
        <div className={styles.intro}>
          <div className={styles.introText}>
            Software Engineer focused on Web Development with a passion for
            smooth UIs and impactful technology experiences.
          </div>
        </div>
        <hr className={styles.introSeparator} />
        <Image
          className={styles.dots}
          src={dots}
          alt="ellipses"
          height={5}
          width={20}
        />
      </div>
    </div>
  );
};

export default GreetingCard;
