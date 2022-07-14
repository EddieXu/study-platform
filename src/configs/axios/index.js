import axios from "axios";

axios.defaults.timeout = 150000;

axios.interceptors.request.use(request => {
  const token = localStorage.getItem("AUTH_TOKEN");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
});

axios.interceptors.response.use(
  response => {},
  error => {
    // 未授权重定向操作；
  }
);
