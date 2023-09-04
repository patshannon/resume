import Image from 'next/image';

export default function ProjectCard({data, index}) {
  return (
    <div className={`flex flex-col ${index%2==0?'md:flex-row':'md:flex-row-reverse'} mb-16 md:mb-10 gap-6 md:gap-8`}>
      <div className="w-full relative">
        <Image className="w-full rounded-lg" src={data.image} width={1000} height={625}/>
        </div>
      <div className="flex flex-col gap-2 text-left w-full">
        <div className="flex gap-2">
          <h3 className="text-2xl font-extrabold grow">{data.title}
            <a href={data.url} target="_blank" className="inline-flex ml-2 hover:scale-105 transition-transform">
              <Image src='/ps-open-in-new-tab.svg' width={16} height={16} className="inline-block"/>
            </a>
          </h3>
        </div>
        <div className="text-sm text-zinc-500 border-l-2 pl-2">{data.description}</div>
        <div className="flex flex-wrap gap-2">
          {data.tools.map(tool => (
            <span className="text-xs bg-zinc-200 px-2 py-1 rounded-lg text-zinc-800 font-bold">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  )
}