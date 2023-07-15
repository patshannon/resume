export function Workcard({data}){
  return (
    <div className="flex flex-row gap-16 justify-center align-center items-center max-w-3xl">
      <div className="text-left flex flex-col w-">
        <h3 className="font-bold text-2xl">{data.role}</h3>
        <p className="text-sm">{data.company} | {data.location}</p>
        <p className="text-sm">{data.start} - {data.end}{` (${data.duration})`}</p>
        <p className="text-sm mt-2 italic">{data.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-end max-w-xs">
        {data.tools.map(tool => (
          <span className="text-xs bg-zinc-800 px-2 py-1 rounded-lg text-zinc-200 font-bold">{tool}</span>
        ))}
      </div>
    </div>
  );
}