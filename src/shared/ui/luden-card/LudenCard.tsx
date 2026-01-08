import { motion } from 'framer-motion';

interface LudenCardProps {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'highlight';
  className?: string;
}

export function LudenCard({
  title,
  description,
  image,
  children,
  variant = 'default',
  className = '',
}: LudenCardProps) {
  return (
    <motion.div
      className={`
        rounded-lg overflow-hidden shadow-md
        ${variant === 'highlight' ? 'bg-amber-200 border-2 border-amber-400' : 'bg-amber-100 border border-amber-300'}
        ${className}
      `}
      whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className={`p-3 ${variant === 'highlight' ? 'bg-amber-300' : 'bg-amber-200'} border-b border-amber-400`}>
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
          {title}
        </h3>
      </div>

      {/* Image */}
      {image && (
        <div className="p-4 bg-white">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded"
          />
        </div>
      )}

      {/* Description */}
      {description && (
        <div className="px-4 py-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      )}

      {/* Children content */}
      {children && (
        <div className="px-4 pb-4">
          {children}
        </div>
      )}
    </motion.div>
  );
}

