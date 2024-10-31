import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/site/Header";
import { MobileNavbar } from "../components/site/SiteNavbar";
import { AnimatePresence } from "framer-motion";
import AddPlace from "../components/site/map/AddPlace";
const SiteLayout: React.FC = () => {
  // just for re-render during changing routes

  return (
    <>
      <AnimatePresence>
        <Header />
        <Outlet />
        <MobileNavbar />
        <AddPlace />
      </AnimatePresence>
    </>
  );
};

export default SiteLayout;
