export { ProjectCard } from "./ui/ProjectCard";
export { projectsData } from "./model/data";
export type { Project, ProjectConfig, ProjectConfigData } from "./model/index";

// Экспорт конфигов и утилит
export {
  PROJECT_CONFIGS,
  getProjectConfig,
  getAllProjectIds,
  projectExists,
  THEME_PRESETS,
  FONT_SIZES,
  COLORS,
} from "./configs";
