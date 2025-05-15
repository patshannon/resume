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
}

const EducationCard = ({ data }: EducationCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleOnClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <MotionDiv
      onClick={handleOnClick}
      className="relative p-6 rounded-xl bg-zinc-800 text-left cursor-pointer min-h-[200px] group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {!isFlipped ? (
          <MotionDiv
            key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
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
            className="text-sm leading-relaxed text-zinc-300"
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
