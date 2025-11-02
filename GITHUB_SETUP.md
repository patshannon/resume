# GitHub API Integration Setup

This portfolio now includes a dynamic GitHub Contributions section that displays real-time activity and statistics from your GitHub profile, including contributions to private repositories.

## Features

### Live GitHub Stats
- **Total Contributions**: Year-to-date contributions across all repositories
- **Commits**: Total commits including private repos
- **Pull Requests**: Merged and reviewed contributions
- **Current Streak**: Consecutive days of contributions
- **Organizations**: Contributing organizations count
- **Public Repositories**: Total public repos
- **Code Reviews**: Total PR reviews completed

### Contribution Heatmap
- GitHub-style contribution calendar showing the last year of activity
- Color-coded intensity based on contribution count
- Includes private repository contributions (without exposing project names)
- Hover tooltips showing exact contribution counts per day
- Mobile responsive (shows last 6 months on mobile devices)

## Setup Instructions

### 1. Create a GitHub Personal Access Token

1. Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a descriptive name (e.g., "Portfolio API")
4. Set expiration (recommend 90 days or 1 year)
5. Select the following scopes:
   - ✅ `read:user` - Read user profile data
   - ✅ `read:org` - Read organization data
   - ✅ `repo` - **Required for private repo stats** (full control of private repositories)

> **Note**: The `repo` scope is required to include contributions from private repositories in your stats. If you only want public repo stats, you can use `public_repo` instead.

6. Click "Generate token"
7. **Copy the token immediately** (you won't be able to see it again)

### 2. Add Token to Environment Variables

1. Create a `.env.local` file in the project root:
   ```bash
   cp .env.example .env.local
   ```

2. Add your GitHub token:
   ```env
   GITHUB_TOKEN=ghp_your_token_here
   ```

3. The `.env.local` file is already gitignored and will not be committed

### 3. Update GitHub Username

If needed, update the username in `/src/app/api/github/contributions/route.ts`:

```typescript
const GITHUB_USERNAME = 'your-github-username';
```

### 4. Deploy to Vercel (or other platform)

Add the `GITHUB_TOKEN` environment variable to your deployment platform:

**Vercel:**
1. Go to Project Settings > Environment Variables
2. Add `GITHUB_TOKEN` with your token value
3. Redeploy your application

**Netlify:**
1. Go to Site Settings > Build & Deploy > Environment
2. Add `GITHUB_TOKEN` variable
3. Redeploy

## Privacy & Security

### What's Exposed
- ✅ Total contribution counts (aggregated)
- ✅ Commit, PR, and review statistics
- ✅ Contribution heatmap (dates and counts)
- ✅ Organization count
- ✅ Public repository count

### What's NOT Exposed
- ❌ Private repository names
- ❌ Commit messages
- ❌ Code content
- ❌ Organization names (just counts)
- ❌ Specific project details

The GitHub GraphQL API aggregates your contributions without revealing the specific repositories or projects involved.

### Token Security
- Never commit your `.env.local` file
- Use environment variables on deployment platforms
- Rotate your token periodically
- Use minimal required scopes

## Customization

### Update Colors
Colors are defined in each component using Tailwind and rgba values:
- Emerald: `rgba(16, 185, 129, 1)` - Total Contributions
- Blue: `rgba(59, 130, 246, 1)` - Commits
- Purple: `rgba(168, 85, 247, 1)` - Pull Requests
- Yellow: `rgba(234, 179, 8, 1)` - Streak

### Adjust Cache Duration
The API route caches data for 1 hour by default. Modify in `/src/app/api/github/contributions/route.ts`:

```typescript
next: { revalidate: 3600 } // 1 hour in seconds
```

### Mobile Responsiveness
- Desktop: Shows full 52 weeks (1 year)
- Mobile: Shows last 26 weeks (6 months)
- Adjust in `ContributionHeatmap.tsx`

## Troubleshooting

### "Unable to load GitHub data"
- Check that `GITHUB_TOKEN` is set in `.env.local`
- Verify token has correct scopes
- Check token hasn't expired

### Stats show 0 or incomplete data
- Ensure `repo` scope is enabled for private repo stats
- Verify GitHub username is correct
- Check API rate limits: https://api.github.com/rate_limit

### Build errors
- Run `npm install` to ensure dependencies are installed
- Check TypeScript compilation: `npx tsc --noEmit`
- Clear Next.js cache: `rm -rf .next`

## API Rate Limits

GitHub API rate limits:
- **With authentication**: 5,000 requests/hour
- **Without authentication**: 60 requests/hour

The current implementation:
- Caches data for 1 hour
- Makes 1 GraphQL request per page load (when cache expires)
- Well within rate limits for normal portfolio traffic

## Data Freshness

- Data updates every **1 hour** (cache revalidation)
- To force refresh: Clear browser cache or wait for cache expiration
- In development: Restart dev server to clear cache
