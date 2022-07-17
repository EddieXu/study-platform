import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";

export const ADMIN_MENU = [
  {
    key: "/qt-management",
    icon: <UserOutlined />,
    label: "题库管理"
  },
  {
    key: "video-management",
    icon: <VideoCameraOutlined />,
    label: "视频管理",
    children: [
      { key: "/video-management/video-list", label: "视频列表" },
      {
        key: "/video-management/video-database",
        label: "视频库"
      }
    ]
  },
  {
    key: "/md-management",
    icon: <UploadOutlined />,
    label: "制度包管理"
  }
];
