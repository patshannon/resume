export function Workcard({data}){
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-16 items-start max-w-3xl">
      <div className="sm:text-left flex flex-col max-w-sm">
        <h3 className="font-bold text-2xl">{data.role}</h3>
        <p className="text-sm">{data.company} | {data.location}</p>
        <p className="text-sm">{data.start} - {data.end}</p>
        <p className="text-sm mt-2 italic">{data.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center sm:justify-end max-w-xs mx-auto">
        {data.tools.map(tool => (
          <span className="text-xs bg-zinc-800 px-2 py-1 rounded-lg text-zinc-200 font-bold">{tool}</span>
        ))}
      </div>
    </div>
  );
}