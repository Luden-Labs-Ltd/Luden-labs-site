import { ProjectHeader } from "./ProjectHeader";
import { ProjectContentSection } from "./ProjectContentSection";
import { ProjectDescriptionSection } from "./ProjectDescriptionSection";
import { ProjectNotFound } from "./ProjectNotFound";
import { ProjectFooter } from "./ProjectFooter";
import { ProjectFAQSection } from "./ProjectFAQSection";
import { ProjectHowToPlaySection } from "./ProjectHowToPlaySection";
import { ProjectSpecialFeaturesSection } from "./ProjectSpecialFeaturesSection";
import { ProjectTargetAudienceSection } from "./ProjectTargetAudienceSection";
import { Navbar } from "@/shared/ui/navbar";
import { ProjectAboutSection } from "./ProjectAboutSection";
import { useProjectDetail } from "../model";
import headerBg from "@/shared/assets/images/pages/projects/gradients/yellow-orange-gradient.png?format=webp";

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
          <p key={index} className='font-days-one font-normal text-[30px] leading-[100%] tracking-[0%] text-[#5e6061] text-left'>
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

      {/* Секция ЧТО В ЭТОМ ОСОБЕННОГО */}
      {project.specialFeatures && project.specialFeatures.length > 0 && (
        <ProjectSpecialFeaturesSection features={project.specialFeatures} />
      )}

      {/* Секция КОМУ ЭТО ПОДХОДИТ */}
      {project.targetAudience && project.targetAudience.length > 0 && (
        <ProjectTargetAudienceSection
          cards={project.targetAudience.map((item) => ({
            icon: item.icon,
            text: item.text,
            gradient: item.gradient,
          }))}
        />
      )}

      {/* Секция КАК ИГРАТЬ */}
      {project.howToPlay && project.howToPlay.length > 0 && (
        <ProjectHowToPlaySection cards={project.howToPlay} />
      )}

      {/* Секция FAQ */}
      {project.faq && project.faq.length > 0 && (
        <ProjectFAQSection
          items={project.faq}
          bannerBackgroundImage={headerBg}
        />
      )}

      {/* Блок About Hero */}
      <ProjectAboutSection />

      {/* Футер */}
      <ProjectFooter backgroundColor={project.footerBackgroundColor} />
    </div>
  );
}
