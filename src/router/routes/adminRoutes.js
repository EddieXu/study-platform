import React from "react";
import QuestionManagement from "views/admin/QuestionManagement";
import VideoManagement from "views/admin/VideoManagement";
import VideoDatabase from "views/admin/VideoManagement/VideoDatabase";
import ModuleManagement from "views/admin/ModuleManagement";

export default [
  {
    path: "/qt-management",
    component: QuestionManagement
  },
  {
    path: "/video-management/video-list",
    component: VideoManagement
  },
  {
    path: "/video-management/video-database",
    component: VideoDatabase
  },
  {
    path: "/md-management",
    component: ModuleManagement
  }
];
