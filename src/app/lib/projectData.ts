export const projectData = [
  {
    title: "Classavatar",
    description: "Classroom management platform for Quebec schools with student rewards, avatar progression, class management, parent-teacher messaging, and subscriptions.",
    focus: "Product platform architecture, authenticated workflows, gamified domain logic, and subscription infrastructure.",
    role: "Full-stack architecture and implementation across Next.js, Firebase, FastAPI, and Stripe.",
    outcome: "A production education product with coordinated product, payment, and classroom management flows.",
    url: "https://classavatar.ca/",
    image: "/classavatar-16-10.webp",
    tools: ["Next.js", "React", "Firebase", "FastAPI", "Stripe"]
  },
  {
    title: "Espace OBNL",
    description: "Specialized job platform for Quebec nonprofit organizations with user dashboards, authentication, search, and payments.",
    focus: "Marketplace workflows, authenticated dashboards, payment integration, and search-backed discovery.",
    role: "Full-stack implementation and integration work across product surfaces and backend services.",
    outcome: "A focused hiring platform serving a specific nonprofit audience and operational model.",
    url: "https://emploi.espaceobnl.ca/fr",
    image: "/eo-16-10.png",
    tools: ["Next.js", "TypeScript", "Firebase", "Stripe", "Algolia"]
  },
  {
    title: "La Vitrine Culturelle",
    description: "Cultural event discovery platform using Webflow, custom web components, headless CMS content, search, authentication, and cloud functions.",
    focus: "Headless content architecture, search performance, custom components, and serverless integrations.",
    role: "Architecture and implementation work connecting Webflow, CMS content, Firebase, Supabase, GraphQL, and Algolia.",
    outcome: "A public cultural discovery platform with content-heavy workflows and search-driven navigation.",
    url: "https://www.lavitrine.com/en",
    image: "/lvc-v2-16-10.png",
    tools: ["Webflow", "TypeScript", "Firebase", "GraphQL", "Algolia"]
  },
  {
    title: "Tel-jeunes",
    description: "Youth support platform for Quebec with structured content, headless CMS integration, GraphQL data access, search, and serverless backend services.",
    focus: "Reliable content delivery, structured search, and maintainable backend integration for a sensitive public-facing platform.",
    role: "Custom web component and backend integration work across Webflow, Firebase, GraphQL, and Algolia.",
    outcome: "A content and support platform where clarity, maintainability, and reliability are central.",
    url: "https://www.teljeunes.com/en",
    image: "/tj-website-16-10.webp",
    tools: ["Webflow", "Firebase", "GraphQL", "Algolia"]
  },
  {
    title: "Captain's Log",
    description: "Automated dev journal that turns daily GitHub activity across every repo into a written narrative — a self-reflective system that observes its own output and runs unattended every night.",
    focus: "Provider-agnostic LLM pipeline design with cost and safety discipline: a no-activity fallback that emits one of ten pre-written entries instead of hallucinating on sparse inputs.",
    role: "Full-stack design and implementation — GitHub event ingestion (commits, pushes, PRs), LLM summarization, and a nightly GitHub Actions deployment.",
    outcome: "A production automation portable across providers: migrated Anthropic → OpenRouter via the OpenAI-compatible SDK, with the model configurable through a single env var.",
    url: "https://github.com/patshannon/captains-log",
    image: "/captains-log-16-10.svg",
    tools: ["Python", "OpenRouter", "LLM Pipelines", "GitHub Actions"]
  },
  {
    title: "Institut des troubles d'apprentissage",
    description: "Resource center for educators supporting students with learning difficulties, using headless content and search-backed resource discovery.",
    focus: "Content architecture, search implementation, and cloud function workflows for an education resource library.",
    role: "Implementation and integration across Webflow, Firebase, GraphQL, and Algolia.",
    outcome: "A searchable education resource platform for practitioners and families.",
    url: "https://www.institutta.com",
    image: "/ita-website-16-10.webp",
    tools: ["Webflow", "Firebase", "GraphQL", "Algolia"]
  },
  {
    title: "Alloprof",
    description: "Interactive student exercises built with React and backed by Firestore and headless CMS content management.",
    focus: "Interactive learning surfaces, data-backed exercise flows, and maintainable content operations.",
    role: "React implementation with Firebase and CMS-backed content structures.",
    outcome: "Reusable interactive education experiences for student learning workflows.",
    url: "https://www.alloprof.qc.ca/fr/eleves/bv/exercices-interactifs/vocabulaire",
    image: "/alloprof-website-16-10.webp",
    tools: ["React", "Firebase", "Squidex CMS"]
  }
]
