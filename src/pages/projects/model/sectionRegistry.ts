// Регистр компонентов секций проекта
import { ProjectHeader } from "../ui/ProjectHeader";
import { ProjectContentSection } from "../ui/ProjectContentSection";
import { ProjectDescriptionSection } from "../ui/ProjectDescriptionSection";
import { ProjectHowToPlaySection } from "../ui/ProjectHowToPlaySection";
import { ProjectSpecialFeaturesSection } from "../ui/ProjectSpecialFeaturesSection";
import { ProjectTargetAudienceSection } from "../ui/ProjectTargetAudienceSection";
import { ProjectFAQSection } from "../ui/ProjectFAQSection";
import { ProjectAboutSection } from "../ui/ProjectAboutSection";
import { ProjectFooter } from "../ui/ProjectFooter";

// Регистр: тип секции → компонент
export const SECTION_REGISTRY = {
  header: ProjectHeader,
  content: ProjectContentSection,
  description: ProjectDescriptionSection,
  howToPlay: ProjectHowToPlaySection,
  specialFeatures: ProjectSpecialFeaturesSection,
  targetAudience: ProjectTargetAudienceSection,
  faq: ProjectFAQSection,
  about: ProjectAboutSection,
  footer: ProjectFooter,
} as const;

export type SectionType = keyof typeof SECTION_REGISTRY;

// Проверка существования компонента для секции
export function hasSectionComponent(type: string): type is SectionType {
  return type in SECTION_REGISTRY;
}

// Получить компонент секции по типу
export function getSectionComponent(type: SectionType) {
  return SECTION_REGISTRY[type];
}
