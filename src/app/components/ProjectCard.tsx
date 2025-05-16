import Image from 'next/image';
import { MotionDiv, MotionSpan } from '../motion';
import Link from 'next/link';

const ProjectCard = ({ data, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2 },
    },
  };

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className={`flex flex-col ${
        index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-start mb-16 md:mb-10 gap-6 md:gap-8`}
    >
      <MotionDiv
        className="w-full relative rounded-lg"
        whileHover={{ scale: 1.01, boxShadow: '0px 10px 20px 10px rgba(0,0,0,0.15)' }}
        transition={{ duration: 0.3 }}
      >
        <a href={data.url} target="_blank rounded-lg overflow-hidden">
          <Image
            className="w-full rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105"
            src={data.image}
            width={1000}
            height={625}
            alt={`${data.title} project screenshot`}
            priority={index < 2}
            quality={100}
          />
        </a>
      </MotionDiv>
      <div className="flex flex-col gap-2 text-left w-full">
        <a
          href={data.url}
          target="_blank"
          className="inline-flex items-center justify-start gap-2"
          rel="noopener noreferrer"
        >
          <h3 className="text-2xl font-extrabold group">
            {data.title}
          </h3>
          <Image
              alt="Visit project website"
              src="/ps-open-in-new-tab.svg"
              width={16}
              height={16}
              className="inline-block"
            />
        </a>
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
  );
};

export default ProjectCard;
