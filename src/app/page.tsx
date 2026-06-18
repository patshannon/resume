import workData from '@/lib/workExperience';
import Workcard from '@/components/Workcard';
import ImpactMetrics from '@/components/ImpactMetrics';
import SystemReadout from '@/components/SystemReadout';
import ProjectCard from '@/components/ProjectCard';
import { projectData } from '@/lib/projectData';
import { Metadata } from 'next';
import { MotionDiv, MotionSection, MotionH1 } from './motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Patrick Shannon - Product-Minded Software Architect',
  description:
    'Product-minded software architect and technical lead based in Halifax, focused on system architecture, product ownership, delivery planning, performance, and maintainable web platforms.',
  openGraph: {
    title: 'Patrick Shannon - Product-Minded Software Architect',
    description:
      'Architecture, product ownership, delivery planning, performance, and maintainable web platforms.',
    images: ['/headshot-rounded.png'],
  },
};

const focusAreas = [
  {
    index: 'A',
    title: 'Architecture',
    body: 'Practical web-platform architecture across frontend, backend, content, search, auth, payments, and cloud — including headless CMS, Algolia search backends, Gen2 cloud functions, and secrets management.',
  },
  {
    index: 'B',
    title: 'Product Ownership',
    body: 'Turning ambiguous goals into technical plans, delivery slices, and measurable outcomes — shipped across multiple client platforms in parallel.',
  },
  {
    index: 'C',
    title: 'Operational Quality',
    body: 'Improving reliability, performance, and cost in production — resilient pipelines, deployment orchestration, caching, and monitoring that holds up under load.',
  },
];

export default function Home() {
  return (
    <main>
      {/* ── Masthead ────────────────────────────────────────────── */}
      <MotionSection
        className="relative overflow-hidden bg-graphite px-6 pb-20 pt-32 text-cream sm:px-8 lg:px-10 lg:pb-28 lg:pt-36"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-grid-dark pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(219,160,63,0.5), transparent)' }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="spec-label flex flex-wrap items-center gap-x-3 gap-y-2 text-muted-dark">
              <span className="text-signal">§ 00</span>
              <span className="h-px w-6 bg-line" />
              <span>Patrick Shannon</span>
              <span className="h-px w-6 bg-line" />
              <span>Production systems</span>
            </div>

            <MotionH1
              className="mt-8 max-w-3xl font-serif text-[2.15rem] font-medium leading-[1.06] tracking-[-0.01em] text-cream sm:text-[3.4rem] lg:text-[4.1rem] lg:leading-[1.04]"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              I architect web platforms that hold up in{' '}
              <span className="text-signal">production</span>.
            </MotionH1>

            <MotionDiv
              className="mt-7 max-w-xl text-base leading-8 text-muted-dark sm:text-lg"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              I turn ambiguous product goals into reliable systems — architecture,
              delivery planning, performance work, and maintainable full-stack
              implementation. Every metric here is pulled from production.
            </MotionDiv>

            <MotionDiv
              className="mt-10 flex flex-wrap gap-3"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <a
                download
                href="/Patrick_Shannon_FullStack_Resume_2026.pdf"
                className="inline-flex items-center gap-2 rounded-sm bg-cream px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-signal-bright"
              >
                <HiDownload />
                Résumé
              </a>
              <a
                href="#selected-work"
                className="rounded-sm border border-line px-5 py-3 text-sm font-semibold text-cream transition-colors hover:border-signal hover:text-signal"
              >
                Selected work
              </a>
              <a
                href="#contact"
                className="rounded-sm border border-line px-5 py-3 text-sm font-semibold text-cream transition-colors hover:border-signal hover:text-signal"
              >
                Get in touch
              </a>
            </MotionDiv>
          </div>

          <SystemReadout />
        </div>
      </MotionSection>

      {/* ── §01 Evidence ────────────────────────────────────────── */}
      <MotionSection
        className="border-t border-line-paper bg-paper px-6 py-20 text-ink sm:px-8 lg:px-10 lg:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="spec-label text-signal-paper">§ 01 / Evidence</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
              Production outcomes, not capability claims.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-light">
              A few examples of architecture and optimization work that moved cost,
              performance, and search visibility in live applications.
            </p>
          </div>
          <ImpactMetrics />
        </div>
      </MotionSection>

      {/* ── §02 Operating focus ─────────────────────────────────── */}
      <MotionSection
        className="bg-graphite px-6 py-20 text-cream sm:px-8 lg:px-10 lg:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="spec-label text-signal">§ 02 / Operating focus</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-cream sm:text-5xl">
              The work is increasingly about judgment, structure, and ownership.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
            {focusAreas.map((item) => (
              <div key={item.title} className="bg-graphite-2 p-7">
                <span className="spec-label text-muted-dark">{item.index}</span>
                <h3 className="mt-3 font-serif text-2xl font-medium text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-dark">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── §03 Experience ──────────────────────────────────────── */}
      <MotionSection
        className="border-t border-line-paper bg-paper px-6 py-20 text-ink sm:px-8 lg:px-10 lg:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.34fr_1fr]">
          <div>
            <p className="spec-label text-signal-paper">§ 03 / Experience</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
              Technical depth with operational context.
            </h2>
          </div>
          <div className="grid gap-10">
            {workData.map((work, index) => (
              <Workcard key={work.id} data={work} variant="light" index={index} />
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── §04 Selected work ───────────────────────────────────── */}
      <MotionSection
        id="selected-work"
        className="bg-graphite px-6 py-20 text-cream sm:px-8 lg:px-10 lg:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-end">
            <div>
              <p className="spec-label text-signal">§ 04 / Selected work</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-cream sm:text-5xl">
                Representative systems, not a wall of screenshots.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-dark">
              These are systems where architecture, implementation, integrations, and
              product constraints all mattered at once.
            </p>
          </div>

          <div className="mt-14 grid gap-12">
            {projectData.slice(0, 5).map((project, index) => (
              <ProjectCard key={project.title} data={project} index={index} />
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── §05 Contact ─────────────────────────────────────────── */}
      <MotionSection
        id="contact"
        className="border-t border-line-paper bg-paper px-6 py-20 text-ink sm:px-8 lg:px-10 lg:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="spec-label text-signal-paper">§ 05 / Contact</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
              A place for context, not a high-pressure funnel.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-light">
              Best reached for architecture discussions, product-minded engineering
              work, or technical leadership conversations.
            </p>
          </div>

          <div className="rounded-sm border border-line-paper bg-paper-2 p-6">
            <p className="spec-label text-muted-light">Direct</p>
            <a
              href="mailto:patrick.e.shannon@gmail.com"
              className="mt-2 block break-all font-mono text-base font-medium text-ink underline-offset-4 hover:text-signal-paper hover:underline"
            >
              patrick.e.shannon@gmail.com
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                target="_blank"
                href="https://github.com/patshannon"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-line-paper px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-signal-paper hover:text-signal-paper"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/patrick-e-shannon/"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-line-paper px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-signal-paper hover:text-signal-paper"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <a
                download
                href="/Patrick_Shannon_FullStack_Resume_2026.pdf"
                className="inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-signal hover:text-ink"
              >
                <HiDownload />
                Résumé
              </a>
            </div>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
