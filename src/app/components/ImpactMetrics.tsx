'use client';

import { MotionDiv } from '../motion';
import { IoFlash, IoSearch, IoTrendingUp, IoTarget } from 'react-icons/io5';
import { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  color: string;
  delay: number;
  icon: ReactNode;
}

function MetricCard({ title, value, subtitle, color, delay, icon }: MetricCardProps) {
  return (
    <MotionDiv
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="relative bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full overflow-hidden">
        {/* Animated gradient background glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
          style={{ background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)` }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with glow effect */}
          <MotionDiv
            className="text-5xl mb-4 drop-shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay / 1000 + 0.2 }}
          >
            {icon}
          </MotionDiv>

          {/* Title */}
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            {title}
          </h4>

          {/* The Hero: Big Impact Number */}
          <MotionDiv
            className="mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: delay / 1000 + 0.3,
              type: "spring",
              stiffness: 200
            }}
          >
            <div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: color,
                filter: 'drop-shadow(0 0 20px ' + color + '40)',
              }}
            >
              {value}
            </div>
          </MotionDiv>

          {/* Subtitle/Context */}
          <p className="text-sm text-zinc-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Decorative corner accent */}
        <div
          className="absolute top-0 right-0 w-24 h-24 opacity-10"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${color}, transparent 70%)`
          }}
        />
      </div>
    </MotionDiv>
  );
}

export default function ImpactMetrics() {
  const metrics = [
    {
      title: 'API Optimization',
      value: '+100%',
      subtitle: 'CMS API efficiency improvement through strategic caching',
      color: 'rgba(16, 185, 129, 1)', // Emerald
      icon: <IoFlash />,
      delay: 200,
    },
    {
      title: 'Search Efficiency',
      value: '95%',
      subtitle: 'Reduction in Algolia requests: 4.9M → 0.23M per month',
      color: 'rgba(59, 130, 246, 1)', // Blue
      icon: <IoSearch />,
      delay: 400,
    },
    {
      title: 'SEO Impact',
      value: '+40%',
      subtitle: 'Increase in Google Search impressions through optimization',
      color: 'rgba(168, 85, 247, 1)', // Purple
      icon: <IoTrendingUp />,
      delay: 600,
    },
    {
      title: 'API Efficiency',
      value: '−20%',
      subtitle: 'Reduction in external API calls via intelligent caching',
      color: 'rgba(234, 179, 8, 1)', // Yellow
      icon: <IoTarget />,
      delay: 800,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Section Header */}
      <MotionDiv
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Measurable Impact
        </h3>
        <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
          Quantifiable improvements delivered across performance, efficiency, and scalability
        </p>
      </MotionDiv>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Bottom Context */}
      <MotionDiv
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-xs text-zinc-500 italic">
          All metrics from real-world production applications at bbox.digital
        </p>
      </MotionDiv>
    </div>
  );
}
