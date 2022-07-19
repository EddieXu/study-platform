import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, authRequestStatus } = useSelector(
    state => state.user
  );

  return isAuthenticated || authRequestStatus === "PENDING" ? (
    children
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location },
        search: `?returnUrl=${location.pathname}${location.search}`
      }}
    />
  );
};

export default PrivateRoute;
