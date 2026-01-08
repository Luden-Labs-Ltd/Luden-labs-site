import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { ProcessedImageMetadata } from 'vite-imagetools';

interface ProjectDescriptionBannerProps {
  text: string;
  backgroundImage?: string | ProcessedImageMetadata;
  className?: string;
}

export function ProjectDescriptionBanner({
  text,
  backgroundImage,
  className,
}: ProjectDescriptionBannerProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={clsx(
        'w-full project-description-banner',
        !backgroundImage && 'bg-gradient-to-r from-yellow-300 to-yellow-500',
        'relative overflow-hidden',
        className
      )}
      style={backgroundStyle}
    >
      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10">
        <p className="project-description-banner-text text-center">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

