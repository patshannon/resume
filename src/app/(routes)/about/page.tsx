import Image from 'next/image';
import { Metadata } from 'next';
import { MotionDiv, MotionSection, MotionH1, MotionH2, MotionP } from '@/motion';
import { HiDownload } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Patrick Shannon is a lead developer and technical consultant who makes complex systems understandable and safe to modernize.',
};

const highlights = [
  { id: 'H.01', stat: '100', unit: '% ↑', label: 'CMS API efficiency via caching architecture' },
  { id: 'H.02', stat: '95', unit: '% ↓', label: 'Algolia search requests, frontend optimization' },
  { id: 'H.03', stat: '60→85', unit: 'LH', label: 'Lighthouse mobile performance score' },
  { id: 'H.04', stat: '40', unit: '% ↑', label: 'SEO impressions via Core Web Vitals work' },
  { id: 'H.05', stat: '15', unit: '+ rel', label: 'Production releases shipped with CI/CD' },
];

const stack = [
  { group: 'Application', items: ['React', 'Next.js', 'TypeScript'] },
  { group: 'Platform', items: ['Node.js', 'Firebase', 'GCP'] },
  { group: 'Verification', items: ['Playwright', 'CI/CD', 'Observability'] },
];

export default function Page() {
  return (
    <main>
      {/* ── §A Profile ──────────────────────────────────────────── */}
      <MotionSection
        className="relative overflow-hidden bg-graphite px-6 pb-20 pt-32 text-cream sm:px-8 lg:px-10 lg:pb-28 lg:pt-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-grid-dark pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.5fr]">
          <div>
            <p className="spec-label text-signal">§ A / Profile</p>
            <MotionH1
              className="mt-6 max-w-2xl font-serif text-[2.5rem] font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl lg:text-[3.6rem]"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              I make the path forward clear when a web platform is complex, undocumented,
              or risky to change.
            </MotionH1>
            <MotionDiv
              className="mt-7 max-w-xl space-y-5 text-base leading-7 text-muted-dark"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <p>
                I&apos;m a lead developer and technical consultant at{' '}
                <span className="text-cream">bbox.digital</span>, serving as the primary
                client-facing technical lead within a lean two-developer team. Clients
                bring feature requests and platform decisions directly to me, and I own
                3–4 concurrent engagements from discovery and estimation through
                architecture, implementation, deployment, and production support.
              </p>
              <p>
                I came to software after an earlier career in aviation, which left me
                with a durable bias toward precision and systematic thinking under
                pressure. These days that shows up in production-safe modernization:
                understanding inherited systems, choosing a pragmatic path forward, and
                verifying the replacement before calling it done.
              </p>
            </MotionDiv>
          </div>

          <MotionDiv
            className="justify-self-start lg:justify-self-end"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <div className="relative w-fit rounded-sm border border-line bg-graphite-2 p-2">
              <Image
                src="/headshot-rounded.png"
                alt="Patrick Shannon"
                width={220}
                height={220}
                priority
                className="rounded-sm"
              />
              <span className="spec-label absolute -bottom-3 left-4 bg-graphite-2 px-2 text-muted-dark">
                Halifax, NS
              </span>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ── §B Highlights ───────────────────────────────────────── */}
      <MotionSection
        className="border-t border-line-paper bg-paper px-6 py-20 text-ink sm:px-8 lg:px-10 lg:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="spec-label text-signal-paper">§ B / Highlights</p>
            <MotionH2
              className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Measurable impact, taken straight from production.
            </MotionH2>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <MotionDiv
                key={h.id}
                className="border-t border-line-paper pt-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-line-paper">{h.id}</span>
                </div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-serif text-5xl font-medium leading-none text-ink">
                    {h.stat}
                  </span>
                  <span className="font-mono text-sm text-signal-paper">{h.unit}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-light">{h.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── §C Stack ────────────────────────────────────────────── */}
      <MotionSection
        className="bg-graphite px-6 py-20 text-cream sm:px-8 lg:px-10 lg:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="spec-label text-signal">§ C / Stack</p>
            <MotionH2
              className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-cream sm:text-5xl"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Tools for discovery, delivery, and verification.
            </MotionH2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
            {stack.map((col) => (
              <div key={col.group} className="bg-graphite-2 p-7">
                <h3 className="spec-label text-muted-dark">{col.group}</h3>
                <ul className="mt-5 space-y-3 font-mono text-sm text-cream">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── §D Approach ─────────────────────────────────────────── */}
      <MotionSection
        className="border-t border-line-paper bg-paper px-6 py-20 text-ink sm:px-8 lg:px-10 lg:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="spec-label text-signal-paper">§ D / Approach</p>
          <MotionP
            className="mt-6 font-serif text-3xl font-medium leading-[1.2] text-ink sm:text-4xl"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I make complex systems understandable before I change them — then use{' '}
            <span className="text-signal-paper">pragmatic architecture</span>, measurable
            verification, and hands-on delivery to modernize them safely. That means
            mapping existing behavior, making tradeoffs visible, and validating the
            replacement against production before cutover.
          </MotionP>
          <MotionDiv
            className="mt-10"
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-3">
              <a
                download
                href="/Patrick_Shannon_FullStack_Resume_2026.pdf"
                className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-signal hover:text-ink"
              >
                <HiDownload />
                Résumé
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-sm border border-line-paper px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-signal-paper hover:text-signal-paper"
              >
                Discuss a platform
              </a>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>
    </main>
  );
}
