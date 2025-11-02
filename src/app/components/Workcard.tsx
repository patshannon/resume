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
  // Alternate slide direction based on index
  const isEven = index % 2 === 0;
  const slideFrom = isEven ? -100 : 100;

  return (
    <MotionDiv
      initial={{
        opacity: 0,
        x: slideFrom,
        rotateY: isEven ? -15 : 15,
        scale: 0.9
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        rotateY: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{
        scale: 1.02,
        rotateY: isEven ? 2 : -2,
        transition: { duration: 0.3 }
      }}
      className="relative flex flex-col sm:flex-row gap-5 sm:gap-16 items-start max-w-3xl group p-6 rounded-xl overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity'
      }}
    >
      {/* Animated gradient border effect */}
      <MotionDiv
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, rgba(120,120,120,0.3), rgba(200,200,200,0.3), rgba(120,120,120,0.3))',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Card background with hover effect */}
      <div className="absolute inset-0 bg-zinc-50/0 group-hover:bg-zinc-50/50 transition-colors duration-300 rounded-xl" />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-300/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      {/* Timeline connector dot (visible on left side) */}
      <div className="absolute -left-14 top-8 hidden lg:flex items-center">
        <MotionDiv
          className="w-4 h-4 rounded-full bg-zinc-400 border-4 border-zinc-50 shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
        />
        <MotionDiv
          className="w-10 h-0.5 bg-gradient-to-r from-zinc-400 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 40, opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
        />
      </div>

      <div className="relative sm:text-left flex flex-col max-w-sm z-10">
        <MotionH3
          className="font-bold text-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.2 }}
        >
          {data.role}
        </MotionH3>
        <MotionP
          className="text-sm font-medium"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 100 }}
        >
          {data.company} | {data.location}
        </MotionP>
        <MotionP
          className="text-sm text-zinc-500"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 100 }}
        >
          {data.start} - {data.end}
        </MotionP>
        <MotionP
          className="text-sm mt-2 italic text-zinc-600 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          {data.description}
        </MotionP>
      </div>

      {/* Enhanced tool badges with spring animation */}
      <div className="relative flex flex-wrap gap-2 justify-center sm:justify-end max-w-xs mx-auto z-10">
        {data.tools.map((tool, toolIndex) => (
          <MotionDiv
            key={toolIndex}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -180
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
            transition={{
              delay: index * 0.15 + 0.6 + (toolIndex * 0.05),
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
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