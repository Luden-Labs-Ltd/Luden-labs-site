import { motion } from 'framer-motion';

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
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-ludic-100 to-ludic-200 text-ludic-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-ludic-600 hover:text-ludic-700 font-medium text-sm transition-colors"
          >
            Подробнее →
          </a>
        )}
      </div>
    </motion.div>
  );
}