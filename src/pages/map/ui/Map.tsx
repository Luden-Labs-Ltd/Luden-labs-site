import { projectsData } from "@/entities/project";
import coloredMap from "@assets/images/map/coloredMap.webp";
import uncoloredMap from "@assets/images/map/uncoloredMap.webp";
import { useMemo, useState } from "react";
import { getVisitedOpacity } from "../lib/utils/getVisitedOpacity";
import { mapBuildings } from "../model";
import { Building } from "./Building";
import { Popover } from "./Popover";

export function Map() {
  const [opacity, setOpacity] = useState(getVisitedOpacity);

  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);

  const currentProject = useMemo(() => {
    if (currentProjectId == null) return null;

    return projectsData[currentProjectId] ?? null;
  }, [currentProjectId]);

  const onClose = () => {
    setCurrentProjectId(null);
  };

  const onVisited = () => {
    setOpacity(getVisitedOpacity());
  };

  return (
    <div className='relative aspect-2048/905 max-w-full max-h-screen overflow-hidden bg-white'>
      {/* uncolored map */}
      <img
        src={uncoloredMap}
        alt=''
        className='absolute inset-0 h-full w-full object-cover object-center'
      />

      {/* colored map */}
      <img
        src={coloredMap}
        alt=''
        className='absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000'
        style={{ opacity: opacity }}
      />

      {/* buildings */}
      {mapBuildings.map((building) => (
        <Building
          key={building.src}
          src={building.src}
          x={building.x}
          y={building.y}
          onClick={() => setCurrentProjectId(building.projectId)}
        />
      ))}

      {/* Popover */}
      {!!currentProjectId && (
        <Popover
          currentProject={currentProject!}
          onClick={onClose}
          onVisited={onVisited}
        />
      )}
    </div>
  );
}
