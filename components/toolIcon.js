"use client";
import { useState } from 'react';
import Image from 'next/image'

export default function ToolIcon({data}) {
  const [showPopup, setShowPopup] = useState(false);
  const handleOnMouseEnter = () => {
    setShowPopup(true);
  };
  const handleOnMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <Image src={data.src} alt={data.alt} width="64" height="64" className="w-16 h-16 object-contain p-px"/>
      <div className={`${showPopup?"opactiy-100":"opacity-0"} cursor-default transition-opacity absolute top-0 h-full w-full flex flex-col justify-center align-center items-center bg-zinc-50 p-3 rounded text-sm font-semibold`}>{data.text}</div>
    </div>
  )
}