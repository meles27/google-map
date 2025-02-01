import { createBrowserRouter, Link } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AnimatePage from "../components/route-animation/AnimatePage";
import DashboardLayout from "../layouts/DashboardLayout";
import RootLayout from "../layouts/RootLayout";
import SiteLayout from "../layouts/SiteLayout";
import AddEventPage from "../pages/dashboard/AddEventPage";
import DashboardHomePage from "../pages/dashboard/DashboardHomePage";
import TestPage from "../pages/dashboard/TestPage";
import UsersPage from "../pages/dashboard/UsersPage";
import EventsPage from "../pages/site/EventsPage";
import HomePage from "../pages/site/HomePage";
import LoginPage from "../pages/site/LoginPage";
import MapPage from "../pages/site/MapPage";
import NewsPage from "../pages/site/NewsPage";
import ServicesPage from "../pages/site/ServicesPage";
import TourismPage from "../pages/site/TourismPage";

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
            element: <MapPage />,
          },
          {
            path: "/news",
            element: <NewsPage />,
          },
          {
            path: "/events",
            element: <EventsPage />,
          },
          {
            path: "/tourism",
            element: <TourismPage />,
          },
          {
            path: "/services",
            element: <ServicesPage />,
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
                path: "add-event",
                element: <AddEventPage />,
              },
              {
                path: "users",
                element: <UsersPage />,
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
