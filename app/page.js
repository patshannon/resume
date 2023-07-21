import Toolkit from '@/components/toolkit';
import workData from '../data/workExperience';
import { Workcard } from '@/components/workcard';
import SkillsChart from '@/components/skillsChart';
import { hardSkillsData } from '@/data/skillsData';
import { softSkillsData } from '@/data/skillsData';
import { educationData } from '@/data/educationData';
import EducationCard from '@/components/educationCard';
import { ScrollDown } from '@/components/scrollDown';
import Image from 'next/image';
export default function Home() {
  return (
    <main>
      <section className="relative px-10 sm: px-5 py-20 sm: py-5 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center">
        <h1 className="text-7xl font-extrabold">Patrick Shannon</h1>
        <div className="flex flex-col sm:flex-row gap-2 mt-10 mb-10 text-zinc-900 text-2xl font-extrabold">
          <div className="p-5 bg-zinc-800 rounded-xl text-zinc-50">Web Developer</div>
          <div className="p-5 bg-zinc-800 rounded-xl text-zinc-50">Webflow Expert</div>
        </div>
        <div className="font-light">Halifax, N.S. Canada</div>
        <div className="absolute w-100 text-center m-auto bottom-10 left-0 right-0 flex justify-center">
          <ScrollDown />
        </div>
      </section>
      <section className="flex flex-col justify-center min-h-screen px-10 py-20 bg-zinc-50 text-zinc-900 text-center">
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-16">Toolkit</h2>
        <Toolkit />
        <div className="mt-16 text-sm font-light">...new tools are added frequenty, stay tuned.</div>
      </section>
      <section className="relative px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center">
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-16">Work experience</h2>
        <div className="flex flex-col gap-10">
          {workData.map((work) => (
            <Workcard data={work} />
          ))}
        </div>
      </section>
      <section className="bg-zinc-50 text-zinc-900 relative px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center">
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-10">Skills distribution</h2>
        <div className="flex flex-col md:flex-row justify-center items-center align-center gap-10 max-w-4xl">
          <div className="w-full h-32">
            <SkillsChart data={hardSkillsData} />
          </div>
          <div className="w-full h-40">
            <SkillsChart data={softSkillsData} />
          </div>
        </div>
        <div className="mt-10 md:mt-15 bg-zinc-900 opacity-40 h-px w-10"></div>
        <div className="mt-5 max-w-lg p-2">
          <div className="text-sm">Leveraging my unique skills from my past career as an airline pilot I develop precise and professional solutions.</div>
        </div>    
      </section>
      <section className="relative px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center">
        <h2 className="text-5xl font-extrabold max-w-lg mx-auto mb-10">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-4">
          {educationData.map((item) => (
            <EducationCard data={item} />
          ))}
        </div>
      </section>
      <section className="relative bg-zinc-50 text-zinc-900 px-10 py-20 min-h-screen container-xl flex flex-col justify-center align-center items-center text-center">
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
          <a download href="/ps-resume-2023.pdf" className="rounded-full bg-zinc-900 text-zinc-50 px-6 py-4 hover:scale-105 transition-transform">
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}
