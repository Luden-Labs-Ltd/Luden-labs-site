import { motion } from 'framer-motion';
import { SectionLayout } from '@/shared/ui/section-layout';
import { LudenCard } from '@/shared/ui/luden-card';

export function RetentionSection() {
  const cards = [
    {
      id: '1',
      title: 'RETENTION CARDS',
      description:
        'Карты удержания и вовлеченности. Инструменты для создания долгосрочных отношений с пользователями.',
      variant: 'highlight' as const,
    },
    {
      id: '2',
      title: 'Удержание',
      description:
        'Стратегии сохранения интереса пользователей. Создание ценности на каждом этапе взаимодействия.',
    },
    {
      id: '3',
      title: 'Вовлеченность',
      description:
        'Глубокое погружение и эмоциональная связь. Создание значимого опыта взаимодействия.',
    },
    {
      id: '4',
      title: 'Лояльность',
      description:
        'Построение долгосрочных отношений. Превращение пользователей в адвокатов бренда.',
    },
    {
      id: '5',
      title: 'Привычки',
      description:
        'Формирование устойчивых паттернов поведения. Интеграция продукта в повседневную жизнь.',
    },
    {
      id: '6',
      title: 'Ценность',
      description:
        'Постоянная доставка ценности пользователям. Эволюция продукта вместе с потребностями аудитории.',
    },
  ];

  return (
    <SectionLayout
      title="Retention Tower"
      subtitle="Удержание и долгосрочная вовлеченность"
      theme="retention"
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
        <h2 className="text-2xl font-bold text-retention-900 mb-4">
          Важность удержания
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Удержание пользователей критически важно для долгосрочного успеха.
          Привлечение нового пользователя стоит в 5-7 раз дороже, чем удержание
          существующего. Фокус на удержании создает устойчивую и растущую базу
          лояльных пользователей.
        </p>
      </motion.div>
    </SectionLayout>
  );
}

