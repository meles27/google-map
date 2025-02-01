import { Outlet } from "react-router-dom";
import DesktopSidebar from "../components/dashboard/sidebar/DesktopSidebar";
import MobileSidebar from "../components/dashboard/sidebar/MobileSidebar";
import Header from "../components/dashboard/Header";
import React from "react";
import { AnimatePresence } from "framer-motion";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <section
        id="dashboard"
        className="flex flex-row w-full text-primary-900"
        // ref={layoutRef}
      >
        <aside className="sticky top-0 left-0 hidden flex-[0_0_300px] h-screen overflow-auto border-r border-r-gray-400 z-[10] lg:flex">
          <DesktopSidebar />
        </aside>
        <main className="flex flex-col flex-1 max-w-full lg:max-w-[calc(100%-300px)]">
          <Header />
          <div className="w-full h-full overflow-auto">
            <AnimatePresence>
              <Outlet />
            </AnimatePresence>
          </div>
        </main>
      </section>
      <MobileSidebar />
    </>
  );
};

export default DashboardLayout;
