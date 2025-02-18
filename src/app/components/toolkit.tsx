import data from '@/lib/toolkit';
import ToolIcon from './toolIcon';

export default function Toolkit() {
  return (
    <div className="flex flex-wrap gap-3 justify-center max-w-lg mx-auto">
      {data.map(icon => (
        <ToolIcon key={icon.alt} data={icon} />
      ))}
    </div>
  );
}
