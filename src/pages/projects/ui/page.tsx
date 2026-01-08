import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "@/entities/project";
import { Button } from "@/shared/ui/button";

export function ProjectsPage() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "1",
      title: "Ludic Gaming Platform",
      description:
        "Инновационная игровая платформа с элементами геймификации и социального взаимодействия. Включает систему достижений, лидерборды и кастомизацию персонажей.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      tags: ["Gaming", "React", "Node.js", "WebSocket"],
      link: "#",
    },
    {
      id: "2",
      title: "Energy Tracker App",
      description:
        "Приложение для отслеживания энергетических показателей и оптимизации производительности. Визуализация данных в реальном времени с AI-рекомендациями.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Analytics", "AI", "TypeScript", "D3.js"],
      link: "#",
    },
    {
      id: "3",
      title: "Space Explorer VR",
      description:
        "Виртуальная реальность для исследования космоса с образовательными элементами. Интерактивные 3D-модели планет и звездных систем.",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
      tags: ["VR", "Three.js", "WebGL", "Education"],
      link: "#",
    },
    {
      id: "4",
      title: "Retention Dashboard",
      description:
        "Комплексная система аналитики удержания пользователей с предиктивными моделями и автоматизированными отчетами для бизнеса.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Analytics", "Dashboard", "React", "Python"],
      link: "#",
    },
    {
      id: "5",
      title: "Social Learning Hub",
      description:
        "Платформа для совместного обучения с элементами геймификации. Интерактивные курсы, peer-to-peer обучение и система менторства.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      tags: ["EdTech", "Social", "Vue.js", "Firebase"],
      link: "#",
    },
    {
      id: "6",
      title: "AI Content Generator",
      description:
        "Инструмент для генерации контента на основе искусственного интеллекта. Поддержка текста, изображений и видео с кастомизацией стилей.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["AI", "GPT", "Next.js", "OpenAI"],
      link: "#",
    },
  ];

  return (
    <div className='to-ludic-50 min-h-screen bg-gradient-to-br from-gray-50 via-white p-4 md:p-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-12'
        >
          <Button
            variant='ghost'
            onClick={() => navigate("/")}
            className='mb-6'
          >
            ← Назад на главную
          </Button>

          <h1 className='font-display mb-4 text-5xl font-bold text-gray-900 md:text-6xl'>
            Наши проекты
          </h1>
          <p className='max-w-3xl text-xl text-gray-600'>
            Исследуйте наши инновационные решения в области геймификации,
            аналитики и образовательных технологий
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='mb-12 grid grid-cols-2 gap-4 md:grid-cols-4'
        >
          {[
            { label: "Проектов", value: "50+" },
            { label: "Клиентов", value: "100+" },
            { label: "Стран", value: "15+" },
            { label: "Лет опыта", value: "5+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className='rounded-xl bg-white p-6 text-center shadow-md'
              whileHover={{ y: -4 }}
            >
              <div className='text-ludic-600 mb-1 text-3xl font-bold'>
                {stat.value}
              </div>
              <div className='text-sm text-gray-600'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='from-ludic-100 to-energy-100 rounded-2xl bg-gradient-to-r p-8 text-center md:p-12'
        >
          <h2 className='font-display mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
            Готовы начать свой проект?
          </h2>
          <p className='mx-auto mb-6 max-w-2xl text-lg text-gray-700'>
            Свяжитесь с нами, чтобы обсудить ваши идеи и создать что-то
            удивительное вместе
          </p>
          <Button
            variant='primary'
            onClick={() => navigate("/map")}
            className='bg-ludic-600 hover:bg-ludic-700 px-8 py-3 text-lg text-white'
          >
            Связаться с нами
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
