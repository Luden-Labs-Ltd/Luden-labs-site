import { Navbar } from "@/shared/ui/navbar";
import type { ProjectConfig, ProjectSection } from "@/entities/project";
import { COLOR_SCHEMES } from "@/entities/project";
import { SECTION_REGISTRY } from "../model/sectionRegistry";

interface ProjectRendererProps {
  config: ProjectConfig;
}

export function ProjectRenderer({ config }: ProjectRendererProps) {
  const colorScheme = config.theme.colorScheme
    ? COLOR_SCHEMES[config.theme.colorScheme]
    : null;

  const getAsset = (key: string): string => {
    const asset = config.assets[key];
    if (!asset) {
      console.warn(`Asset with key "${key}" not found in project config`);
      return "";
    }
    return typeof asset === "string" ? asset : asset.src;
  };

  const getGradientFromScheme = (): string | undefined => {
    if (!colorScheme) {
      return undefined;
    }
    const gradient = colorScheme.gradient;
    if (typeof gradient === "string") {
      return gradient;
    }
    return (gradient as { src: string }).src;
  };

  const renderSection = (section: ProjectSection, index: number) => {
    if (!section.enabled) {
      return null;
    }

    const key = `${section.type}-${index}`;

    switch (section.type) {
      case "header": {
        const HeaderComponent = SECTION_REGISTRY.header;
        return (
          <HeaderComponent
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
      }

      case "content": {
        const ContentComponent = SECTION_REGISTRY.content;
        return (
          <ContentComponent
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
          </ContentComponent>
        );
      }

      case "description": {
        const DescriptionComponent = SECTION_REGISTRY.description;
        return (
          <DescriptionComponent
            key={key}
            title={section.data.title}
            bannerText={section.data.bannerText}
            features={section.data.features}
            bannerBackgroundImage={getGradientFromScheme()}
            borderGradientColor={colorScheme?.color}
          />
        );
      }

      case "howToPlay": {
        const TargetAudienceComponent = SECTION_REGISTRY.targetAudience;
        return (
          <TargetAudienceComponent
            key={key}
            title={section.data.title || "КАК ИГРАТЬ?"}
            cards={section.data.cards.map((card) => ({
              icon: card.icon,
              text: card.text,
            }))}
            colorScheme={config.theme.colorScheme}
          />
        );
      }

      case "specialFeatures": {
        const SpecialFeaturesComponent = SECTION_REGISTRY.specialFeatures;

        const reactIconKeys = [
          "navigation",
          "phone",
          "lightbulb",
          "headphones",
          "gamepad",
          "paint",
        ];

        const mappedFeatures = section.data.features.map((feature) => {
          if (feature.iconKey) {
            const assetValue = config.assets[feature.iconKey];

            if (
              typeof assetValue === "string" &&
              reactIconKeys.includes(assetValue)
            ) {
              return {
                title: feature.title,
                iconKey: assetValue,
                icon: undefined,
              };
            }

            if (typeof assetValue === "string" && assetValue.trim() !== "") {
              return {
                title: feature.title,
                icon: assetValue,
                iconKey: undefined,
              };
            }

            if (
              assetValue &&
              typeof assetValue === "object" &&
              "src" in assetValue
            ) {
              return {
                title: feature.title,
                icon: assetValue.src,
                iconKey: undefined,
              };
            }
          }

          return {
            title: feature.title,
            icon: feature.icon,
            iconKey: undefined,
          };
        });

        return (
          <SpecialFeaturesComponent
            key={key}
            title={section.data.title}
            features={mappedFeatures}
            accentColor={colorScheme?.color}
          />
        );
      }

      case "targetAudience": {
        const TargetAudienceComponent = SECTION_REGISTRY.targetAudience;
        return (
          <TargetAudienceComponent
            key={key}
            title={section.data.title}
            cards={section.data.cards}
            colorScheme={config.theme.colorScheme}
          />
        );
      }

      case "faq": {
        const FAQComponent = SECTION_REGISTRY.faq;
        return (
          <FAQComponent
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
      }

      case "about": {
        const AboutComponent = SECTION_REGISTRY.about;
        return <AboutComponent key={key} />;
      }

      case "footer": {
        const FooterComponent = SECTION_REGISTRY.footer;
        return (
          <FooterComponent
            key={key}
            backgroundColor={
              colorScheme?.color || config.theme.footer.backgroundColor
            }
          />
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      {config.sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}
