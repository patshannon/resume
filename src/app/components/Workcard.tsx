import { MotionDiv, MotionH3, MotionP, MotionSpan } from '../motion';

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
  variant?: 'dark' | 'light'
}

const WorkCard = ({ data, variant='dark' }: WorkcardProps) => {
  return (
    <MotionDiv 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row gap-5 sm:gap-16 items-start max-w-3xl group hover:bg-zinc-50/50 p-6 rounded-xl transition-colors duration-300"
    >
      <div className="sm:text-left flex flex-col max-w-sm">
        <MotionH3 
          className="font-bold text-2xl"
        >
          {data.role}
        </MotionH3>
        <MotionP 
          className="text-sm font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {data.company} | {data.location}
        </MotionP>
        <MotionP 
          className="text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {data.start} - {data.end}
        </MotionP>
        <MotionP 
          className="text-sm mt-2 italic text-zinc-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {data.description}
        </MotionP>
      </div>
      <MotionDiv 
        className="flex flex-wrap gap-2 justify-center sm:justify-end max-w-xs mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {data.tools.map((tool, index) => (
          <MotionSpan
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            className={`text-xs  px-2 py-1 rounded-lg  font-bold cursor-default ${variant === 'dark' ? 'bg-zinc-800 text-zinc-200': 'bg-zinc-200 text-zinc-800' }`}
          >
            {tool}
          </MotionSpan>
        ))}
      </MotionDiv>
    </MotionDiv>
  );
}

export default WorkCard