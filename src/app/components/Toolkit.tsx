import data from '@/lib/toolkit';
import { MotionDiv } from '../motion';
import ToolIcon from './ToolIcon';

const Toolkit = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <MotionDiv
      className="flex flex-wrap gap-3 justify-center max-w-lg mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {data.map((icon, index) => (
        <ToolIcon key={icon.alt} data={icon} index={index} />
      ))}
    </MotionDiv>
  );
};

export default Toolkit;
