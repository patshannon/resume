import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'patshannon';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: ContributionWeek[];
        };
        totalCommitContributions: number;
        totalPullRequestContributions: number;
        totalPullRequestReviewContributions: number;
        totalIssueContributions: number;
      };
      repositories: {
        totalCount: number;
      };
      organizations: {
        totalCount: number;
      };
    };
  };
}

export async function GET() {
  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
          totalCommitContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
          totalIssueContributions
        }
        repositories(privacy: PUBLIC, first: 100, ownerAffiliations: OWNER) {
          totalCount
        }
        organizations {
          totalCount
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data: GitHubResponse = await response.json();

    if (!data.data?.user) {
      throw new Error('User data not found');
    }

    const { contributionsCollection, repositories, organizations } = data.data.user;
    const { contributionCalendar } = contributionsCollection;

    // Calculate current streak
    const allDays = contributionCalendar.weeks
      .flatMap(week => week.contributionDays)
      .reverse();

    let currentStreak = 0;
    for (const day of allDays) {
      if (day.contributionCount > 0) {
        currentStreak++;
      } else {
        break;
      }
    }

    // Transform data for frontend
    const transformedData = {
      calendar: contributionCalendar.weeks,
      stats: {
        totalContributions: contributionCalendar.totalContributions,
        totalCommits: contributionsCollection.totalCommitContributions,
        totalPRs: contributionsCollection.totalPullRequestContributions,
        totalReviews: contributionsCollection.totalPullRequestReviewContributions,
        totalIssues: contributionsCollection.totalIssueContributions,
        publicRepos: repositories.totalCount,
        organizations: organizations.totalCount,
        currentStreak,
      },
    };
    console.log(transformedData);
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}
