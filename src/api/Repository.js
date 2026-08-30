import axios from "axios";

const defaultBaseUrl = "/api/";
const baseUrl = import.meta.env.VITE_API_BASE_URL || defaultBaseUrl;

const Repository = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: attach token if user happens to be logged in
Repository.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
Repository.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default Repository;
