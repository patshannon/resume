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

const ToolIcon = ({ data, index }: ToolIconProps) => {
  return (
      <Image src={data.src} width={44} height={44} alt={data.alt} className='bg-white h-11 w-11 rounded-lg'/>

  )
}

export default ToolIcon