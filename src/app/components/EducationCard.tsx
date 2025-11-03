'use client'
import { useState } from 'react';
import { MotionDiv, AnimatePresence } from '../motion';

interface EducationCardProps {
  data: {
    title: string;
    school: string;
    location: string;
    date: string;
    description: string;
  };
  variant?: 'dark' | 'light';
  index?: number;
}

const EducationCard = ({ data, variant = 'dark', index = 0 }: EducationCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleOnClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <MotionDiv
      onClick={handleOnClick}
      className="relative p-6 rounded-xl text-left cursor-pointer min-h-[200px] group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.02),transparent_50%)]" />
      </div>
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <MotionDiv
            key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full relative z-10"
          >
            <MotionDiv
              className="text-lg font-semibold mb-2 bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-transparent"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
            >
              {data.title}
            </MotionDiv>
            <MotionDiv
              className="text-sm text-zinc-300"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {data.school}
            </MotionDiv>
            <MotionDiv
              className="text-sm text-zinc-400"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {data.location}
            </MotionDiv>
            <MotionDiv
              className="text-sm text-zinc-400"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {data.date}
            </MotionDiv>
            <MotionDiv
              className="absolute bottom-4 right-4 text-xs text-zinc-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Click to learn more
            </MotionDiv>
          </MotionDiv>
        ) : (
          <MotionDiv
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm leading-relaxed text-zinc-300 relative z-10"
          >
            {data.description}
            <MotionDiv
              className="absolute bottom-4 right-4 text-xs text-zinc-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Click to go back
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/5 to-transparent rounded-xl pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
    </MotionDiv>
  );
};

export default EducationCard;
