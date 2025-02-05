import { createBrowserRouter, Link } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AnimatePage from "../components/route-animation/AnimatePage";
import DashboardLayout from "../layouts/DashboardLayout";
import RootLayout from "../layouts/RootLayout";
import SiteLayout from "../layouts/SiteLayout";
import AddEventPage from "../pages/dashboard/AddEventPage";
import DashboardBusinessPage from "../pages/dashboard/DashboardBusinessPage";
import DashboardEventPage from "../pages/dashboard/DashboardEventPage";
import DashboardHomePage from "../pages/dashboard/DashboardHomePage";
import DashboardServicePage from "../pages/dashboard/DashboardServicePage";
import DashboardTourismPage from "../pages/dashboard/DashboardTourismPage";
import DashboardUserPage from "../pages/dashboard/DashboardUserPage";
import TestPage from "../pages/dashboard/TestPage";
import BusinessPage from "../pages/site/BusinessPage";
import EventsPage from "../pages/site/EventsPage";
import HomePage from "../pages/site/HomePage";
import LoginPage from "../pages/site/LoginPage";
import MapPage from "../pages/site/MapPage";
import NewsPage from "../pages/site/NewsPage";
import ServicesPage from "../pages/site/ServicesPage";
import TourismPage from "../pages/site/TourismPage";
import DashboardNewsPage from "../pages/dashboard/DashboardNewsPage";

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
            path: "/tourisms",
            element: <TourismPage />,
          },
          {
            path: "/services",
            element: <ServicesPage />,
          },
          {
            path: "/businesses",
            element: <BusinessPage />,
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
                path: "users",
                element: <DashboardUserPage />,
              },
              {
                path: "events",
                element: <DashboardEventPage />,
              },
              {
                path: "services",
                element: <DashboardServicePage />,
              },
              {
                path: "businesses",
                element: <DashboardBusinessPage />,
              },
              {
                path: "services",
                element: <DashboardTourismPage />,
              },
              {
                path: "news",
                element: <DashboardNewsPage />,
              },
              {
                path: "tourisms",
                element: <DashboardTourismPage />,
              },
              {
                path: "test",
                element: <TestPage />,
              },
              {
                path: "add-event",
                element: <AddEventPage />,
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
