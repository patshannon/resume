"use client";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFirebase,
  SiGooglecloud,
  SiCloudflare,
  SiGraphql,
  SiAlgolia,
  SiWebflow,
  SiFigma,
  SiGithub,
  SiAtlassian,
  SiClaude,
  SiOpenai,
} from 'react-icons/si';

interface ToolIconProps {
  data: {
    iconName: string;
    alt: string;
    text: string;
  };
  index: number;
}

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string; 'aria-label'?: string }> } = {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFirebase,
  SiGooglecloud,
  SiCloudflare,
  SiGraphql,
  SiAlgolia,
  SiWebflow,
  SiFigma,
  SiGithub,
  SiAtlassian,
  SiClaude,
  SiOpenai,
};

const ToolIcon = ({ data }: ToolIconProps) => {
  const Icon = iconMap[data.iconName];

  if (!Icon) {
    console.error(`Icon not found: ${data.iconName}`);
    return null;
  }

  return (
    <Icon
      size={44}
      className='bg-gray-800 text-white h-11 w-11 rounded-lg p-2'
      aria-label={data.alt}
    />
  );
}

export default ToolIcon;
