import { MotionDiv, MotionH3, MotionP } from '../motion';

interface WorkcardProps {
  data: {
    role: string;
    company: string;
    location: string;
    start: string;
    end: string;
    description: string;
    tools: string[];
  };
  variant?: 'dark' | 'light';
  index?: number;
}

const WorkCard = ({ data, variant = 'light', index = 0 }: WorkcardProps) => {
  const isDark = variant === 'dark';

  const line = isDark ? 'border-line' : 'border-line-paper';
  const eyebrow = isDark ? 'text-signal' : 'text-signal-paper';
  const meta = isDark ? 'text-muted-dark' : 'text-muted-light';
  const heading = isDark ? 'text-cream' : 'text-ink';
  const company = isDark ? 'text-cream' : 'text-ink';
  const body = isDark ? 'text-muted-dark' : 'text-muted-light';
  const tag = isDark
    ? 'border-line text-muted-dark'
    : 'border-line-paper text-muted-light';

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`grid gap-6 border-t pt-8 md:grid-cols-[0.28fr_1fr] ${line}`}
    >
      <div>
        <p className={`spec-label ${eyebrow}`}>
          {data.start} — {data.end}
        </p>
        <p className={`mt-2 font-mono text-[12px] ${meta}`}>{data.location}</p>
      </div>

      <div>
        <MotionH3
          className={`font-serif text-2xl font-medium leading-tight ${heading}`}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.06 + 0.05 }}
        >
          {data.role}
        </MotionH3>
        <p className={`mt-1 text-sm font-semibold ${company}`}>{data.company}</p>
        <MotionP
          className={`mt-5 max-w-3xl text-sm leading-7 ${body}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.06 + 0.1 }}
        >
          {data.description}
        </MotionP>

        <div className="mt-5 flex flex-wrap gap-2">
          {data.tools.map((tool) => (
            <span
              key={tool}
              className={`rounded-sm border px-2.5 py-1 font-mono text-[11px] tracking-[0.04em] ${tag}`}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

export default WorkCard;
