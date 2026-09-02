import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.99,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.99,
    transition: {
        duration: 0.2,
        ease: [0.55, 0.06, 0.68, 0.19] as [number, number, number, number],
      },
  },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
