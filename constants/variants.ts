// Interfaces.
import { Variants } from "framer-motion";

export const QualificationsVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  inView: {
    opacity: 1,
    scaleX: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      when: "beforeChildren",
      delayChildren: 0.2,
    },
  },
};

export const ArrowVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};

export const QualificationsContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const TabsVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};
