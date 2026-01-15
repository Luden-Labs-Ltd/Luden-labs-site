import type { SpecialFeatureIconKey } from "@/shared/assets/icons/special-features/icon-keys";

export interface ResponsiveSize {
  clamp: string;
}

export interface ThemeConfig {
  colorScheme?: "scheme1" | "scheme2" | "scheme3" | "scheme4";
  header: {
    gradient: {
      from: string;
      to: string;
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

export interface HeaderSectionData {
  title: string;
}

export interface ContentSectionData {
  imageKey: string;
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
    imageKey?: string;
    icon?: "hands" | "puzzle" | "group" | "check" | "path" | "map" | "qrcode" | "certificate" | "donation";
    text: string;
  }>;
}

export interface SpecialFeaturesSectionData {
  title?: string;
  features: Array<{
    icon?: string;
    /**
     * Ключ иконки из доступных special-features иконок
     * Доступные значения: "gamepad", "paint", "navigation", "phone", "lightbulb", "headphones"
     * См. SPECIAL_FEATURE_ICONS в @/shared/assets/icons/special-features/icon-keys
     */
    iconKey?: SpecialFeatureIconKey;
    title: string;
  }>;
}

export interface TargetAudienceSectionData {
  title?: string;
  cards: Array<{
    icon?: "hands" | "puzzle" | "group" | "check" | "path" | "map" | "qrcode" | "certificate" | "donation";
    text: string;
    gradient?: string;
  }>;
}

export interface FAQSectionData {
  title?: string;
  bannerBackgroundImageKey?: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AboutSectionData { }

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FooterSectionData { }

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

export interface ProjectConfigData {
  id: string;
  slug: string;
  theme: ThemeConfig;
  sections: ProjectSection[];
}

export interface ProjectAssets {
  [key: string]: string | { src: string };
}

export interface ProjectConfig extends ProjectConfigData {
  assets: ProjectAssets;
}
