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
  {
    /* bulding hover state */
  }
  const [isHovered, setIsHovered] = useState(false);

  {
    /* bulding hover state's functions */
  }
  const mouseOn = () => {
    setIsHovered(true);
  };

  const mouseOut = () => {
    setIsHovered(false);
  };
  {
    /* bulding hover state's functions */
  }

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
        className={`absolute z-100 flex aspect-square w-15 cursor-pointer items-center justify-center rounded-full border-1 text-3xl opacity-[90%] backdrop-blur-sm transition-transform duration-400 hover:scale-120 focus:scale-120`}
        style={{ left: x, top: y }}
      ></button>
    </div>
  );
}
