import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "router";
import "configs/axios";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
