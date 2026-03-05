import { MotionDiv, MotionSection, MotionH1, MotionH2, MotionP } from '@/motion';
import { HiCheckCircle, HiCode, HiLightningBolt, HiChartBar, HiSparkles } from 'react-icons/hi';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Patrick Shannon',
  description:
    "Software developer with 5 years of experience and a background in aviation. I build fast, reliable web applications and care deeply about the details that separate good software from great software.",
};

const highlights = [
  {
    icon: HiLightningBolt,
    stat: '100%',
    description: 'CMS API cache hit rate after redesigning the caching architecture from scratch',
  },
  {
    icon: HiChartBar,
    stat: '95%',
    description: 'Drop in Algolia search requests through smarter frontend query management',
  },
  {
    icon: HiCode,
    stat: '60 → 85',
    description: 'Lighthouse mobile score improvement after targeted performance work',
  },
  {
    icon: HiSparkles,
    stat: '40%',
    description: 'Lift in SEO impressions driven by Core Web Vitals and structured data fixes',
  },
  {
    icon: HiCheckCircle,
    stat: '15+',
    description: 'Production releases shipped with zero-downtime CI/CD pipelines',
  },
];

const technologies = {
  frontend: ['React', 'Next.js', 'TypeScript'],
  backend: ['Node.js', 'Firebase', 'GCP'],
  tools: ['Claude Code', 'GitHub Copilot', 'Codex', 'Spec Kit'],
};

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <MotionSection
        className="relative px-10 sm:px-5 py-32 sm:py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.02),transparent_50%)]" />
        </div>

        {/* Floating background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <MotionDiv
            className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <MotionDiv
            className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <MotionH1
            className="text-6xl sm:text-4xl font-extrabold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-200 bg-clip-text text-transparent">
              Hi, I'm Patrick
            </span>
          </MotionH1>

          <MotionP
            className="text-xl sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm a software developer who cares about building things that actually work — fast, reliable, and easy to reason about. Over the past 5 years, I've shipped web applications across the full stack and developed a strong bias toward solutions that hold up in production, not just in demos.
          </MotionP>

          <MotionDiv
            className="text-zinc-300 text-lg sm:text-base font-light leading-relaxed max-w-3xl mx-auto space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              At <span className="text-zinc-100 font-medium">bbox.digital</span>, I own development end-to-end — from scoping and architecture to deployment and ongoing optimization. I work closely with the founding team to make sure technical decisions track with product goals, and I'm equally comfortable writing TypeScript on the frontend and managing infrastructure on GCP.
            </p>
            <p>
              Before tech, I trained as a pilot. Aviation taught me to think systematically under pressure, to trust checklists over intuition, and to treat ambiguity as something to resolve — not tolerate. Those habits stuck. I bring the same precision to code reviews and incident responses that I once applied to pre-flight checks.
            </p>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Key Highlights */}
      <MotionSection
        className="bg-zinc-50 text-zinc-900 relative px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <MotionH2
          className="text-5xl sm:text-3xl font-extrabold mb-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Key Highlights
        </MotionH2>
        <MotionP
          className="text-zinc-600 mb-16 text-center max-w-2xl font-light"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real results from production systems — not lab conditions
        </MotionP>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <MotionDiv
                key={index}
                className="relative group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-zinc-200 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl">
                      <Icon className="text-zinc-50 text-2xl" />
                    </div>
                    <div className="text-3xl font-bold text-zinc-900">{highlight.stat}</div>
                  </div>
                  <p className="text-zinc-700 font-light leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </MotionSection>

      {/* Technology Stack */}
      <MotionSection
        className="relative px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900" />

        <div className="relative z-10 max-w-5xl w-full">
          <MotionH2
            className="text-5xl sm:text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-50 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technology Stack
          </MotionH2>
          <MotionP
            className="text-zinc-400 mb-16 text-center max-w-2xl mx-auto font-light"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The stack I reach for when reliability and speed both matter
          </MotionP>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <MotionDiv
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 border border-zinc-700/50 shadow-2xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-zinc-50">Frontend</h3>
              <ul className="space-y-3">
                {technologies.frontend.map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </MotionDiv>

            {/* Backend */}
            <MotionDiv
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 border border-zinc-700/50 shadow-2xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-zinc-50">Backend</h3>
              <ul className="space-y-3">
                {technologies.backend.map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </MotionDiv>

            {/* AI Tools */}
            <MotionDiv
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 border border-zinc-700/50 shadow-2xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-zinc-50">AI Tools</h3>
              <ul className="space-y-3">
                {technologies.tools.map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Philosophy / Closing */}
      <MotionSection
        className="bg-zinc-50 text-zinc-900 relative px-10 py-20 min-h-[60vh] container-xl flex flex-col justify-center align-center items-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl">
          <MotionH2
            className="text-5xl sm:text-3xl font-extrabold mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Approach
          </MotionH2>
          <MotionP
            className="text-zinc-700 text-lg sm:text-base font-light leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Good software is defined by what doesn't break. I focus on{' '}
            <span className="text-zinc-900 font-medium">clear architecture</span>,{' '}
            <span className="text-zinc-900 font-medium">measurable outcomes</span>, and{' '}
            <span className="text-zinc-900 font-medium">code that future me won't resent</span>. I use AI tools heavily — not to replace thinking, but to move faster through the parts that don't require it, so I can spend more time on the parts that do.
          </MotionP>
        </div>
      </MotionSection>
    </main>
  );
}