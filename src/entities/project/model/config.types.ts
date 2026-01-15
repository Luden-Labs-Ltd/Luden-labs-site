// Типы для конфигурации проектов

export interface ResponsiveSize {
  clamp: string; // например: "clamp(32px,3.9vw,75px)"
}

export interface ThemeConfig {
  colorScheme?: "scheme1" | "scheme2" | "scheme3" | "scheme4";
  header: {
    gradient: {
      from: string; // Tailwind класс: "from-yellow-300"
      to: string; // Tailwind класс: "to-yellow-500"
    };
    backgroundImage?: string;
    title?: {
      fontSize?: ResponsiveSize;
      color?: string;
    };
  };
  footer: {
    backgroundColor: string;
  };
}

// Секции

export interface HeaderSectionData {
  title: string;
}

export interface ContentSectionData {
  imageKey: string; // Ключ для получения изображения из assets
  imageAlt: string;
  paragraphs: Array<{
    text: string;
    fontSize?: ResponsiveSize;
    color?: string;
  }>;
}

export interface DescriptionSectionData {
  title: string;
  bannerText: string;
  features: Array<{
    number: number;
    title: string;
    description: string;
  }>;
}

export interface HowToPlaySectionData {
  title?: string;
  cards: Array<{
    imageKey?: string; // Ключ для получения изображения из assets
    text: string;
  }>;
}

export interface SpecialFeaturesSectionData {
  title?: string;
  features: Array<{
    icon?: string;
    title: string;
  }>;
}

export interface TargetAudienceSectionData {
  title?: string;
  cards: Array<{
    icon?: "hands" | "puzzle" | "group" | "check";
    text: string;
    gradient?: string;
  }>;
}

export interface FAQSectionData {
  title?: string;
  bannerBackgroundImageKey?: string; // Ключ для получения изображения из assets
  items: Array<{
    question: string;
    answer: string;
  }>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AboutSectionData {
  // Статичная секция, без параметров
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FooterSectionData {
  // Использует theme.footer.backgroundColor
}

// Типы секций с discriminated union

export type ProjectSection =
  | {
      type: "header";
      enabled: boolean;
      data: HeaderSectionData;
    }
  | {
      type: "content";
      enabled: boolean;
      data: ContentSectionData;
    }
  | {
      type: "description";
      enabled: boolean;
      data: DescriptionSectionData;
    }
  | {
      type: "howToPlay";
      enabled: boolean;
      data: HowToPlaySectionData;
    }
  | {
      type: "specialFeatures";
      enabled: boolean;
      data: SpecialFeaturesSectionData;
    }
  | {
      type: "targetAudience";
      enabled: boolean;
      data: TargetAudienceSectionData;
    }
  | {
      type: "faq";
      enabled: boolean;
      data: FAQSectionData;
    }
  | {
      type: "about";
      enabled: boolean;
      data: AboutSectionData;
    }
  | {
      type: "footer";
      enabled: boolean;
      data: FooterSectionData;
    };

// Главный тип конфигурации проекта

export interface ProjectConfigData {
  id: string;
  slug: string;
  theme: ThemeConfig;
  sections: ProjectSection[];
}

// Тип для ассетов проекта
export interface ProjectAssets {
  [key: string]: string | { src: string }; // Поддержка vite-imagetools
}

// Финальный тип с ассетами
export interface ProjectConfig extends ProjectConfigData {
  assets: ProjectAssets;
}
