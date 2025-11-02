"use client";
import { IconType } from 'react-icons';

interface ToolIconProps {
  data: {
    icon: IconType;
    alt: string;
    text: string;
  };
  index: number;
}

const ToolIcon = ({ data }: ToolIconProps) => {
  const Icon = data.icon;

  return (
    <Icon
      size={44}
      className='bg-white h-11 w-11 rounded-lg p-2'
      aria-label={data.alt}
    />
  );
}

export default ToolIcon;
