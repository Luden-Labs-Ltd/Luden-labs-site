import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { ProcessedImageMetadata  } from 'vite-imagetools';

interface ProjectHeaderProps {
  title: string;
  backgroundImage?: string | ProcessedImageMetadata ;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

export function ProjectHeader({
  title,
  backgroundImage,
  gradientFrom = 'from-yellow-300',
  gradientTo = 'to-yellow-500',
  className,
}: ProjectHeaderProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        'w-full project-header-banner',
        !backgroundImage && `bg-gradient-to-r ${gradientFrom} ${gradientTo}`,
        'relative overflow-hidden',
        className
      )}
      style={backgroundStyle}
    >
      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 w-full h-full flex items-center justify-center">
        <h1
          className="text-white uppercase text-center leading-[100%] tracking-[0%] project-header-title"
          style={{
            fontFamily: "'Days One', sans-serif",
            fontWeight: 400,
          }}
        >
          {title}
        </h1>
      </div>
    </motion.div>
  );
}