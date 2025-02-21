"use client";
import { useState } from 'react';
import Image from 'next/image';
import { MotionDiv } from '../motion';

interface ToolIconProps {
  data: {
    src: string;
    alt: string;
    text: string;
  };
  index: number;
}

export default function ToolIcon({ data, index }: ToolIconProps) {
  const [showPopup, setShowPopup] = useState(false);
  const isWindowTablet = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  }
  const handleOnMouseEnter = () => {
    !isWindowTablet() && setShowPopup(true);
  };
  const handleOnMouseLeave = () => {
    !isWindowTablet() && setShowPopup(false);
  };
  const handleOnClick = () => {
    isWindowTablet() && setShowPopup(!showPopup);
  };
  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: index * 0.05
      }
    }
  };

  return (
    <MotionDiv 
      className="relative"
      variants={item}
      onClick={handleOnClick} 
      onMouseEnter={handleOnMouseEnter} 
      onMouseLeave={handleOnMouseLeave}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image 
        src={data.src} 
        alt={data.alt} 
        width="64" 
        height="64" 
        className="w-16 h-16 object-contain p-px drop-shadow-sm"
      />
      <MotionDiv 
        className={`cursor-default absolute top-0 h-full w-full flex flex-col justify-center align-center items-center bg-zinc-50/95 p-3 rounded text-sm font-semibold backdrop-blur-sm`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: showPopup ? 1 : 0,
          y: showPopup ? 0 : 10
        }}
        transition={{ duration: 0.2 }}
      >
        {data.text}
      </MotionDiv>
    </MotionDiv>
  )
}
