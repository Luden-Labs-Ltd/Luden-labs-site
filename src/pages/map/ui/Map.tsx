import uncoloredMap from "@assets/images/map/uncoloredMap.webp";
import coloredMap from "@assets/images/map/coloredMap.webp";
import { mapBuildings } from "../model";
import { Building } from "./Building";
import { useMemo, useState } from "react";
import { projectsData } from "@/entities/project";
import { Popover } from "./Popover";
import { getVisitedOpacity } from "../lib/utils/getVisitedOpacity";

export function Map() {
  {
    /* current opacity state from local storage, sets current map's opacity */
  }
  const [opacity, setOpacity] = useState(getVisitedOpacity);

  {
    /* current project's id state, opens popover and helps get project's info */
  }
  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);

  {
    /* computed value, getting current project by id */
  }
  const currentProject = useMemo(() => {
    if (currentProjectId == null) return null;

    return projectsData[currentProjectId] ?? null;
  }, [currentProjectId]);

  {
    /* function onClick for "X" button on popover */
  }
  const onClose = () => {
    setCurrentProjectId(null);
  };

  {
    /* function onClick for 'Узнать больше' button. It rerenders ui up to date with local storage */
  }
  const onVisited = () => {
    setOpacity(getVisitedOpacity());
  };

  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      {/* uncolored map */}
      <img
        src={uncoloredMap}
        alt=''
        className='absolute inset-0 h-full w-full object-cover'
      />

      {/* colored map */}
      <img
        src={coloredMap}
        alt=''
        className='absolute inset-0 h-full w-full object-cover'
        style={{ opacity: opacity }}
      />

      {/* buildings */}
      {mapBuildings.map((building) => (
        <Building
          key={building.src}
          src={building.src}
          x={building.x}
          y={building.y}
          onClick={() => setCurrentProjectId(building.projectId ?? null)}
        />
      ))}

      {/* Popover */}
      {currentProjectId !== null && (
        <Popover
          currentProject={currentProject!}
          onClick={onClose}
          onVisited={onVisited}
        />
      )}
    </div>
  );
}
