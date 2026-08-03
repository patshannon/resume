'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * The signature element: Patrick presented the way he presents systems —
 * a live observability-style readout. The header records the verified
 * Télé-Québec migration that anchors his platform-modernization positioning.
 */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const row = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SystemReadout() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={container}
      initial={reduce ? 'show' : 'hidden'}
      animate="show"
      className="overflow-hidden rounded-sm border border-line bg-graphite-2 font-mono text-cream shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
    >
      {/* Title bar */}
      <motion.div
        variants={row}
        className="flex items-center justify-between border-b border-line bg-graphite-3/60 px-4 py-3"
      >
        <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-dark">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-blink rounded-full bg-signal" />
          </span>
          migration record
        </span>
        <span className="text-[11px] uppercase tracking-[0.18em] text-signal">verified</span>
      </motion.div>

      {/* Migration context */}
      <motion.div variants={row} className="space-y-1.5 px-4 py-4 text-[12px] leading-relaxed">
        <div className="flex justify-between">
          <span className="text-muted-dark">project</span>
          <span className="text-cream">tq_en_classe</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-dark">source</span>
          <span className="text-cream">Paperbits / Knockout</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-dark">target</span>
          <span className="text-cream">Next.js 15 · static export</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-dark">scope</span>
          <span className="text-cream">4 repositories</span>
        </div>
      </motion.div>

      {/* Headline verification */}
      <motion.div variants={row} className="border-t border-line px-4 py-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-muted-dark">
            feature parity
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] text-signal">100%</span>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-serif text-4xl font-medium text-signal-bright">60 / 60</span>
          <span className="text-[11px] uppercase tracking-[0.12em] text-muted-dark">
            production behaviors
          </span>
        </div>

        {/* Full verification bar */}
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-[2px] bg-graphite-3">
          <motion.div
            className="h-full rounded-[2px] bg-gradient-to-r from-signal to-signal-bright"
            initial={{ width: reduce ? '100%' : '0%' }}
            animate={{ width: '100%' }}
            transition={reduce ? { duration: 0 } : { duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <p className="mt-2 text-[11px] leading-snug text-muted-dark">
          Undocumented system reverse-engineered and audited before cutover.
        </p>
      </motion.div>

      {/* Supporting proof */}
      <motion.div variants={row} className="divide-y divide-line border-t border-line text-[12px]">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-muted-dark">Resources migrated</span>
          <span className="text-signal">11,000+</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-muted-dark">Contracts preserved</span>
          <span className="text-signal">Design · French URLs</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
