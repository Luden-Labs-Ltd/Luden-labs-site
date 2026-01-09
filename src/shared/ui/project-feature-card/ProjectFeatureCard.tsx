import { motion } from "framer-motion";
import clsx from "clsx";

interface ProjectFeatureCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export function ProjectFeatureCard({
  number,
  title,
  description,
  className,
}: ProjectFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className={clsx("project-feature-card", className)}
    >
      <div className='relative rounded-[30px] border border-yellow-400 bg-white p-6 md:p-8 lg:p-10'>
        {/* Большой номер слева, частично перекрывающий рамку */}
        <div className='absolute top-0 bottom-0 -left-4 flex items-center md:-left-6 lg:-left-8'>
          <span className='project-feature-number'>{number}</span>
        </div>

        {/* Контент */}
        <div className='ml-8 md:ml-12 lg:ml-16'>
          <h3 className='project-feature-title mb-3 md:mb-4'>{title}</h3>
          <p className='project-feature-description'>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
