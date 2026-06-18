import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';
import { MotionDiv } from '../motion';

interface ProjectCardProps {
  data: {
    title: string;
    description: string;
    url: string;
    image: string;
    tools: string[];
    focus?: string;
    role?: string;
    outcome?: string;
  };
  index: number;
}

const ProjectCard = ({ data, index }: ProjectCardProps) => {
  const num = `W.${String(index + 1).padStart(2, '0')}`;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="grid gap-7 border-t border-line pt-8 lg:grid-cols-[0.42fr_1fr]"
    >
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-sm border border-line bg-graphite-2"
      >
        {data.image ? (
          <Image
            className="aspect-[16/10] h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            src={data.image}
            width={1000}
            height={625}
            alt={`${data.title} project screenshot`}
            priority={index < 2}
          />
        ) : (
          <div className="flex aspect-[16/10] h-full w-full items-center justify-center bg-graphite-2 px-4 text-center">
            <span className="spec-label text-muted-dark">{data.title}</span>
          </div>
        )}
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-sm border border-line bg-graphite/80 text-cream opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
          <HiArrowUpRight className="text-sm" />
        </span>
      </a>

      <div className="grid gap-6 md:grid-cols-[0.44fr_1fr]">
        <div>
          <span className="spec-label text-muted-dark">{num}</span>
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-baseline gap-2"
          >
            <h3 className="font-serif text-3xl font-medium leading-tight text-cream transition-colors group-hover:text-signal">
              {data.title}
            </h3>
          </a>
          <p className="mt-4 text-sm leading-7 text-muted-dark">{data.description}</p>
        </div>

        <dl className="grid gap-4 text-sm">
          {data.focus && (
            <div className="border-l border-line pl-4">
              <dt className="spec-label text-signal">Focus</dt>
              <dd className="mt-1.5 leading-6 text-muted-dark">{data.focus}</dd>
            </div>
          )}
          {data.role && (
            <div className="border-l border-line pl-4">
              <dt className="spec-label text-signal">Role</dt>
              <dd className="mt-1.5 leading-6 text-muted-dark">{data.role}</dd>
            </div>
          )}
          {data.outcome && (
            <div className="border-l border-line pl-4">
              <dt className="spec-label text-signal">Outcome</dt>
              <dd className="mt-1.5 leading-6 text-muted-dark">{data.outcome}</dd>
            </div>
          )}
          <div className="flex flex-wrap gap-2 pt-1">
            {data.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-sm border border-line px-2.5 py-1 font-mono text-[11px] tracking-[0.04em] text-muted-dark"
              >
                {tool}
              </span>
            ))}
          </div>
        </dl>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
