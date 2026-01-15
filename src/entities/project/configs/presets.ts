// Переиспользуемые пресеты для конфигов проектов

import type { ResponsiveSize, ThemeConfig } from "../model/config.types";
import redOrangeGradient from "@/shared/assets/images/pages/projects/gradients/red-orange-gradient.png?format=webp";
import yellowOrangeGradient from "@/shared/assets/images/pages/projects/gradients/yellow-orange-gradient.png?format=webp";
import cyanBlueGradient from "@/shared/assets/images/pages/projects/gradients/cyan-blue-gradient.png?format=webp";
import purpleBlueGradient from "@/shared/assets/images/pages/projects/gradients/purple-blue-gradient.png?format=webp";

// Стандартные размеры шрифтов
export const FONT_SIZES = {
  // Заголовки
  titleLarge: {
    clamp: "clamp(32px,3.9vw,75px)",
  },
  titleMedium: {
    clamp: "clamp(28px,3vw,48px)",
  },
  titleSmall: {
    clamp: "clamp(24px,2.5vw,36px)",
  },

  // Текст
  textLarge: {
    clamp: "clamp(18px,1.88vw,36px)",
  },
  textMedium: {
    clamp: "clamp(16px,1.67vw,32px)",
  },
  textSmall: {
    clamp: "clamp(14px,1.35vw,26px)",
  },
  textBody: {
    clamp: "clamp(16px,1.8vw,22px)",
  },

  // Контент
  contentText: {
    clamp: "clamp(20px,2vw,30px)",
  },
} as const satisfies Record<string, ResponsiveSize>;

// Стандартные цвета
export const COLORS = {
  primary: "#5e6061", // Основной серый
  white: "#ffffff",
  black: "#000000",
  accent: "#ff6b35", // Оранжевый акцент
} as const;

// Стандартные стили для заголовков секций
export const SECTION_TITLE_STYLE = {
  fontSize: FONT_SIZES.titleLarge,
  color: COLORS.primary,
} as const;

// Цветовые схемы (4 цвета + 4 градиента)
export const COLOR_SCHEMES = {
  scheme1: {
    color: "#FEDC7A",
    gradient: yellowOrangeGradient,
    headerGradient: {
      from: "from-yellow-300",
      to: "to-yellow-500",
    },
  },
  scheme2: {
    color: "#FFC9C9",
    gradient: redOrangeGradient,
    headerGradient: {
      from: "from-orange-400",
      to: "to-red-500",
    },
  },
  scheme3: {
    color: "#A8F5FF",
    gradient: cyanBlueGradient,
    headerGradient: {
      from: "from-cyan-300",
      to: "to-blue-500",
    },
  },
  scheme4: {
    color: "#D7D5FF",
    gradient: purpleBlueGradient,
    headerGradient: {
      from: "from-purple-300",
      to: "to-purple-600",
    },
  },
} as const;

export type ColorSchemeName = keyof typeof COLOR_SCHEMES;

// Готовые темы (градиенты)
export const THEME_PRESETS = {
  warmSunset: {
    header: {
      gradient: {
        from: "from-yellow-300",
        to: "to-yellow-500",
      },
    },
    footer: {
      backgroundColor: "#FEDC7A",
    },
  },
  coolOcean: {
    header: {
      gradient: {
        from: "from-blue-400",
        to: "to-cyan-600",
      },
    },
    footer: {
      backgroundColor: "#06B6D4",
    },
  },
  vibrantPurple: {
    header: {
      gradient: {
        from: "from-purple-400",
        to: "to-pink-600",
      },
    },
    footer: {
      backgroundColor: "#A855F7",
    },
  },
  mintGreen: {
    header: {
      gradient: {
        from: "from-emerald-400",
        to: "to-teal-500",
      },
    },
    footer: {
      backgroundColor: "#10B981",
    },
  },
} as const satisfies Record<string, Partial<ThemeConfig>>;

// Стандартные отступы для секций
export const SECTION_SPACING = {
  paddingY: {
    clamp: "clamp(40px,4vw,60px)",
  },
  paddingX: {
    clamp: "clamp(16px,2vw,24px)",
  },
  gap: {
    clamp: "clamp(20px,2vw,30px)",
  },
  marginBottom: {
    clamp: "clamp(30px,3vw,40px)",
  },
} as const;

// Стандартные размеры для карточек
export const CARD_SIZES = {
  padding: {
    clamp: "clamp(24px,3vw,40px)",
  },
  borderRadius: {
    clamp: "clamp(12px,1.5vw,20px)",
  },
  minHeight: {
    clamp: "clamp(180px,20vw,240px)",
  },
} as const;
