import { SECTIONS } from '@/shared/constants/section'
import type { IslandPoint } from '@/shared/types/theme'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Modal } from '@/shared/ui/modal'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Sample data for island points (can be replaced with real data)
  const ISLAND_POINTS: IslandPoint[] = [
  { id: '1', title: 'Ludic Zone', description: 'Зона игровых механик', x: 25, y: 30, theme: 'ludic' },
  { id: '2', title: 'Energy Hub', description: 'Центр энергии', x: 50, y: 45, theme: 'energy' },
  { id: '3', title: 'Space Station', description: 'Космическая станция', x: 70, y: 25, theme: 'space' },
  { id: '4', title: 'Retention Tower', description: 'Башня удержания', x: 60, y: 65, theme: 'retention' },
];

const themeColors = {
  ludic: 'bg-ludic-500',
  energy: 'bg-energy-500',
  space: 'bg-space-500',
  retention: 'bg-retention-500',
};

export function IslandMapPage() {
  const [selectedPoint, setSelectedPoint] = useState<IslandPoint | null>(null);
  const navigate = useNavigate();

  const handlePointClick = (point: IslandPoint) => {
    setSelectedPoint(point);
  };

  const handleNavigateToSection = () => {
    if (selectedPoint) {
      const section = SECTIONS.find((s) => s.theme === selectedPoint.theme);
      if (section) {
        navigate(section.path);
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-blue-50 overflow-hidden">
      {/* Back button */}
      <Button
        variant="ghost"
        className="absolute top-4 left-4 z-10"
        onClick={() => navigate('/')}
      >
        ← Назад
      </Button>

      {/* Title */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <motion.h1
          className="text-4xl font-display font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Карта острова
        </motion.h1>
      </div>

      {/* Map container */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
        {/* Island background (can be replaced with real image) */}
        <motion.div
          className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Island silhouette */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 800 600"
              className="w-full h-full opacity-30"
              fill="none"
            >
              <path
                d="M 100 400 Q 150 250 300 300 T 500 250 Q 600 300 650 350 Q 700 400 650 450 Q 550 500 400 480 Q 250 460 150 450 Q 100 430 100 400 Z"
                fill="#2d5016"
                stroke="#1a3009"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Points on map */}
          {ISLAND_POINTS.map((point) => (
            <motion.div
              key={point.id}
              className={`interactive-point ${themeColors[point.theme]} shadow-lg`}
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + ISLAND_POINTS.indexOf(point) * 0.1 }}
              whileHover={{ scale: 1.3 }}
              onClick={() => handlePointClick(point)}
            >
              {/* Pulsing effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-current opacity-50"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          ))}

          {/* Clouds */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`cloud-${i}`}
              className="absolute w-20 h-10 bg-white/50 rounded-full blur-sm"
              style={{
                top: `${10 + i * 15}%`,
                left: `${-20 + i * 10}%`,
              }}
              animate={{
                x: ['0%', '120vw'],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal for selected point */}
      <Modal
        isOpen={!!selectedPoint}
        onClose={() => setSelectedPoint(null)}
        title={selectedPoint?.title}
        size="md"
      >
        {selectedPoint && (
          <div className="space-y-4">
            <p className="text-gray-700">{selectedPoint.description}</p>
            <div className="flex gap-3">
              <Button
                theme={selectedPoint.theme}
                onClick={handleNavigateToSection}
                fullWidth
              >
                Исследовать
              </Button>
              <Button
                variant="secondary"
                onClick={() => setSelectedPoint(null)}
              >
                Закрыть
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Sections panel at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className="flex gap-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {SECTIONS.map((section) => (
            <Card
              key={section.id}
              variant="glass"
              hover
              onClick={() => navigate(section.path)}
              className="cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-full ${themeColors[section.theme]} mb-2`} />
              <p className="text-sm font-medium text-center">{section.title}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}