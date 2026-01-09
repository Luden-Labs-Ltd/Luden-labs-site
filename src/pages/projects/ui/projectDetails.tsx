import { ProjectHeader } from "./ProjectHeader";
import { ProjectContentSection } from "./ProjectContentSection";
import { ProjectDescriptionSection } from "./ProjectDescriptionSection";
import { ProjectNotFound } from "./ProjectNotFound";
import { Navbar } from "@/shared/ui/navbar";
import { useProjectDetail } from "../model";
import headerBg from "@/shared/assets/images/projects/yellow-orange-gradient.png?format=webp";

export function ProjectDetail() {
  const { project } = useProjectDetail();

  if (!project) {
    return <ProjectNotFound />;
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
        bannerText={project.descriptionBannerText}
        features={project.features}
      />
    </div>
  );
}
