// Экспорт типов конфигурации
export type {
  ProjectConfig,
  ProjectConfigData,
  ProjectAssets,
  ResponsiveSize,
  ThemeConfig,
  ProjectSection,
  SpecialFeaturesSectionData,
} from "./config.types";

// Экспорт конфигов и утилит
export {
  PROJECT_CONFIGS,
  getProjectConfig,
  getAllProjectIds,
  projectExists,
  THEME_PRESETS,
  FONT_SIZES,
  COLORS,
  COLOR_SCHEMES,
  SECTION_TITLE_STYLE,
} from "./configs";

export type { ProjectId, ColorSchemeName } from "./configs";

// Экспорт маппинга зданий
export {
  BUILDING_TO_PROJECT_MAP,
  PROJECT_TO_BUILDING_MAP,
  getProjectSlugByBuildingId,
  getBuildingIdByProjectSlug,
} from "./building-mapping";
