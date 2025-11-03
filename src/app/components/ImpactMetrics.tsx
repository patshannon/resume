'use client';

import { MotionDiv } from '../motion';
import { IoFlash, IoSearch, IoTrendingUp } from 'react-icons/io5';
import { FaBullseye } from 'react-icons/fa';
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
      <div className="relative bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-700/50 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full overflow-hidden">
        {/* Animated gradient background glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
          style={{ background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)` }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with glow effect */}
          <MotionDiv
            className="text-5xl mb-4 drop-shadow-lg text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay / 1000 + 0.2 }}
          >
            {icon}
          </MotionDiv>

          {/* Title */}
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
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
            <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white [text-shadow:_0_0_20px_rgb(0_0_0_/_40%)] break-words">
              {value}
            </div>
          </MotionDiv>

          {/* Subtitle/Context */}
          <p className="text-sm text-white leading-relaxed">
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
      color: '#ffffff', // White
      icon: <IoFlash />,
      delay: 200,
    },
    {
      title: 'Search Efficiency',
      value: '95%',
      subtitle: 'Reduction in Algolia requests: 4.9M → 0.23M per month',
      color: '#ffffff', // White
      icon: <IoSearch />,
      delay: 400,
    },
    {
      title: 'SEO Impact',
      value: '+40%',
      subtitle: 'Increase in Google Search impressions through optimization',
      color: '#ffffff', // White
      icon: <IoTrendingUp />,
      delay: 600,
    },
    {
      title: 'API Efficiency',
      value: '20%',
      subtitle: 'Reduction in external API calls via intelligent caching',
      color: '#ffffff', // White
      icon: <FaBullseye />,
      delay: 800,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
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
