import { motion } from 'framer-motion';
import { SectionLayout } from '@/shared/ui/section-layout';
import { LudenCard } from '@/shared/ui/luden-card';

export function LudicSection() {
  const cards = [
    {
      id: '1',
      title: 'LUDEN CARDS',
      description:
        'Система игровых карт для геймификации процессов. Каждая карта представляет игровую механику или элемент взаимодействия с пользователем.',
      variant: 'highlight' as const,
    },
    {
      id: '2',
      title: 'Game Mechanics',
      description:
        'Основы игровой механики: правила, цели, вознаграждения. Создание увлекательного опыта через игровые элементы.',
    },
    {
      id: '3',
      title: 'Rewards System',
      description:
        'Система наград и достижений. Мотивация пользователей через понятные и достижимые цели.',
    },
    {
      id: '4',
      title: 'Progress Tracking',
      description:
        'Отслеживание прогресса и визуализация достижений. Пользователь видит свой путь и результаты.',
    },
    {
      id: '5',
      title: 'Challenges',
      description:
        'Система челленджей и испытаний. Создание интересных задач различной сложности.',
    },
    {
      id: '6',
      title: 'Leaderboards',
      description:
        'Таблицы лидеров и соревновательные элементы. Социальная составляющая геймификации.',
    },
  ];

  return (
    <SectionLayout
      title="Ludic Zone"
      subtitle="Игровые механики и развлекательные элементы"
      theme="ludic"
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

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-6 bg-white/50 rounded-lg backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold text-ludic-900 mb-4">
          О Ludic подходе
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Ludic (от лат. ludus - игра) - подход к проектированию, основанный на
          игровых принципах. Мы используем игровые механики для создания
          увлекательного и мотивирующего пользовательского опыта.
        </p>
      </motion.div>
    </SectionLayout>
  );
}
