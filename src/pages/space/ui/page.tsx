import { motion } from 'framer-motion';
import { SectionLayout } from '@/shared/ui/section-layout';
import { LudenCard } from '@/shared/ui/luden-card';

export function SpaceSection() {
  const cards = [
    {
      id: '1',
      title: 'SPACE CARDS',
      description:
        'Карты исследования и открытий. Пространство возможностей и новых горизонтов для роста.',
      variant: 'highlight' as const,
    },
    {
      id: '2',
      title: 'Исследование',
      description:
        'Открытие нового и неизведанного. Создание условий для экспериментов и инноваций.',
    },
    {
      id: '3',
      title: 'Границы возможного',
      description:
        'Расширение границ и преодоление ограничений. Пространство для роста и развития.',
    },
    {
      id: '4',
      title: 'Открытия',
      description:
        'Путь к знаниям через практику и эксперименты. Ценность каждого нового открытия.',
    },
    {
      id: '5',
      title: 'Адаптация',
      description:
        'Гибкость и способность к изменениям. Навигация в неопределенности и новых условиях.',
    },
    {
      id: '6',
      title: 'Масштабирование',
      description:
        'Рост и экспансия в новые области. Стратегии масштабирования успешных практик.',
    },
  ];

  return (
    <SectionLayout
      title="Space Station"
      subtitle="Пространство для исследований и открытий"
      theme="space"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <LudenCard
              title={card.title}
              description={card.description}
              variant={card.variant}
            />
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-6 bg-white/50 rounded-lg backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold text-space-900 mb-4">
          О пространстве возможностей
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Пространство - это метафора для исследования и роста. Как космос
          предлагает бесконечные возможности для открытий, так и дизайн-пространство
          открывает новые горизонты для инноваций и развития.
        </p>
      </motion.div>
    </SectionLayout>
  );
}

