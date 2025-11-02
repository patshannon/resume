const data = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'bbox.digital',
    location: 'Remote',
    start: `${new Date('2021/12/01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`,
    end: 'Present',
    description:
      'Planned, architected, and delivered full-stack web applications across multiple client projects, partnering with leadership to define technical direction. Built scalable solutions using React, Next.js, TypeScript, and Node.js with GraphQL/REST APIs on GCP/Firebase, integrating headless CMS architectures. Leveraged AI-assisted development tools (Claude Code, GitHub Copilot) to accelerate architecture and refactoring workflows. Optimized caching strategies improving CMS API efficiency by 100%, reducing external API calls by 20%, and cutting Algolia search requests by ~95% (4.9M → 0.23M/month). Implemented CI/CD pipelines, automated testing (Jest, Playwright), and SEO/a11y improvements contributing to a 40% increase in Google Search impressions.',
    tools: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'GraphQL',
      'Firebase',
      'Google Cloud Platform',
      'CI/CD',
      'Playwright',
    ],
  },
  {
    id: 2,
    role: 'Webflow Expert / Web Developer / Web Designer',
    company: 'Upwork (Freelance)',
    location: 'Remote',
    start: `${new Date('2021/05/01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`,
    end: `${new Date('2021/12/01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`,
    description: 'Designed and developed responsive web applications using Figma, Webflow, and JavaScript. Delivered client projects with focus on clean UI/UX, scalability, and maintainability while ensuring clear communication and on-time delivery. Collaborated with clients in an agile environment to ensure product goals were achieved efficiently and iteratively.',
    tools: ['Webflow', 'Figma', 'JavaScript', 'UI/UX'],
  },
  {
    id: 3,
    role: 'Aviation Career',
    company: 'Porter Airlines | PAL Aerospace | Moncton Flight College',
    location: 'Various',
    start: '2013',
    end: '2021',
    description: 'Held leadership and training roles in commercial and medevac operations. Developed expertise in team coordination, precision under pressure, and regulatory compliance—skills directly transferable to software project leadership and reliability engineering.',
    tools: ['Leadership', 'Team Coordination', 'Project Management'],
  },
];
export default data;
