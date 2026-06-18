'use client';

import { MotionDiv } from '../motion';

interface MetricCardProps {
  id: string;
  title: string;
  value: string;
  unit?: string;
  subtitle: string;
  context: string;
  delay: number;
}

function MetricCard({ id, title, value, unit, subtitle, context, delay }: MetricCardProps) {
  return (
    <MotionDiv
      className="border-t border-line-paper pt-5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay / 1000 }}
    >
      <div className="flex items-center justify-between">
        <h3 className="spec-label text-muted-light">{title}</h3>
        <span className="font-mono text-[11px] text-line-paper">{id}</span>
      </div>

      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="font-serif text-5xl font-medium leading-none text-ink sm:text-6xl">
          {value}
        </span>
        {unit && <span className="font-mono text-sm text-signal-paper">{unit}</span>}
      </div>

      <p className="mt-4 text-base font-medium leading-7 text-ink">{subtitle}</p>
      <p className="mt-2 text-sm leading-6 text-muted-light">{context}</p>
    </MotionDiv>
  );
}

export default function ImpactMetrics() {
  const metrics: MetricCardProps[] = [
    {
      id: 'M.01',
      title: 'Search cost',
      value: '95',
      unit: '% ↓',
      subtitle: 'Cut Algolia requests from 4.9M to 0.23M per month.',
      context:
        'A caching and request strategy that preserved product behavior while sharply reducing external search volume.',
      delay: 100,
    },
    {
      id: 'M.02',
      title: 'CMS efficiency',
      value: '100',
      unit: '% ↑',
      subtitle: 'Improved CMS API efficiency through cache architecture.',
      context:
        'Reduced redundant upstream calls and made content-heavy surfaces more predictable under load.',
      delay: 200,
    },
    {
      id: 'M.03',
      title: 'Search visibility',
      value: '40',
      unit: '% ↑',
      subtitle: 'Increased Google Search impressions via technical optimization.',
      context:
        'Performance, SEO, and accessibility work tied to measurable production discovery gains.',
      delay: 300,
    },
    {
      id: 'M.04',
      title: 'External APIs',
      value: '20',
      unit: '% ↓',
      subtitle: 'Reduced external API calls through deliberate data flow.',
      context:
        'A smaller operational footprint achieved through architecture, not visual redesign alone.',
      delay: 400,
    },
  ];

  return (
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
      {metrics.map((metric) => (
        <MetricCard key={metric.id} {...metric} />
      ))}
    </div>
  );
}
