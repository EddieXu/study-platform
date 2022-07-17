import React, { lazy } from "react";
import userRoutes from "./userRoutes";
import adminRoutes from "./adminRoutes";

export default [
  ...userRoutes,
  {
    path: "/",
    layout: lazy(() => import("router/Layouts/GlobalLayout")),
    children: adminRoutes
  }
];
