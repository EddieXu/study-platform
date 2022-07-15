import React, { lazy } from "react";

export default [
  {
    path: "/",
    intercept: lazy(() => import("")),
    layout: lazy(() => import("")),
    children: [
      {
        path: "/xx",
        component: ""
      }
    ]
  }
];
