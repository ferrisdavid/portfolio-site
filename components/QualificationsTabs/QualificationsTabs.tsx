import { useState } from "react";

// Animation.
import { motion, AnimatePresence } from "framer-motion";

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
    <div className={styles.qualificationsCard}>
      <div className={styles.triangle} />
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
        <AnimatePresence mode="wait">
          {tabs[activeTab].content.map((tabContent) => (
            <motion.div
              className={styles.experience}
              key={tabContent.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={tabContent.img}
                alt="Institution-Logo"
                height="62px"
                width="62px"
              />
              <div className={styles.details}>
                <div className={styles.position}>{tabContent.title}</div>
                <div className={styles.duration}>{tabContent.duration}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QualificationsTabs;
