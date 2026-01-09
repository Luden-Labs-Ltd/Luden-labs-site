import type { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ProjectContentSectionProps {
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
}

export function ProjectContentSection({
  children,
  image,
  imageAlt = "Project image",
  className,
}: ProjectContentSectionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
      }}
      className={clsx(
        "mx-auto max-w-[1920px] px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16",
        className,
      )}
    >
      <div className='project-content-border overflow-hidden rounded-[30px] bg-white p-8 md:p-10 lg:p-12 xl:p-16'>
        <div className='grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12'>
          {/* Текстовая часть */}
          <div className='space-y-5 text-left text-gray-900'>{children}</div>

          {/* Изображение */}
          {image && (
            <div className='flex items-start justify-center lg:justify-end'>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
                className='relative'
              >
                <img
                  src={image}
                  alt={imageAlt}
                  className='h-auto w-full max-w-lg object-contain'
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
