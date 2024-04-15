const now = new Date();
const data = [
  {
    role: "Software Developer Team Lead",
    company: "bbox.digital",
    location: "Remote",
    start: `${new Date("2024/01/01").toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
    end: "Present",
    description: "As a Software Development Team Lead, I oversee a team of developers, ensuring they deliver high-quality solutions by managing timelines and collaborating with other teams. I also prioritize strategic decision-making, aligning projects with business objectives, and maintain project oversight through reviews and mentorship.",
    tools: [
      "Collaboration",
      "Team Management",
      "Project Management",
      "Leadership",
      "Problem Solving",
      "Communication",
      "Agile Methodologies",
      "Jira"
    ],
  },
  {
    role: "Software Developer",
    company: "bbox.digital",
    location: "Remote",
    start: `${new Date("2022/01/02").toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
    end: `${new Date("2024/01/01").toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
    description: "Developing websites and web applications for clients using a variety of tools and technologies.",
    tools: [
      "Webflow",
      "React",
      "TypeScript",
      "Firebase",
      "Google Cloud",
      "Cloudflare",
      "Squidex",
      "GraphQL",
      "Algolia",
      "Jira"
    ],
  },
  {
    role: "Webflow Expert | Webflow Developer",
    company: "Freelance",
    location: "Remote",
    start: `${new Date("2021/04/02").toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
    end: `${new Date("2024/01/01").toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
    description: "Designing and developing websites for clients using Webflow.",
    tools: [
      "Webflow",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "Web Design",
    ],
  }
]
export default data;