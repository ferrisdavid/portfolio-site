// Interfaces.
import { Variants } from "framer-motion";

export const QualificationsVariants: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
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
    scaleX: 0,
  },
  visible: {
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

export const PersonalDescriptionVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      staggerChildren: 0.2,
    },
  },
};
