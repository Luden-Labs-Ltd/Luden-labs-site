import { ProjectRenderer } from "./ui/ProjectRenderer";
import { ProjectNotFound } from "./ui/ProjectNotFound";
import { useProjectConfig } from "./model/useProjectConfig";

export function ProjectDetailPage() {
  const { config } = useProjectConfig();

  if (!config) {
    return <ProjectNotFound />;
  }

  return <ProjectRenderer config={config} />;
}
