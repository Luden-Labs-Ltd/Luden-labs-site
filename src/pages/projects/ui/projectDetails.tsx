import { useParams } from "react-router-dom";
import { ProjectHeader } from "@/shared/ui/project-header";
import { ProjectContentSection } from "@/shared/ui/project-content-section";
import { ProjectDescriptionSection } from "@/shared/ui/project-description-section";
import { Navbar } from "@/shared/ui/navbar";
import headerBg from "@/shared/assets/images/projects/yellow-orange-gradient.png?format=webp";

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();

  // Временные данные для первого проекта (LUDEN CARDS)
  // В будущем это будет загружаться из API или конфига
  const projectData = {
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
    },
  };

  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className='min-h-screen bg-white'>
        <Navbar />
        <div className='flex min-h-[calc(100vh-4rem)] items-center justify-center'>
          <div className='text-center'>
            <h1 className='mb-4 text-2xl font-bold'>Проект не найден</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Навигация */}
      <Navbar />

      {/* Заголовок с фоновым изображением */}
      <ProjectHeader title={project.title} backgroundImage={headerBg} />

      {/* Контентная секция */}
      <ProjectContentSection image={project.image} imageAlt={project.imageAlt}>
        {project.paragraphs.map((paragraph, index) => (
          <p key={index} className='project-content-text'>
            {paragraph}
          </p>
        ))}
      </ProjectContentSection>

      {/* Секция ОПИСАНИЕ */}
      <ProjectDescriptionSection
        title='ОПИСАНИЕ'
        bannerText='КАРТОЧНЫЙ ФОРМАТ ОБЕСПЕЧИВАЕТ СКОРОСТЬ ВЗАИМОДЕЙСТВИЯ, МОТИВАЦИЮ К ИЗУЧЕНИЮ ТЕМЫ И ЭЛЕМЕНТ СОРЕВНОВАНИЯ, КОТОРЫЙ ПОВЫШАЕТ ВОВЛЕЧЁННОСТЬ.'
        features={[
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
        ]}
      />
    </div>
  );
}
