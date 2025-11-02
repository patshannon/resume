import { IconType } from 'react-icons';
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

interface ToolkitItem {
  alt: string;
  text: string;
  icon: IconType;
}

const data: ToolkitItem[] = [
  {
    alt: 'React',
    text: 'React',
    icon: SiReact,
  },
  {
    alt: 'Node.js',
    text: 'Node.js',
    icon: SiNodedotjs,
  },
  {
    alt: 'TypeScript',
    text: 'TypeScript',
    icon: SiTypescript,
  },
  {
    alt: 'Next.js',
    text: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    alt: 'JavaScript',
    text: 'JavaScript',
    icon: SiJavascript,
  },
  {
    alt: 'HTML',
    text: 'HTML',
    icon: SiHtml5,
  },
  {
    alt: 'CSS',
    text: 'CSS',
    icon: SiCss3,
  },
  {
    alt: 'Tailwind CSS',
    text: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  {
    alt: 'Firebase',
    text: 'Firebase',
    icon: SiFirebase,
  },
  {
    alt: 'Google Cloud',
    text: 'Google Cloud',
    icon: SiGooglecloud,
  },
  {
    alt: 'Cloudflare',
    text: 'Cloudflare',
    icon: SiCloudflare,
  },
  {
    alt: 'GraphQL',
    text: 'GraphQL',
    icon: SiGraphql,
  },
  {
    alt: 'Algolia',
    text: 'Algolia',
    icon: SiAlgolia,
  },
  {
    alt: 'Webflow',
    text: 'Webflow',
    icon: SiWebflow,
  },
  {
    alt: 'Figma',
    text: 'Figma',
    icon: SiFigma,
  },
  {
    alt: 'Github',
    text: 'Github',
    icon: SiGithub,
  },
  {
    alt: 'Atlassian',
    text: 'Atlassian',
    icon: SiAtlassian,
  },
  {
    alt: 'Claude Code',
    text: 'Claude Code',
    icon: SiClaude,
  },
  {
    alt: 'OpenAI Codex',
    text: 'OpenAI Codex',
    icon: SiOpenai,
  },
];

export default data;
