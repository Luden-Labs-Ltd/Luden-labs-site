import { createBrowserRouter } from "react-router-dom";
import { ProjectDetailPage } from "@/pages/projects";
import { LandingPage } from "@/pages/landing";
import { MapPage } from "@/pages/map";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetailPage />,
  },
  {
    path: "/map",
    element: <MapPage />,
  },
]);
