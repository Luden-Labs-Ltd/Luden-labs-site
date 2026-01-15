import { Navbar } from "@/shared/ui/navbar";
import type { ProjectConfig, ProjectSection } from "@/entities/project";
import { COLOR_SCHEMES } from "@/entities/project";
import {
  SECTION_REGISTRY,
  hasSectionComponent,
} from "../model/sectionRegistry";

interface ProjectRendererProps {
  config: ProjectConfig;
}

export function ProjectRenderer({ config }: ProjectRendererProps) {
  const colorScheme = config.theme.colorScheme
    ? COLOR_SCHEMES[config.theme.colorScheme]
    : null;

  // Функция для получения изображения из assets по ключу
  const getAsset = (key: string) => {
    const asset = config.assets[key];
    if (!asset) {
      console.warn(`Asset with key "${key}" not found in project config`);
      return "";
    }
    // Поддержка vite-imagetools (может быть объектом с .src)
    return typeof asset === "string" ? asset : asset.src;
  };

  const getGradientFromScheme = () => {
    if (!colorScheme) {
      return undefined;
    }
    const gradient = colorScheme.gradient;
    return typeof gradient === "string" ? gradient : gradient.src;
  };

  // Функция для рендеринга секции
  const renderSection = (section: ProjectSection, index: number) => {
    // Пропускаем выключенные секции
    if (!section.enabled) {
      return null;
    }

    // Проверяем существование компонента
    if (!hasSectionComponent(section.type)) {
      console.warn(`Section component for type "${section.type}" not found`);
      return null;
    }

    const SectionComponent = SECTION_REGISTRY[section.type];
    const key = `${section.type}-${index}`;

    // Маппинг данных секции к пропсам компонента
    switch (section.type) {
      case "header":
        return (
          <SectionComponent
            key={key}
            title={section.data.title}
            backgroundImage={
              config.theme.header.backgroundImage
                ? getAsset("headerBg")
                : getGradientFromScheme()
            }
            gradientFrom={config.theme.header.gradient.from}
            gradientTo={config.theme.header.gradient.to}
          />
        );

      case "content":
        return (
          <SectionComponent
            key={key}
            image={getAsset(section.data.imageKey)}
            imageAlt={section.data.imageAlt}
          >
            {section.data.paragraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className='font-days-one text-left text-[30px] leading-[100%] font-normal tracking-[0%] text-[#5e6061]'
              >
                {paragraph.text}
              </p>
            ))}
          </SectionComponent>
        );

      case "description":
        return (
          <SectionComponent
            key={key}
            title={section.data.title}
            bannerText={section.data.bannerText}
            features={section.data.features}
            bannerBackgroundImage={getGradientFromScheme()}
            borderGradientColor={colorScheme?.color}
          />
        );

      case "howToPlay":
        return (
          <SectionComponent
            key={key}
            title={section.data.title}
            cards={section.data.cards.map((card) => ({
              image: card.imageKey ? getAsset(card.imageKey) : undefined,
              text: card.text,
            }))}
            borderColor={colorScheme?.color}
          />
        );

      case "specialFeatures":
        return (
          <SectionComponent
            key={key}
            title={section.data.title}
            features={section.data.features}
            accentColor={colorScheme?.color}
          />
        );

      case "targetAudience":
        return (
          <SectionComponent
            key={key}
            title={section.data.title}
            cards={section.data.cards}
            colorScheme={config.theme.colorScheme}
          />
        );

      case "faq":
        return (
          <SectionComponent
            key={key}
            title={section.data.title}
            items={section.data.items}
            bannerBackgroundImage={
              section.data.bannerBackgroundImageKey
                ? getAsset(section.data.bannerBackgroundImageKey)
                : getGradientFromScheme()
            }
            iconColor={colorScheme?.color}
          />
        );

      case "about":
        return <SectionComponent key={key} />;

      case "footer":
        return (
          <SectionComponent
            key={key}
            backgroundColor={
              colorScheme?.color || config.theme.footer.backgroundColor
            }
          />
        );

      default: {
        // TypeScript exhaustive check
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _exhaustive: never = section;
        return null;
      }
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Навигация */}
      <Navbar />

      {/* Динамический рендеринг всех секций */}
      {config.sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}
