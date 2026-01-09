import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { projectDetailData, type ProjectDetailData } from "./projectData";

export function useProjectDetail(): {
  project: ProjectDetailData | null;
  isLoading: boolean;
} {
  const { id } = useParams<{ id: string }>();

  const project = useMemo(() => {
    if (!id) return null;
    return projectDetailData[id] || null;
  }, [id]);

  return {
    project,
    isLoading: false, // В будущем здесь будет реальная загрузка
  };
}
