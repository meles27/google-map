import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { useLocalStorage } from "usehooks-ts";
import { JwtTokenIface } from "../types/types";
import config from "../config";

const ProtectedRoute: React.FC = () => {
  const location = useLocation();
  const [token] = useLocalStorage<Required<JwtTokenIface>>(
    config.JWT_KEY_NAME,
    config.JWT_DEFAULT_VALUE
  );

  return (
    <>
      {isAuthenticated(token.access) ? (
        <Outlet /> // Render wrapped component
      ) : (
        // save the location and redirect to login page and pass the location as state to redirect
        <Navigate
          // the query part is just for the to be show in the url space
          to={`/signin?from=${
            location.pathname + location.search + location.hash || ""
          }`}
          replace
          state={{
            from: location.pathname + location.search + location.hash || "",
          }}
        />
      )}
    </>
  );
};

export default ProtectedRoute;
