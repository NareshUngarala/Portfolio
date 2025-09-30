'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

type AnimationVariant = 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeIn: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  slideUp: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  slideLeft: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  slideRight: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  scale: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
};

const getHiddenVariant = (variant: AnimationVariant): Variant => {
  switch (variant) {
    case 'fadeIn':
      return { opacity: 0, y: 0, x: 0, scale: 1 };
    case 'slideUp':
      return { opacity: 0, y: 50, x: 0, scale: 1 };
    case 'slideLeft':
      return { opacity: 0, y: 0, x: -50, scale: 1 };
    case 'slideRight':
      return { opacity: 0, y: 0, x: 50, scale: 1 };
    case 'scale':
      return { opacity: 0, y: 0, x: 0, scale: 0.8 };
    default:
      return { opacity: 0, y: 0, x: 0, scale: 1 };
  }
};

const AnimatedSection = ({
  children,
  className = '',
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once });

  useEffect(() => {
    if (inView) {
      controls.start(variant);
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, variant, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: getHiddenVariant(variant),
        [variant]: variants[variant],
      }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;