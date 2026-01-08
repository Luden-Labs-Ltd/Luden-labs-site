import { createBrowserRouter } from "react-router-dom";
import { ProgramPage } from "../../pages/program";
import { NotFoundPage } from "../../pages/not-found";

export const router = createBrowserRouter([
  { path: "/", element: <ProgramPage /> },
  { path: "/program", element: <ProgramPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
