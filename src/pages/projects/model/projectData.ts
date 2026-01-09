export interface ProjectDetailData {
  title: string;
  gradientFrom: string;
  gradientTo: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  descriptionBannerText: string;
  features: Array<{
    number: number;
    title: string;
    description: string;
  }>;
}

// Временные данные для проектов
// В будущем это будет загружаться из API или конфига
export const projectDetailData: Record<string, ProjectDetailData> = {
  "1": {
    title: "LUDEN CARDS",
    gradientFrom: "from-yellow-300",
    gradientTo: "to-yellow-500",
    paragraphs: [
      "Добро пожаловать в уникальный игровой опыт, оживляющий историю! Наши исторические карточные игры созданы для обучения, развлечения и вовлечения игроков всех возрастов.",
      "Увлекаетесь ли вы историей стран, спортивных клубов, городов или выдающихся личностей, наши игры предлагают увлекательное путешествие во времени.",
    ],
    image:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop",
    imageAlt: "Hands holding historical cards",
    descriptionBannerText:
      "КАРТОЧНЫЙ ФОРМАТ ОБЕСПЕЧИВАЕТ СКОРОСТЬ ВЗАИМОДЕЙСТВИЯ, МОТИВАЦИЮ К ИЗУЧЕНИЮ ТЕМЫ И ЭЛЕМЕНТ СОРЕВНОВАНИЯ, КОТОРЫЙ ПОВЫШАЕТ ВОВЛЕЧЁННОСТЬ.",
    features: [
      {
        number: 1,
        title: "ОБРАЗОВАТЕЛЬНОЕ РАЗВЛЕЧЕНИЕ",
        description:
          "Изучайте историю, весело проводя время с семьей и друзьями",
      },
      {
        number: 2,
        title: "СТРАТЕГИЧЕСКОЕ МЫШЛЕНИЕ",
        description:
          "Развивайте стратегическое мышление, выявляя и сравнивая исторические события",
      },
      {
        number: 3,
        title: "ИНТЕРЕСНО ДЛЯ ВСЕХ ВОЗРАСТОВ",
        description:
          "Подходит для игроков всех возрастов, что делает его идеальным для семейных игровых вечеров, учебных занятий и многого другого.",
      },
    ],
  },
};
