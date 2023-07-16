import ToolIcon from './toolIcon';
import data from '../data/toolkit'

export default function Toolkit() {
  return (
    <div className="flex flex-wrap gap-3 justify-center max-w-lg mx-auto">
      {data.map(icon => (
        <ToolIcon data={icon} />
      ))}
    </div>
  );
}
