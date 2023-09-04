const now = new Date();
const data = [
  {
    role: "Web Developer",
    company: "bbox.digital",
    location: "Remote",
    start: `${new Date("2022-01-02").toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
    end: "Present",
    duration: `${+(Math.round(((now - new Date("2022-01-02")) / (1000 * 60 * 60 * 24 * 30)/12)+"e+2")+"e-2")} years`,
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
    start: `${new Date("2021-04-02").toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
    end: "Present",
    duration: `${+(Math.round(((now - new Date("2021-04-02")) / (1000 * 60 * 60 * 24 * 30)/12)+"e+2")+"e-2")} years`,
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