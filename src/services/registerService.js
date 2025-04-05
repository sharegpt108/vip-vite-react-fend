import api from "./api";
import { toast } from "react-toastify";

const registerService = {
  registerUser: async (userData) => {
    try {
      console.log("Register service called");
      const response = await api.post("/register", userData);
      console.log("Response:", response);

      // Show success toast
      toast.success("Registration successful!");

      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong";

      // Show error toast
      toast.error(`Error: ${errorMessage}`);

      console.error("Error in registration:", errorMessage);
      throw error.response?.data || { message: errorMessage };
    }
  },
};

export default registerService;
