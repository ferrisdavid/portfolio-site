// Interfaces.
import { Variants } from "framer-motion";

export const LandingVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.4,
    },
  },
};

export const LandingDescriptionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.4,
    },
  },
};

export const LandingDescriptionSectionsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};

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
      delay: 0.4,
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

export const ProjectShowcaseCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};

export const ProjectShowcaseDescVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      delay: 0.5,
    },
  },
};

export const ProjectSeparatorVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      delay: 0.4,
    },
  },
};
