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

const WorkCard = ({ data, variant='dark', index = 0 }: WorkcardProps) => {
  return (
    <MotionDiv
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.97
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
      className="relative flex flex-col sm:flex-row gap-5 sm:gap-16 items-start max-w-3xl group p-6 rounded-xl overflow-hidden"
      style={{
        willChange: 'transform, opacity'
      }}
    >
      {/* Card background with subtle hover effect */}
      <div className={`absolute inset-0 transition-colors duration-300 rounded-xl ${
        variant === 'dark' 
          ? 'bg-zinc-800/0 group-hover:bg-zinc-800/30' 
          : 'bg-zinc-50/0 group-hover:bg-zinc-100/30'
      }`} />

      {/* Subtle border on hover */}
      <div className={`absolute inset-0 rounded-xl border border-transparent transition-colors duration-300 ${
        variant === 'dark'
          ? 'group-hover:border-zinc-600/50'
          : 'group-hover:border-zinc-300/50'
      }`} />

      {/* Timeline connector dot (visible on left side) */}
      <div className="absolute -left-14 top-8 hidden lg:flex items-center">
        <MotionDiv
          className={`w-4 h-4 rounded-full shadow-lg ${
            variant === 'dark'
              ? 'bg-zinc-500 border-4 border-zinc-800'
              : 'bg-zinc-400 border-4 border-zinc-50'
          }`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
        />
        <MotionDiv
          className={`w-10 h-0.5 ${
            variant === 'dark'
              ? 'bg-gradient-to-r from-zinc-500 to-transparent'
              : 'bg-gradient-to-r from-zinc-400 to-transparent'
          }`}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 40, opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
        />
      </div>

      <div className="relative sm:text-left flex flex-col max-w-sm z-10">
        <MotionH3
          className="font-bold text-2xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.15, duration: 0.4 }}
        >
          {data.role}
        </MotionH3>
        <MotionP
          className="text-sm font-medium"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.25, duration: 0.4 }}
        >
          {data.company} | {data.location}
        </MotionP>
        <MotionP
          className={`text-sm ${variant === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.35, duration: 0.4 }}
        >
          {data.start} - {data.end}
        </MotionP>
        <MotionP
          className={`text-sm mt-2 italic leading-relaxed ${
            variant === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.45, duration: 0.4 }}
        >
          {data.description}
        </MotionP>
      </div>

      {/* Tool badges with subtle fade-in */}
      <div className="relative flex flex-wrap gap-2 justify-center sm:justify-end max-w-xs mx-auto z-10">
        {data.tools.map((tool, toolIndex) => (
          <MotionDiv
            key={toolIndex}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: index * 0.1 + 0.5 + (toolIndex * 0.03),
              duration: 0.3,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className={`text-xs px-2 py-1 rounded-lg font-bold cursor-default ${
              variant === 'dark' ? 'bg-zinc-800 text-zinc-200': 'bg-zinc-200 text-zinc-800'
            } shadow-sm hover:shadow-md transition-shadow`}
          >
            {tool}
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}

export default WorkCard