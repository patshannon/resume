'use client';

import { useEffect, useState } from 'react';
import { MotionDiv } from '../motion';
import ContributionHeatmap from './ContributionHeatmap';
import GitHubStats from './GitHubStats';

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubData {
  calendar: ContributionWeek[];
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

export default function GitHubContributions() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch('/api/github/contributions');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto">
        <MotionDiv
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-zinc-400 border-t-transparent"></div>
          <p className="text-zinc-400 mt-4">Loading GitHub activity...</p>
        </MotionDiv>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full max-w-6xl mx-auto">
        <MotionDiv
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-zinc-400">Unable to load GitHub data</p>
          <p className="text-xs text-zinc-500 mt-2">{error}</p>
        </MotionDiv>
      </div>
    );
  }

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
        <h3 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-200 bg-clip-text text-transparent">
          GitHub Activity
        </h3>
        <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
          Real-time contributions and activity across public and private repositories
        </p>
      </MotionDiv>

      {/* Stats Grid */}
      <div className="mb-12">
        <GitHubStats stats={data.stats} />
      </div>

      {/* Divider */}
      <div className="w-full max-w-4xl mx-auto my-12">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      </div>

      {/* Contribution Heatmap */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="text-center mb-8">
          <h4 className="text-xl font-bold mb-2 text-zinc-300">
            Contribution Calendar
          </h4>
          <p className="text-xs text-zinc-500">
            {data.stats.totalContributions.toLocaleString()} contributions in the last year
          </p>
        </div>

        <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-zinc-700/50">
          <ContributionHeatmap weeks={data.calendar} />
        </div>
      </MotionDiv>

      {/* Footer Context */}
      <MotionDiv
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-xs text-zinc-500 italic">
          Data includes contributions to private repositories without exposing project details
        </p>
      </MotionDiv>
    </div>
  );
}
