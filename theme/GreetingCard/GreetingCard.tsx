import React, { useState, useEffect } from "react";

// Components.
import Image from "next/image";

// Assets.
import bubbles from "../../assets/bubbles.png";
import animoji from "../../assets/Animoji.png";

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
        Full he none no side. Uncommonly surrounded considered for him are its.
        It we is read good soon. My to considered delightful invitation
        announcing of no decisively boisterous. Did add dashwoods deficient man
        concluded additions resources. Or landlord packages overcame distance
        smallest in recurred. Wrong maids or be asked no on enjoy. Household few
        sometimes out attending described. Lain just fact four of am meet high.
      </div>
    </div>
  );
};

export default GreetingCard;
