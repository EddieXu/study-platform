import React, { lazy } from "react";

export default [
  {
    path: "/sign-in",
    component: lazy(() => import("views/common/SignIn"))
  }
];
