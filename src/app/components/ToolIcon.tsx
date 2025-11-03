"use client";
import { useState } from 'react';
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
import { MotionDiv } from '../motion';

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

// Brand gradient colors for each tool - using gradients for visual depth
const iconGradients: { [key: string]: { from: string; to: string; glow: string; shadow: string } } = {
  SiReact: { from: '#61DAFB', to: '#4FC3F7', glow: '#61DAFB', shadow: 'rgba(97, 218, 251, 0.4)' },
  SiTypescript: { from: '#3178C6', to: '#235A97', glow: '#3178C6', shadow: 'rgba(49, 120, 198, 0.4)' },
  SiNextdotjs: { from: '#000000', to: '#1A1A1A', glow: '#666666', shadow: 'rgba(102, 102, 102, 0.3)' },
  SiNodedotjs: { from: '#339933', to: '#2E7D32', glow: '#339933', shadow: 'rgba(51, 153, 51, 0.4)' },
  SiTailwindcss: { from: '#06B6D4', to: '#0891B2', glow: '#06B6D4', shadow: 'rgba(6, 182, 212, 0.4)' },
  SiClaude: { from: '#D97757', to: '#C46245', glow: '#D97757', shadow: 'rgba(217, 119, 87, 0.4)' },
  SiOpenai: { from: '#10A37F', to: '#0D8F6E', glow: '#10A37F', shadow: 'rgba(16, 163, 127, 0.4)' },
  SiJavascript: { from: '#F7DF1E', to: '#F9C406', glow: '#F7DF1E', shadow: 'rgba(247, 223, 30, 0.4)' },
  SiGraphql: { from: '#E10098', to: '#C90182', glow: '#E10098', shadow: 'rgba(225, 0, 152, 0.4)' },
  SiGooglecloud: { from: '#4285F4', to: '#3367D6', glow: '#4285F4', shadow: 'rgba(66, 133, 244, 0.4)' },
  SiFirebase: { from: '#FFCA28', to: '#FFB300', glow: '#FFCA28', shadow: 'rgba(255, 202, 40, 0.4)' },
  SiGithub: { from: '#181717', to: '#24292E', glow: '#666666', shadow: 'rgba(102, 102, 102, 0.3)' },
  SiFigma: { from: '#F24E1E', to: '#DC3D09', glow: '#F24E1E', shadow: 'rgba(242, 78, 30, 0.4)' },
  SiHtml5: { from: '#E34F26', to: '#D03A17', glow: '#E34F26', shadow: 'rgba(227, 79, 38, 0.4)' },
  SiCss3: { from: '#1572B6', to: '#0E5A8A', glow: '#1572B6', shadow: 'rgba(21, 114, 182, 0.4)' },
  SiCloudflare: { from: '#F38020', to: '#E6690B', glow: '#F38020', shadow: 'rgba(243, 128, 32, 0.4)' },
  SiWebflow: { from: '#4353FF', to: '#2E3FFF', glow: '#4353FF', shadow: 'rgba(67, 83, 255, 0.4)' },
  SiAtlassian: { from: '#0052CC', to: '#003D99', glow: '#0052CC', shadow: 'rgba(0, 82, 204, 0.4)' },
  SiAlgolia: { from: '#5468FF', to: '#3D56FF', glow: '#5468FF', shadow: 'rgba(84, 104, 255, 0.4)' },
};

const ToolIcon = ({ data, index }: ToolIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[data.iconName];
  const gradient = iconGradients[data.iconName] || { 
    from: '#52525B', 
    to: '#3F3F46', 
    glow: '#52525B',
    shadow: 'rgba(82, 82, 91, 0.4)'
  };

  if (!Icon) {
    console.error(`Icon not found: ${data.iconName}`);
    return null;
  }

  return (
    <MotionDiv
      className="relative group cursor-default"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.03,
        ease: [0.23, 1, 0.32, 1] // Custom easing for smoother animation
      }}
      whileHover={{ 
        y: -3,
        zIndex: 10,
        transition: { duration: 0.25, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ willChange: 'transform' }}
    >
      {/* Animated glow effect - hidden on hover */}
      <MotionDiv 
        className="absolute inset-0 rounded-2xl blur-2xl pointer-events-none"
        style={{ 
          background: gradient.glow,
        }}
        animate={{
          opacity: isHovered ? 0 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Main icon container with gradient - hidden on hover */}
      <MotionDiv
        className="relative h-16 w-16 rounded-2xl p-3.5 flex items-center justify-center border border-white/10 backdrop-blur-sm overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
          boxShadow: `0 10px 25px -8px ${gradient.shadow}`,
        }}
        animate={{
          opacity: isHovered ? 0 : 1,
          borderColor: 'rgba(255, 255, 255, 0.1)',
        }}
        transition={{ duration: 0.25 }}
      >
        {/* Animated shimmer effect */}
        <MotionDiv
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
          }}
          animate={{
            x: isHovered ? ['0%', '200%'] : '0%',
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
        
        {/* Inner shine effect for depth */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-white/5 to-transparent pointer-events-none" />
        
        {/* Subtle top highlight */}
        <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
        
        {/* Bottom shadow for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        
        {/* Icon - no scaling to prevent blur */}
        <div className="relative z-10">
          <Icon
            size={36}
            className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] filter"
            aria-label={data.alt}
          />
        </div>
      </MotionDiv>

      {/* Tooltip text - replaces icon on hover */}
      <MotionDiv
        className="absolute inset-0 flex items-center justify-center whitespace-nowrap pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ 
          duration: 0.25,
          ease: "easeOut"
        }}
      >
        {/* Text only - no background */}
        <span className="text-zinc-900 text-base font-semibold tracking-wide">
          {data.text}
        </span>
      </MotionDiv>
    </MotionDiv>
  );
}

export default ToolIcon;
