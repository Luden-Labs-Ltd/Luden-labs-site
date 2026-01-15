// Экспорт всего из model
export type {
  ProjectConfig,
  ProjectConfigData,
  ProjectAssets,
  ResponsiveSize,
  ThemeConfig,
  ProjectSection,
} from "./model";

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
  BUILDING_TO_PROJECT_MAP,
  PROJECT_TO_BUILDING_MAP,
  getProjectSlugByBuildingId,
  getBuildingIdByProjectSlug,
} from "./model";

export type { ProjectId, ColorSchemeName } from "./model";
