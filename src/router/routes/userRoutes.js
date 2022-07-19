import React, { lazy } from "react";

export default [
  {
    path: "/login",
    component: lazy(() => import("views/common/Login")),
  },
  {
    path: "/reset-password",
    component: lazy(() => import("views/common/ResetPassword")),
  },
  {
    path: "/register",
    component: lazy(() => import("views/common/RegisterPage")),
  },
  {
    path: "/enterprise",
    component: lazy(() => import("views/common/EnterpriseInfoPage")),
  },
  {
    path: "/student",
    component: lazy(() => import("views/common/StudentInfoPage")),
  },
];
