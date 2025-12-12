import axios from "axios";

// Use relative path in production, full URL in local dev
const baseURL =
  import.meta.env.VITE_API_URL || "/api"; // fallback to /api if env is not set

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
