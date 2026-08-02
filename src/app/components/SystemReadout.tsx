'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * The signature element: Patrick presented the way he presents systems —
 * a live observability-style readout. The headline metric (4.9M -> 0.23M
 * Algolia requests) drains on load, making the 95% reduction visceral.
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

const secondary = [
  { delta: '+100%', label: 'CMS API efficiency' },
  { delta: '+40%', label: 'Search impressions' },
  { delta: '−20%', label: 'External API calls' },
];

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
          system status
        </span>
        <span className="text-[11px] uppercase tracking-[0.18em] text-signal">available</span>
      </motion.div>

      {/* Identity */}
      <motion.div variants={row} className="space-y-1.5 px-4 py-4 text-[12px] leading-relaxed">
        <div className="flex justify-between">
          <span className="text-muted-dark">role</span>
          <span className="text-cream">lead_developer</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-dark">location</span>
          <span className="text-cream">Halifax, NS · UTC−4</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-dark">focus</span>
          <span className="text-cream">modernization · product · delivery</span>
        </div>
      </motion.div>

      {/* Headline metric — the proof, drained on load */}
      <motion.div variants={row} className="border-t border-line px-4 py-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] uppercase tracking-[0.16em] text-muted-dark">
            algolia req / mo
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] text-signal">↓ 95%</span>
        </div>

        <div className="mt-2 flex items-baseline gap-2 text-lg">
          <span className="text-muted-dark line-through decoration-line-paper/40">4,900,000</span>
          <span className="text-muted-dark">→</span>
          <span className="font-semibold text-signal-bright">230,000</span>
        </div>

        {/* Drain bar: full baseline shrinking to the residual ~4.7% */}
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-[2px] bg-graphite-3">
          <motion.div
            className="h-full rounded-[2px] bg-gradient-to-r from-signal to-signal-bright"
            initial={{ width: reduce ? '4.7%' : '100%' }}
            animate={{ width: '4.7%' }}
            transition={reduce ? { duration: 0 } : { duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <p className="mt-2 text-[11px] leading-snug text-muted-dark">
          Caching + request strategy, product behavior unchanged.
        </p>
      </motion.div>

      {/* Secondary readouts */}
      <motion.div variants={row} className="divide-y divide-line border-t border-line">
        {secondary.map((m) => (
          <div key={m.label} className="flex items-center justify-between px-4 py-3 text-[12px]">
            <span className="text-muted-dark">{m.label}</span>
            <span className="text-signal">{m.delta}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
