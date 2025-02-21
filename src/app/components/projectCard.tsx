import Image from 'next/image';
import { MotionDiv, MotionSpan } from '../motion';

export default function ProjectCard({data, index}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2 }
    }
  };

  return (
    <MotionDiv 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className={`flex flex-col ${index%2==0?'md:flex-row':'md:flex-row-reverse'} mb-16 md:mb-10 gap-6 md:gap-8`}
    >
      <MotionDiv 
        className="w-full relative overflow-hidden rounded-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image 
          className="w-full transition-transform duration-500 hover:scale-105" 
          src={data.image} 
          width={1000} 
          height={625} 
          alt={`${data.title} project screenshot`}
          priority={index < 2}
        />
      </MotionDiv>
      <div className="flex flex-col gap-2 text-left w-full">
        <div className="flex gap-2">
          <h3 className="text-2xl font-extrabold grow group">
            {data.title}
            <a 
              href={data.url} 
              target="_blank" 
              className="inline-flex ml-2 opacity-70 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              rel="noopener noreferrer"
            >
              <Image 
                alt='Visit project website' 
                src='/ps-open-in-new-tab.svg' 
                width={16} 
                height={16} 
                className="inline-block"
              />
            </a>
          </h3>
        </div>
        <div className="text-sm text-zinc-500 border-l-2 pl-2 border-zinc-300">{data.description}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.tools.map((tool, index) => (
            <MotionSpan 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-xs bg-zinc-200 px-2 py-1 rounded-lg text-zinc-800 font-bold"
            >
              {tool}
            </MotionSpan>
          ))}
        </div>
      </div>
    </MotionDiv>
  )
}
