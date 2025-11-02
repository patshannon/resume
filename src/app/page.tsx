import Toolkit from '@/components/Toolkit';
import workData from '@/lib/workExperience';
import Workcard from '@/components/Workcard';
import { educationData } from '@/lib/educationData';
import EducationCard from '@/components/EducationCard';
import ScrollDown from '@/components/ScrollDown';
import SkillsRadarChart from '@/components/SkillsRadarChart';
import ImpactMetrics from '@/components/ImpactMetrics';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { projectData } from '@/lib/projectData';
import { Metadata } from 'next';
import { MotionDiv, MotionSection, MotionH1 } from './motion';
import { HiLocationMarker } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Patrick Shannon - Senior Full Stack Developer',
  description:
    'Senior full-stack developer (5+ years) experienced in leading complete software lifecycles — from technical planning and architecture to implementation and optimization. Skilled in React, Next.js, Node.js, and GCP/Firebase, with a focus on system design, performance optimization, scalability, and maintainability. Based in Halifax, NS.',
  openGraph: {
    title: 'Patrick Shannon - Senior Full Stack Developer',
    description:
      'Senior full-stack developer (5+ years) experienced in leading complete software lifecycles — from technical planning and architecture to implementation and optimization. Skilled in React, Next.js, Node.js, and GCP/Firebase.',
    images: ['/headshot-rounded.png'],
  },
};

export default function Home() {
  return (
    <main>
      {/* Header */}
      <MotionSection
        className="relative px-10 sm:px-5 py-20 sm:py-5 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center overflow-hidden"
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
        <div className="relative z-10">
          <MotionDiv
            className="relative mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            {/* Profile image with animated glow */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-zinc-400/20 to-white/20 rounded-full blur-xl" />
              <div className="relative">
                <Image 
                  src="/headshot-rounded.png" 
                  alt="Patrick Shannon" 
                  width={150} 
                  height={150} 
                  quality={100} 
                  priority
                  className="relative z-10 rounded-full border-4 border-zinc-700/50 shadow-2xl"
                />
              </div>
            </div>
          </MotionDiv>

          <MotionH1
            className="text-7xl sm:text-5xl font-extrabold mt-6 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-200 bg-clip-text text-transparent">
              Patrick Shannon
            </span>
          </MotionH1>

          <MotionDiv
            className="flex flex-col gap-4 items-center mt-8 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative px-8 py-4 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded-xl text-zinc-50 text-xl font-bold shadow-lg border border-zinc-600/50">
                Senior Full Stack Developer
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            className="text-zinc-400 text-lg mb-6 flex items-center justify-center gap-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <HiLocationMarker className="text-zinc-500" />
            <span className="font-light">Halifax, N.S. Canada</span>
          </MotionDiv>

          {/* Tagline */}
          <MotionDiv
            className="max-w-2xl mx-auto text-zinc-300 text-lg font-light leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>
              Crafting scalable solutions and leading complete software lifecycles — 
              <span className="text-zinc-100 font-medium"> from architecture to optimization</span>
            </p>
          </MotionDiv>

          {/* Quick stats */}
          <MotionDiv
            className="flex flex-wrap justify-center gap-8 mt-12 text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-zinc-50">5+</div>
              <div className="text-zinc-400">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-zinc-50">Full Stack</div>
              <div className="text-zinc-400">Expertise</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-zinc-50">React</div>
              <div className="text-zinc-400">Specialized</div>
            </div>
          </MotionDiv>
        </div>

        <div className="absolute w-20 text-center mx-auto bottom-10 left-0 right-0 flex justify-center z-10">
          <ScrollDown />
        </div>
      </MotionSection>

      {/* Projects */}
      <MotionSection
        className="bg-zinc-50 text-zinc-900 relative px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-16">Portfolio</h2>
        <div className="max-w-3xl">
          {projectData.map((project, index) => (
            <ProjectCard key={project.title} data={project} index={index} />
          ))}
        </div>
      </MotionSection>

      {/* Toolkit */}
      <MotionSection
        className="flex flex-col justify-center min-h-screen px-10 py-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-16">Toolkit</h2>
        <Toolkit />
        <div className="mt-16 text-sm font-light">...new tools are added frequently, stay tuned.</div>
      </MotionSection>

      {/* Skills Visualization */}
      <MotionSection
        className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 relative px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-indigo-500/5 pointer-events-none" />

        <h2 className="relative text-5xl font-extrabold max-w-lg mx-auto mb-4 bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-50 bg-clip-text text-transparent">
          Skills Breakdown
        </h2>
        <p className="relative text-zinc-400 mb-16 max-w-2xl text-center font-light">
          A visual representation of my technical expertise and professional capabilities
        </p>
        <div className="relative w-full">
          <SkillsRadarChart />
        </div>

        {/* Divider */}
        <div className="relative w-full max-w-4xl my-20">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        </div>

        {/* Impact Metrics Dashboard */}
        <div className="relative w-full">
          <ImpactMetrics />
        </div>
      </MotionSection>

      {/* Work Experience */}
      <MotionSection
        className="bg-zinc-50 text-zinc-900 relative px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-16">Work experience</h2>
        <div className="flex flex-col gap-10">
          {workData.map((work) => (
            <Workcard key={work.id} data={work} variant='light' />
          ))}
        </div>
      </MotionSection>

      {/* Education */}
      <MotionSection
        className="relative px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-16">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-4">
          {educationData.map((item) => (
            <EducationCard key={item.title} data={item} />
          ))}
        </div>
      </MotionSection>

      {/* Contact */}
      <MotionSection
        className="relative bg-zinc-50 text-zinc-900 px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-10">Contact and Info</h2>
        <div className="flex flex-col gap-10 items-center">
          <div>peshannon104@gmail.com</div>
          <div className="flex gap-2">
            <a
              target="_blank"
              href="https://github.com/patshannon"
              className="w-10 h-10 hover:scale-105 transition-transform"
            >
              <Image width="40" height="40" src="/ps-github-link-icon.svg" alt="github icon" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/patrick-e-shannon/"
              className="w-10 h-10 hover:scale-105 transition-transform"
            >
              <Image width="40" height="40" src="/ps-linkedin-link-icon.svg" alt="linkedin icon" />
            </a>
          </div>
          <a
            download
            href="/pshannon-dev.pdf"
            className="rounded-full bg-zinc-900 text-zinc-50 px-6 py-4 hover:scale-105 transition-transform"
          >
            Download Resume
          </a>
        </div>
      </MotionSection>
    </main>
  );
}
