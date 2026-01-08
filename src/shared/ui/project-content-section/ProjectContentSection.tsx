import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ProjectContentSectionProps {
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
}

export function ProjectContentSection({
  children,
  image,
  imageAlt = 'Project image',
  className,
}: ProjectContentSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={clsx(
        'max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16',
        className
      )}
    >
      <div className="bg-white rounded-[30px] project-content-border overflow-hidden p-8 md:p-10 lg:p-12 xl:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Текстовая часть */}
          <div className="space-y-5 text-gray-900 text-left">
            {children}
          </div>

          {/* Изображение */}
          {image && (
            <div className="flex justify-center lg:justify-end items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full max-w-lg h-auto object-contain"
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

