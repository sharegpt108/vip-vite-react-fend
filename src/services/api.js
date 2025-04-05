import axios from "axios";

// Create an Axios instance with base URL
const api = axios.create({
  baseURL: "https://lakshay-path.onrender.com/api", 
  // baseURL: "http://localhost:5000/api", 
  withCredentials: true,
});

// Response interceptor for handling 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (
        window.location.pathname !== "/admin" &&
        window.location.pathname !== "/"
      ) {
        window.location.href = "/admin";
      }
    }
    return Promise.reject(error);
  }
);

export default api