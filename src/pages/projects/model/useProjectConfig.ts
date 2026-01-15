import { useParams } from "react-router-dom";
import { getProjectConfig } from "@/entities/project";
import type { ProjectConfig } from "@/entities/project";

export function useProjectConfig(): {
  config: ProjectConfig | null;
  projectId: string | undefined;
  loading: boolean;
} {
  const { id } = useParams<{ id: string }>();

  // Получаем конфиг проекта
  const config = id ? getProjectConfig(id) : null;

  return {
    config,
    projectId: id,
    loading: false, // Синхронная загрузка для фронтенд-конфигов
  };
}
