'use client';

import {
  motion,
  AnimatePresence,
  MotionConfig,
  useReducedMotion,
  type MotionProps,
} from 'framer-motion';
import { forwardRef } from 'react';

export { MotionConfig };

/**
 * Wrap a motion component so that when the user prefers reduced motion, the
 * element renders directly at its target (animate / whileInView) state with no
 * entrance — content is never hidden behind a JS-driven fade. Interaction
 * affordances (hover/tap) are preserved.
 */
function reduceable<T extends keyof typeof motion>(tag: T) {
  const Comp = motion[tag] as React.ComponentType<MotionProps & Record<string, unknown>>;
  const Wrapped = forwardRef<HTMLElement, MotionProps & Record<string, unknown>>(
    function ReduceableMotion(props, ref) {
      const reduce = useReducedMotion();
      if (!reduce) return <Comp ref={ref} {...props} />;

      const { initial, animate, whileInView, viewport, variants, transition, ...rest } = props;
      const target = animate ?? whileInView;
      return (
        <Comp
          ref={ref}
          {...rest}
          initial={(target ?? false) as MotionProps['initial']}
          animate={target as MotionProps['animate']}
          transition={{ duration: 0 }}
        />
      );
    },
  );
  return Wrapped;
}

export const MotionDiv = reduceable('div');
export const MotionSection = reduceable('section');
export const MotionH1 = reduceable('h1');
export const MotionH2 = reduceable('h2');
export const MotionH3 = reduceable('h3');
export const MotionP = reduceable('p');
export const MotionSpan = reduceable('span');

// Plain passthroughs (used only by orphaned legacy components).
export const MotionSvg = motion.svg;
export const MotionPath = motion.path;

export { AnimatePresence };
