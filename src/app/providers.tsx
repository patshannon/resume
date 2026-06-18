'use client';

import { MotionConfig } from './motion';

export default function Providers({ children }: { children: React.ReactNode }) {
  // reducedMotion="user" makes every framer-motion animation honor the OS
  // "reduce motion" setting without per-component handling.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
