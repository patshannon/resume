'use client'
import { useState } from 'react';
export default function EducationCard({data}){
  const [isFlipped, setIsFlipped] = useState(false);
  const handleOnClick = () => {
    setIsFlipped(!isFlipped);
  }
  return (
    <div onClick={handleOnClick} className="relative p-4 rounded bg-zinc-800 text-left lg:hover:outline-1 lg:hover:outline lg:hover:outline-zinc-50 cursor-pointer">
      <div className={`relative ${isFlipped?"opacity-0":"opacity-100"} transition-opacity duration-500`}>
        <div className="text-lg font-semibold mb-1">{data.title}</div>
        <div className="text-sm font-light">{data.school}</div>
        <div className="text-sm font-light">{data.location}</div>
        <div className="text-sm font-light">{data.date}</div>
      </div>
      <div className={`absolute top-0 left-0 p-4 ${isFlipped?"opacity-100":"opacity-0"} transition-opacity duration-500`}>
        <div className="">{data.description}</div>
      </div>
    </div>
  )
}