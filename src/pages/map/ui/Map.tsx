import coloredMap from "@assets/images/pages/map/coloredMap.webp";
import uncoloredMap from "@assets/images/pages/map/uncoloredMap.webp";
import { useMemo, useState } from "react";
import { getVisitedOpacity } from "../lib/utils/getVisitedOpacity";
import { mapBuildings, getProjectInfoByBuildingId } from "../model";
import { Building } from "./Building";
import { Popover } from "./Popover";

export function Map() {
  const [opacity, setOpacity] = useState(getVisitedOpacity);

  const [currentBuildingId, setCurrentBuildingId] = useState<number | null>(
    null,
  );

  const currentProject = useMemo(() => {
    if (currentBuildingId == null) return null;

    return getProjectInfoByBuildingId(currentBuildingId);
  }, [currentBuildingId]);

  const onClose = () => {
    setCurrentBuildingId(null);
  };

  const onVisited = () => {
    setOpacity(getVisitedOpacity());
  };

  return (
    <div className='relative mx-auto aspect-[16/9] w-full max-w-[1920px]'>
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
          onClick={() => setCurrentBuildingId(building.projectId)}
        />
      ))}

      {/* Popover */}
      {!!currentBuildingId && currentProject && (
        <Popover
          currentProject={currentProject}
          onClick={onClose}
          onVisited={onVisited}
        />
      )}
    </div>
  );
}
