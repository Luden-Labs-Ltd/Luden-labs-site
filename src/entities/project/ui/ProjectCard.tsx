import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      className='overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl'
      whileHover={{
        y: -8,
      }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      {/* Image */}
      <div className='relative h-48 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='h-full w-full object-cover transition-transform duration-300 hover:scale-110'
        />
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='font-display mb-2 text-xl font-bold text-gray-900'>
          {title}
        </h3>
        <p className='mb-4 line-clamp-3 text-sm text-gray-600'>{description}</p>

        {/* Tags */}
        <div className='mb-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='from-ludic-100 to-ludic-200 text-ludic-800 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-medium'
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-ludic-600 hover:text-ludic-700 inline-flex items-center text-sm font-medium transition-colors'
          >
            Подробнее →
          </a>
        )}
      </div>
    </motion.div>
  );
}
