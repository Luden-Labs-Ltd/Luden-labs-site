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

  {/* bulding hover state */}
  const [isHovered, setIsHovered] = useState(false);

  {/* bulding hover state's functions */}
  const mouseOn = () => {
    setIsHovered(true);
  }

  const mouseOut = () => {
    setIsHovered(false);
  }
  {/* bulding hover state's functions */}

  return (
    <div className='absolute inset-0'>

      {/* bulding's image */}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-400`}
      />

      {/* building's button */}
      <button
        onClick={onClick}
        onMouseEnter={mouseOn}
        onMouseLeave={mouseOut}
        className={`z-100 w-15 aspect-square backdrop-blur-sm border-1 hover:scale-120 focus:scale-120 rounded-full absolute opacity-[90%] transition-transform duration-400 cursor-pointer text-3xl flex justify-center items-center`}
        style={{ left: x, top: y }}
      ></button>

    </div>
  );
}
