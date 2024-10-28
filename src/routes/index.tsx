import { createBrowserRouter, Link } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";
import HomePage from "../pages/site/HomePage";
import RootLayout from "../layouts/RootLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHomePage from "../pages/dashboard/DashboardHomePage";
import LoginPage from "../pages/site/LoginPage";
import TestPage from "../pages/dashboard/TestPage";
import ProtectedRoute from "../components/ProtectedRoute";
import AnimatePage from "../components/route-animation/AnimatePage";
import GoogleMap from "../components/site/GoogleMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // site routes
      {
        path: "/",
        element: <SiteLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "signin",
            element: <LoginPage />,
          },
          {
            path: "/map",
            element: <GoogleMap />,
          },
          {
            path: "*",
            element: (
              <AnimatePage>
                <section className="flex flex-row items-center justify-center min-h-screen">
                  Not found go back to home{" "}
                  <Link to="/" className="text-xl text-secondary">
                    Home
                  </Link>
                </section>
              </AnimatePage>
            ),
          },
        ],
      },
      // dashboard routes
      {
        path: "dashboard",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <DashboardLayout />,
            children: [
              {
                path: "",
                element: <DashboardHomePage />,
              },
              {
                path: "test",
                element: <TestPage />,
              },
              {
                path: "*",
                element: (
                  <AnimatePage>
                    <section className="flex flex-row items-center justify-center min-h-screen">
                      Not found go back to home
                      <Link to="/dashboard" className="text-xl text-secondary">
                        Home
                      </Link>
                    </section>
                  </AnimatePage>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
