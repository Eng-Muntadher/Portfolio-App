import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/Skills",
        element: <SkillsPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/project-details",
        element: <ProjectDetailsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
