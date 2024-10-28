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
    if (token) {
      const tokenObject = JSON.parse(token);
      config.headers.Authorization = `Bearer ${tokenObject?.refresh}`;
      console.log(config.headers.Authorization);
    }
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
