import { motion } from "framer-motion";
import clsx from "clsx";
import type { ProcessedImageMetadata } from "vite-imagetools";

interface ProjectHeaderProps {
  title: string;
  backgroundImage?: string | ProcessedImageMetadata;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

export function ProjectHeader({
  title,
  backgroundImage,
  gradientFrom = "from-yellow-300",
  gradientTo = "to-yellow-500",
  className,
}: ProjectHeaderProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={clsx(
        "flex h-[clamp(106px,22vh,300px)] min-h-[clamp(106px,22vh,300px)] w-full items-center justify-center",
        !backgroundImage && `bg-gradient-to-r ${gradientFrom} ${gradientTo}`,
        "relative overflow-hidden",
        className,
      )}
      style={backgroundStyle}
    >
      <div className='relative z-10 mx-auto flex h-full w-full max-w-[1920px] items-center justify-center px-4 md:px-8 lg:px-12'>
        <h1 className='font-days-one inline-block max-w-full text-center text-[clamp(45px,12vw,196px)] leading-[100%] font-normal tracking-[0%] text-white uppercase sm:whitespace-nowrap'>
          {title}
        </h1>
      </div>
    </motion.div>
  );
}
