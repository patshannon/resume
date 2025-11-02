'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { MotionDiv } from '../motion';

ChartJS.register(ArcElement, Tooltip, Legend);

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  percentage: number;
  color: string;
  delay: number;
  icon: string;
}

function MetricCard({ title, value, subtitle, percentage, color, delay, icon }: MetricCardProps) {
  const chartRef = useRef<ChartJS<'doughnut'>>(null);

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, 'rgba(255, 255, 255, 0.1)'],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      delay: delay,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <MotionDiv
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 shadow-xl hover:shadow-2xl hover:border-zinc-600/50 transition-all duration-500 h-full">
        {/* Icon and Title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="text-3xl mb-2">{icon}</div>
            <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wide mb-1">
              {title}
            </h4>
            <div className="text-4xl font-bold bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-transparent">
              {value}
            </div>
          </div>

          {/* Mini Doughnut Chart */}
          <div className="w-16 h-16 relative">
            <Doughnut ref={chartRef} data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-zinc-300">{percentage}%</span>
            </div>
          </div>
        </div>

        {/* Subtitle/Context */}
        <p className="text-xs text-zinc-500 leading-relaxed">{subtitle}</p>

        {/* Progress bar (alternative visualization) */}
        <div className="mt-4 relative h-2 bg-zinc-700/30 rounded-full overflow-hidden">
          <MotionDiv
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: delay / 1000 + 0.3, ease: 'easeOut' }}
          />
        </div>
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
      percentage: 100,
      color: 'rgba(16, 185, 129, 0.8)', // Emerald
      icon: '⚡',
      delay: 200,
    },
    {
      title: 'Search Efficiency',
      value: '95%',
      subtitle: 'Reduction in Algolia requests: 4.9M → 0.23M per month',
      percentage: 95,
      color: 'rgba(59, 130, 246, 0.8)', // Blue
      icon: '🔍',
      delay: 400,
    },
    {
      title: 'SEO Impact',
      value: '+40%',
      subtitle: 'Increase in Google Search impressions through optimization',
      percentage: 40,
      color: 'rgba(168, 85, 247, 0.8)', // Purple
      icon: '📈',
      delay: 600,
    },
    {
      title: 'API Efficiency',
      value: '-20%',
      subtitle: 'Reduction in external API calls via intelligent caching',
      percentage: 20,
      color: 'rgba(234, 179, 8, 0.8)', // Yellow
      icon: '🎯',
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
