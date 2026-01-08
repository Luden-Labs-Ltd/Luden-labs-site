import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/button';

interface SectionLayoutProps {
  title: string;
  subtitle?: string;
  theme: 'ludic' | 'energy' | 'space' | 'retention';
  heroImage?: string;
  children: ReactNode;
}

const themeColors = {
  ludic: {
    bg: 'bg-gradient-to-br from-ludic-50 via-ludic-100 to-ludic-200',
    text: 'text-ludic-900',
    subtitle: 'text-ludic-700',
  },
  energy: {
    bg: 'bg-gradient-to-br from-energy-50 via-energy-100 to-energy-200',
    text: 'text-energy-900',
    subtitle: 'text-energy-700',
  },
  space: {
    bg: 'bg-gradient-to-br from-space-50 via-space-100 to-space-200',
    text: 'text-space-900',
    subtitle: 'text-space-700',
  },
  retention: {
    bg: 'bg-gradient-to-br from-retention-50 via-retention-100 to-retention-200',
    text: 'text-retention-900',
    subtitle: 'text-retention-700',
  },
};

export function SectionLayout({
  title,
  subtitle,
  theme,
  heroImage,
  children,
}: SectionLayoutProps) {
  const navigate = useNavigate();
  const colors = themeColors[theme];

  return (
    <div className={`min-h-screen ${colors.bg} p-4 md:p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/map')}
            className="mb-4"
          >
            ← Назад на карту
          </Button>
          <h1 className={`text-4xl md:text-5xl font-display font-bold ${colors.text} mb-2`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-lg md:text-xl ${colors.subtitle}`}>
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Hero Image */}
        {heroImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={heroImage}
              alt={title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
