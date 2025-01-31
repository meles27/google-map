import axios from "axios";
import settings from "../config";

const axiosInstance = axios.create({
  baseURL: settings.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(settings.JWT_KEY_NAME); // Change as needed
    console.log("token is", token);
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      console.log(config.headers.Authorization);
    }

    // config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtZWtlbGxlLmFwcCIsImlhdCI6MTczODIxNjAwNCwiZXhwIjoxNzM4MjE5NjA0fQ.ayOSalJewokMnZ4ZhVm6XFvYjTajO9P8I75hwUxAx2Q`;
    console.log(config.headers.Authorization);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
