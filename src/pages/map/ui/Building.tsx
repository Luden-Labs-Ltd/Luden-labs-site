import { useState } from "react";

interface BuildingProps {
  src: string;
  alt?: string;
  x: number;
  y: number;
  projectId?: number;
  onClick?: () => void;
}

export function Building({ src, alt = "", x, y, onClick }: BuildingProps) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseOn = () => {
    setIsHovered(true);
  };

  const mouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className='absolute inset-0'>
      {/* bulding's image */}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-opacity duration-400 ${isHovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* building's button */}
      <button
        onClick={onClick}
        onMouseEnter={mouseOn}
        onMouseLeave={mouseOut}
        className={`absolute z-100 flex aspect-square w-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full `}
        style={{ left: `${x}%`, top: `${y}%` }}
      ></button>
    </div>
  );
}
