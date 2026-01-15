// Централизованный экспорт всех конфигов проектов
import type { ProjectConfig, ProjectConfigData } from "../model/config.types";
import { COLOR_SCHEMES } from "./presets";
import type { ColorSchemeName } from "./presets";

// Импорт JSON данных
import ludenCardsData from "./data/luden-cards.json";
import historicalJourneyData from "./data/historical-journey.json";
import enolaData from "./data/enola.json";
import sosBandData from "./data/sos-band.json";
import tresorData from "./data/tresor.json";
import sporkData from "./data/spork.json";
import stygenData from "./data/stygen.json";
import pulsonData from "./data/pulson.json";
import realFishingData from "./data/real-fishing.json";
import retornoData from "./data/retorno.json";

// Импорт ассетов
import { ludenCardsAssets } from "./assets/luden-cards";
import { historicalJourneyAssets } from "./assets/historical-journey";
import { enolaAssets } from "./assets/enola";
import { sosBandAssets } from "./assets/sos-band";
import { tresorAssets } from "./assets/tresor";
import { sporkAssets } from "./assets/spork";
import { stygenAssets } from "./assets/stygen";
import { pulsonAssets } from "./assets/pulson";
import { realFishingAssets } from "./assets/real-fishing";
import { retornoAssets } from "./assets/retorno";

const schemeByColor = Object.fromEntries(
  Object.entries(COLOR_SCHEMES).map(([schemeName, scheme]) => [
    scheme.color.toLowerCase(),
    schemeName,
  ]),
) as Record<string, ColorSchemeName>;

const resolveTheme = (data: ProjectConfigData): ProjectConfigData => {
  const backgroundColor = data.theme.footer.backgroundColor;
  const normalizedColor = backgroundColor?.toLowerCase();
  const colorScheme =
    data.theme.colorScheme || (normalizedColor && schemeByColor[normalizedColor]);

  if (!colorScheme) {
    return data;
  }

  return {
    ...data,
    theme: {
      ...data.theme,
      colorScheme,
      header: {
        ...data.theme.header,
        gradient: COLOR_SCHEMES[colorScheme].headerGradient,
      },
      footer: {
        ...data.theme.footer,
        backgroundColor: COLOR_SCHEMES[colorScheme].color,
      },
    },
  };
};

// Сборка конфигов (JSON + Assets)
const ludenCardsConfig: ProjectConfig = {
  ...resolveTheme(ludenCardsData as ProjectConfigData),
  assets: ludenCardsAssets,
};

const historicalJourneyConfig: ProjectConfig = {
  ...resolveTheme(historicalJourneyData as ProjectConfigData),
  assets: historicalJourneyAssets,
};

const enolaConfig: ProjectConfig = {
  ...resolveTheme(enolaData as ProjectConfigData),
  assets: enolaAssets,
};

const sosBandConfig: ProjectConfig = {
  ...resolveTheme(sosBandData as ProjectConfigData),
  assets: sosBandAssets,
};

const tresorConfig: ProjectConfig = {
  ...resolveTheme(tresorData as ProjectConfigData),
  assets: tresorAssets,
};

const sporkConfig: ProjectConfig = {
  ...resolveTheme(sporkData as ProjectConfigData),
  assets: sporkAssets,
};

const stygenConfig: ProjectConfig = {
  ...resolveTheme(stygenData as ProjectConfigData),
  assets: stygenAssets,
};

const pulsonConfig: ProjectConfig = {
  ...resolveTheme(pulsonData as ProjectConfigData),
  assets: pulsonAssets,
};

const realFishingConfig: ProjectConfig = {
  ...resolveTheme(realFishingData as ProjectConfigData),
  assets: realFishingAssets,
};

const retornoConfig: ProjectConfig = {
  ...resolveTheme(retornoData as ProjectConfigData),
  assets: retornoAssets,
};

// Мапа всех конфигов проектов
export const PROJECT_CONFIGS = {
  "luden-cards": ludenCardsConfig,
  "historical-journey": historicalJourneyConfig,
  "enola": enolaConfig,
  "sos-band": sosBandConfig,
  "tresor": tresorConfig,
  "spork": sporkConfig,
  "stygen": stygenConfig,
  "pulson": pulsonConfig,
  "real-fishing": realFishingConfig,
  "retorno": retornoConfig,
} as const;

// Типы
export type ProjectId = keyof typeof PROJECT_CONFIGS;

// Функция получения конфига по ID
export function getProjectConfig(projectId: string): ProjectConfig | null {
  return PROJECT_CONFIGS[projectId as ProjectId] || null;
}

// Получить все ID проектов
export function getAllProjectIds(): ProjectId[] {
  return Object.keys(PROJECT_CONFIGS) as ProjectId[];
}

// Проверка существования проекта
export function projectExists(projectId: string): projectId is ProjectId {
  return projectId in PROJECT_CONFIGS;
}

// Экспорт пресетов для использования в новых конфигах
export { THEME_PRESETS, FONT_SIZES, COLORS, SECTION_TITLE_STYLE } from "./presets";

// Экспорт типов
export type { ProjectConfig, ProjectConfigData } from "../model/config.types";
