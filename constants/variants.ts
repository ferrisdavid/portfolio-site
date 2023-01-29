// Interfaces.
import { Variants } from "framer-motion";

export const QualificationsVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-50vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const ArrowVariants: Variants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "25%",
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};

export const TabsVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};
