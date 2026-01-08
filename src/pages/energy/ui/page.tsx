import { motion } from 'framer-motion';
import { SectionLayout } from '@/shared/ui/section-layout';
import { LudenCard } from '@/shared/ui/luden-card';

export function EnergySection() {
  const cards = [
    {
      id: '1',
      title: 'ENERGY CARDS',
      description:
        'Карты энергии и мотивации. Инструменты для понимания источников внутренней силы и драйва.',
      variant: 'highlight' as const,
    },
    {
      id: '2',
      title: 'Внутренняя мотивация',
      description:
        'Исследование внутренних драйверов: интерес, любопытство, стремление к мастерству. Основа устойчивой мотивации.',
    },
    {
      id: '3',
      title: 'Внешняя мотивация',
      description:
        'Внешние стимулы и вознаграждения. Как правильно использовать награды, не разрушая внутреннюю мотивацию.',
    },
    {
      id: '4',
      title: 'Энергия действия',
      description:
        'Преобразование мотивации в конкретные действия. Сила выбора и принятия решений.',
    },
    {
      id: '5',
      title: 'Momentum',
      description:
        'Поддержание импульса и движения вперед. Создание привычек и ритуалов для стабильного прогресса.',
    },
    {
      id: '6',
      title: 'Восстановление',
      description:
        'Циклы энергии: активность и восстановление. Важность отдыха для поддержания высокого уровня энергии.',
    },
  ];

  return (
    <SectionLayout
      title="Energy Hub"
      subtitle="Источники энергии и мотивации"
      theme="energy"
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
        <h2 className="text-2xl font-bold text-energy-900 mb-4">
          Управление энергией
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Энергия - это ключевой ресурс для достижения целей. Понимание
          источников энергии и умение управлять ею позволяет создавать
          устойчивые и эффективные системы мотивации.
        </p>
      </motion.div>
    </SectionLayout>
  );
}
