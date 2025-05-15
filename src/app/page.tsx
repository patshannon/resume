import Toolkit from '@/components/Toolkit';
import workData from '@/lib/workExperience';
import Workcard from '@/components/Workcard';
import { educationData } from '@/lib/educationData';
import EducationCard from '@/components/EducationCard';
import ScrollDown from '@/components/ScrollDown';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { projectData } from '@/lib/projectData';
import { Metadata } from 'next';
import { MotionDiv, MotionSection, MotionH1 } from './motion';

export const metadata: Metadata = {
  title: 'Patrick Shannon - Full Stack Developer | Technical Team Lead',
  description: 'Experienced Software Developer Team Lead specializing in web development, team management, and technical leadership. Based in Halifax, NS.',
  openGraph: {
    title: 'Patrick Shannon - Software Developer Team Lead',
    description: 'Experienced Software Developer Team Lead specializing in web development, team management, and technical leadership.',
    images: ['/headshot-rounded.png'],
  },
};

export default function Home() {
  return (
    <main>
      <MotionSection 
        className="relative px-10 sm:px-5 py-20 sm:py-5 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MotionDiv
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src="/headshot-rounded.png" 
            alt="Patrick Shannon" 
            width={125} 
            height={125}
            priority
          />
        </MotionDiv>
        <MotionH1 
          className="text-7xl font-extrabold mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Patrick Shannon
        </MotionH1>
        <MotionDiv 
          className="flex flex-col gap-2 items-center mt-10 mb-10 text-zinc-900 text-xl font-extrabold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-5 bg-zinc-800 rounded-xl text-zinc-50">
            Full Stack Developer | Technical Team Lead
          </div>
        </MotionDiv>
        <MotionDiv 
          className="font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Halifax, N.S. Canada
        </MotionDiv>
        <div className="absolute w-20 text-center mx-auto bottom-10 left-0 right-0 flex justify-center">
          <ScrollDown />
        </div>
      </MotionSection>

      <MotionSection 
        className="flex flex-col justify-center min-h-screen px-10 py-20 bg-zinc-50 text-zinc-900 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-16">Toolkit</h2>
        <Toolkit />
        <div className="mt-16 text-sm font-light">...new tools are added frequenty, stay tuned.</div>
      </MotionSection>

      <MotionSection 
        className="relative px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-16">Work experience</h2>
        <div className="flex flex-col gap-10">
          {workData.map((work) => (
            <Workcard key={work.id} data={work} />
          ))}
        </div>
      </MotionSection>

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
            <ProjectCard key={project.title} data={project} index={index}/>
          ))}
        </div>
      </MotionSection>

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
            <a target="_blank" href="https://github.com/patshannon" className="w-10 h-10 hover:scale-105 transition-transform">
              <Image width="40" height="40" src="/ps-github-link-icon.svg" alt="github icon" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/patrick-e-shannon/" className="w-10 h-10 hover:scale-105 transition-transform">
              <Image width="40" height="40" src="/ps-linkedin-link-icon.svg" alt="linkedin icon" />
            </a>
          </div>
          <a download href="/pshannon2025.pdf" className="rounded-full bg-zinc-900 text-zinc-50 px-6 py-4 hover:scale-105 transition-transform">
            Download Resume
          </a>
        </div>
      </MotionSection>
    </main>
  );
}
