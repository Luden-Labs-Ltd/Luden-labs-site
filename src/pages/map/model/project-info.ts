// Информация о проектах для отображения на карте (Popover)
import { BUILDING_TO_PROJECT_MAP, getProjectConfig } from "@/entities/project";

export interface ProjectInfo {
  id: number;
  name: string;
  description: string;
  category: string;
  slug: string;
}

// Получить информацию о проекте по building ID
export function getProjectInfoByBuildingId(
  buildingId: number,
): ProjectInfo | null {
  const slug = BUILDING_TO_PROJECT_MAP[buildingId];
  if (!slug) return null;

  const config = getProjectConfig(slug);
  if (!config) return null;

  // Получаем title из header секции
  const headerSection = config.sections.find((s) => s.type === "header");
  const title =
    headerSection && "data" in headerSection
      ? (headerSection.data as { title?: string }).title || slug
      : slug;

  // Получаем первый параграф из content секции как description
  const contentSection = config.sections.find((s) => s.type === "content");
  const description =
    contentSection && "data" in contentSection
      ? (contentSection.data as { paragraphs?: Array<{ text: string }> })
          .paragraphs?.[0]?.text || "Описание проекта"
      : "Описание проекта";

  return {
    id: buildingId,
    name: title,
    description: description,
    category: "Проект", // Базовая категория
    slug: slug,
  };
}
