import { createBrowserRouter } from "react-router-dom";
import { ProgramPage } from "../../pages/program";
import { NotFoundPage } from "../../pages/not-found";
import { IslandMapPage } from "../../pages/island-map";
import { LudicSection } from "../../pages/ludic";
import { EnergySection } from "../../pages/energy";
import { SpaceSection } from "../../pages/space";
import { RetentionSection } from "../../pages/retention";
import { ProjectsPage } from "../../pages/projects";
import { ProjectDetailPage } from "../../pages/project-detail";

export const router = createBrowserRouter([
  {
     path: "/", 
     element: <ProgramPage /> 
  },
  { 
    path: "/program", 
    element: <ProgramPage /> 
  },
  {
    path: '/map',
    element: <IslandMapPage />,
  },
  {
    path: '/ludic',
    element: <LudicSection />,
  },
  {
    path: '/energy',
    element: <EnergySection />,
  },
  {
    path: '/space',
    element: <SpaceSection />,
  },
  {
    path: '/retention',
    element: <RetentionSection />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/projects/:id',
    element: <ProjectDetailPage />,
  },
  { 
    path: "*", 
    element: <NotFoundPage /> 
  },
]);
