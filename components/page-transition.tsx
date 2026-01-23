'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.4,
} as const;

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for animating children
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}

const staggerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export function StaggerContainer({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fade up animation for individual items
interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const fadeUpVariants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeUpVariants}
      transition={{
        type: 'tween',
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.5,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale fade animation
interface ScaleFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleFade({ children, className, delay = 0 }: ScaleFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'tween',
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.5,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide in from left/right
interface SlideInProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  delay?: number;
}

export function SlideIn({
  children,
  className,
  direction = 'left',
  delay = 0,
}: SlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: 'tween',
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.5,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// For staggered children inside StaggerContainer
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      transition={{
        type: 'tween',
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.4,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
