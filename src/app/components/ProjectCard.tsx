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
    ownership?: string;
    evidence?: string;
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
      className="grid gap-7 border-t border-line pt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
    >
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block self-start overflow-hidden rounded-sm border border-line bg-graphite-2"
      >
        {data.image ? (
          <Image
            className="aspect-[16/10] w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
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

      <div className="min-w-0">
        <span className="spec-label text-muted-dark">{num}</span>
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 flex w-fit items-baseline gap-2"
        >
          <h3 className="font-serif text-3xl font-medium leading-tight text-cream transition-colors group-hover:text-signal sm:text-4xl">
            {data.title}
          </h3>
        </a>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-dark sm:text-base sm:leading-8">
          {data.description}
        </p>

        <dl className="mt-7 grid gap-4 border-t border-line pt-5 text-sm sm:grid-cols-2 xl:grid-cols-3">
          {data.focus && (
            <div>
              <dt className="spec-label text-signal">Focus</dt>
              <dd className="mt-1.5 leading-6 text-muted-dark">{data.focus}</dd>
            </div>
          )}
          {data.ownership && (
            <div>
              <dt className="spec-label text-signal">Ownership</dt>
              <dd className="mt-1.5 leading-6 text-muted-dark">{data.ownership}</dd>
            </div>
          )}
          {data.evidence && (
            <div>
              <dt className="spec-label text-signal">Evidence</dt>
              <dd className="mt-1.5 leading-6 text-muted-dark">{data.evidence}</dd>
            </div>
          )}
          <div className="sm:col-span-2 xl:col-span-3">
            <dt className="spec-label text-signal">Stack</dt>
            <dd className="mt-2.5 flex flex-wrap items-start gap-2">
              {data.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-sm border border-line px-2.5 py-1 font-mono text-[11px] tracking-[0.04em] text-muted-dark"
                >
                  {tool}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
