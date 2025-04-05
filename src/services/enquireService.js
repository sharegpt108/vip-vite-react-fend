import api from "./api";

const enquiryService = {
  submitEnquiry: async (enquiryData) => {
    try {
      const response = await api.post("/enquiry/submit-enquiry", enquiryData);
      return response.data;
    } catch (error) {
      console.error("Error submitting enquiry:", error.response?.data || error.message);
      throw error.response?.data || { message: "Something went wrong" };
    }
  },
};

export default enquiryService;
