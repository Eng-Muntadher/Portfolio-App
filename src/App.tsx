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
import ContactPage from "./pages/ContactPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import { Toaster } from "react-hot-toast";

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
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetailsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Default options for all toasts
          duration: 4000,
          style: {
            background: "#fff",
            color: "#363636",
            padding: "16px 20px",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: "500",
            boxShadow:
              "0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "420px",
            border: "1px solid rgba(0, 0, 0, 0.05)",
          },

          // Success toast styles
          success: {
            duration: 4000,
            style: {
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "#ffffff",
              padding: "18px 24px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "500",
              boxShadow:
                "0 10px 25px rgba(16, 185, 129, 0.3), 0 4px 10px rgba(16, 185, 129, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            },
            iconTheme: {
              primary: "#ffffff",
              secondary: "#10b981",
            },
          },

          // Error toast styles
          error: {
            duration: 5000,
            style: {
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              color: "#ffffff",
              padding: "18px 24px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "500",
              boxShadow:
                "0 10px 25px rgba(239, 68, 68, 0.3), 0 4px 10px rgba(239, 68, 68, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            },
            iconTheme: {
              primary: "#ffffff",
              secondary: "#ef4444",
            },
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
