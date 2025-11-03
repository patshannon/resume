'use client';

import { MotionDiv } from '../motion';
import { IoGitCommit, IoGitPullRequest, IoFlame, IoGitBranch } from 'react-icons/io5';
import { ReactNode } from 'react';

interface GitHubStatsProps {
  stats: {
    totalContributions: number;
    totalCommits: number;
    totalPRs: number;
    totalReviews: number;
    totalIssues: number;
    publicRepos: number;
    organizations: number;
    currentStreak: number;
  };
}

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  color: string;
  delay: number;
  icon: ReactNode;
}

function StatCard({ title, value, subtitle, color, delay, icon }: StatCardProps) {
  return (
    <MotionDiv
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="relative bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full overflow-hidden">
        {/* Animated gradient background glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
          style={{ background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)` }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with glow effect */}
          <MotionDiv
            className="text-4xl mb-3 drop-shadow-lg"
            style={{ color }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay / 1000 + 0.2 }}
          >
            {icon}
          </MotionDiv>

          {/* Title */}
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            {title}
          </h4>

          {/* The Hero: Big Impact Number */}
          <MotionDiv
            className="mb-3"
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
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none [text-shadow:_0_0_20px_rgb(0_0_0_/_40%)]"
              style={{ color }}
            >
              {value}
            </div>
          </MotionDiv>

          {/* Subtitle/Context */}
          <p className="text-xs text-zinc-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Decorative corner accent */}
        <div
          className="absolute top-0 right-0 w-20 h-20 opacity-10"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${color}, transparent 70%)`
          }}
        />
      </div>
    </MotionDiv>
  );
}

export default function GitHubStats({ stats }: GitHubStatsProps) {
  const metrics = [
    {
      title: 'Total Contributions',
      value: stats.totalContributions.toLocaleString(),
      subtitle: `Across all repositories this year`,
      color: 'rgba(16, 185, 129, 1)', // Emerald
      icon: <IoGitBranch />,
      delay: 200,
    },
    {
      title: 'Commits',
      value: stats.totalCommits.toLocaleString(),
      subtitle: `Including private repositories`,
      color: 'rgba(59, 130, 246, 1)', // Blue
      icon: <IoGitCommit />,
      delay: 400,
    },
    {
      title: 'Pull Requests',
      value: stats.totalPRs.toLocaleString(),
      subtitle: `Merged and reviewed contributions`,
      color: 'rgba(168, 85, 247, 1)', // Purple
      icon: <IoGitPullRequest />,
      delay: 600,
    },
    {
      title: 'Current Streak',
      value: `${stats.currentStreak} days`,
      subtitle: `Consecutive days of contributions`,
      color: 'rgba(234, 179, 8, 1)', // Yellow
      icon: <IoFlame />,
      delay: 800,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric) => (
          <StatCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Additional context */}
      <MotionDiv
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-xs text-zinc-500">
          Contributing to <span className="text-emerald-400 font-semibold">{stats.organizations}+</span> organizations
          {' • '}
          <span className="text-emerald-400 font-semibold">{stats.publicRepos}</span> public repositories
          {' • '}
          <span className="text-emerald-400 font-semibold">{stats.totalReviews}</span> code reviews
        </p>
      </MotionDiv>
    </div>
  );
}
