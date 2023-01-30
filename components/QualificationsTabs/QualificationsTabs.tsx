import { useState } from "react";

// Animation.
import { m, AnimatePresence } from "framer-motion";
import {
  QualificationsVariants,
  QualificationsContentVariants,
  TabsVariants,
  ArrowVariants,
} from "../../constants/variants";

// Components.
import Image from "next/image";

// Interfaces.
import { ITab } from "../../interfaces/types";

// Styles
import styles from "./QualificationsTabs.module.scss";

// Props
interface Props {
  tabs: ITab[];
}

/****************************************
 * QualificationsTabs.tsx - Experience and Education Tabs in About Section
 ****************************************/
const QualificationsTabs = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  // Render.
  return (
    <m.div
      className={styles.qualificationsCard}
      variants={QualificationsVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <m.div variants={ArrowVariants} className={styles.triangle} />
      <m.div variants={QualificationsContentVariants}>
        <div className={styles.tabs}>
          {tabs.map(({ tab }, i) => (
            <div
              key={tab}
              className={`${styles.tab} ${i === activeTab && styles.active}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className={styles.tabContent}>
          <AnimatePresence initial mode="wait">
            {tabs[activeTab].content.map((tabContent) => (
              <m.div
                className={styles.experience}
                key={tabContent.title}
                variants={TabsVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Image
                  src={tabContent.img}
                  alt="Institution-Logo"
                  height={tabContent.height}
                  width={tabContent.width}
                />
                <div className={styles.details}>
                  <div className={styles.position}>{tabContent.title}</div>
                  <div className={styles.duration}>{tabContent.duration}</div>
                  <ul className={styles.bullets}>
                    {tabContent.bullets?.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </div>
      </m.div>
    </m.div>
  );
};

export default QualificationsTabs;
