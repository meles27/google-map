import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useJwtTokenExpiration } from "../hooks";
import { useDispatch } from "react-redux";
import { closeNavbar } from "../slices/siteSlice";
import { closeDashboardSidebar } from "../slices/dashboardSlice";
import { AnimatePresence } from "framer-motion";

/**
 * This component is the root layout for the application. It uses the
 * `useJwtTokenExpiration` hook to check if the user is authenticated and
 * refreshes the token if it is close to expiration. If the token is
 * refreshed, then the user is directed to the dashboard. If the token is
 * invalid, then the user is directed to the login page.
 *
 * The component also uses the `useLocation` hook to get the current location
 * and dispatches actions to close the navbar and dashboard sidebar when the
 * location changes.
 *
 * The component renders an outlet component which is where the routes are
 * rendered. If the token is being refreshed, then it renders a spinner
 * component instead of the outlet.
 */
const RootLayout: React.FC = () => {
  const dispatch = useDispatch();
  useJwtTokenExpiration();
  const location = useLocation();
  console.log("re-render is occured");
  useEffect(() => {
    dispatch(closeNavbar());
    dispatch(closeDashboardSidebar());
  }, [dispatch, location]);

  return (
    <AnimatePresence>
      <Outlet />
    </AnimatePresence>
  );
};

export default RootLayout;
