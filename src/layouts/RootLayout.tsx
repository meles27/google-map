import { Spinner } from "@material-tailwind/react";
import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { useListBusinessQuery } from "../services/businessApi";
import {
  useListServicesQuery
} from "../services/serviceApi";
import { useListTourismsQuery } from "../services/tourismApi";
import {
  addCulturalPlaces,
  closeAddPlace
} from "../slices/cultureSlice";
import { closeDashboardSidebar } from "../slices/dashboardSlice";
import { closeNavbar } from "../slices/siteSlice";
import { ToastContainer } from "react-toastify";

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
  // useJwtTokenExpiration();
  const location = useLocation();
  console.log("re-render is occured");
  useEffect(() => {
    dispatch(closeNavbar());
    dispatch(closeDashboardSidebar());
    dispatch(closeAddPlace());
  }, [dispatch, location]);

  const services = useListServicesQuery({
    category: "",
  });
  const tourisms = useListTourismsQuery();
  const businesses = useListBusinessQuery();

  useEffect(() => {
    if (tourisms.isSuccess) {
      dispatch(addCulturalPlaces([...tourisms.data]));
    }
  }, [tourisms.isSuccess, tourisms.data, dispatch]);

  useEffect(() => {
    if (businesses.isSuccess) {
      console.log("businesses", businesses.data);
      dispatch(addCulturalPlaces(businesses.data));
    }
  }, [businesses.data, businesses.isSuccess, dispatch]);

  useEffect(() => {
    if (services.isSuccess) {
      dispatch(addCulturalPlaces([...services.data]));
    }
  }, [dispatch, services.data, services.isSuccess]);
  if (services.isLoading || tourisms.isLoading || businesses.isLoading) {
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <AnimatePresence>
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="!z-[10000]"
      />
    </AnimatePresence>
  );
};

export default RootLayout;
