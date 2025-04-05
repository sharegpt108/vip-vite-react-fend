import React, { useState } from "react";
import registerService from "../services/registerService"; // Adjust path based on your structure

const RegistrationModal = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    studentClass: "",
    pincode: "",
    email: "",
    mobile: "",
    role: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ Added loading state

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setError(null);
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loading
    try {
      const response = await registerService.registerUser(formData);
      console.log("Form submitted:", response);
      setIsSubmitted(true);
      setFormData({
        name: "",
        studentClass: "",
        pincode: "",
        email: "",
        mobile: "",
        role: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      {/* Modal Content */}
      <div className="relative bg-black/30 backdrop-blur-md p-6 rounded-3xl shadow-xl w-full max-w-sm transform transition-all duration-300 hover:shadow-2xl">
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors rounded-full bg-gray-800/50 hover:bg-gray-800"
          onClick={handleClose}
        >
          ×
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold text-center text-white mb-4">
              Join Us Today
            </h2>
            <p className="text-center text-sm text-gray-300 mb-6">
              Fill in your details to get started
            </p>
            {error && (
              <p className="text-center text-sm text-red-400 mb-4">{error}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-600 rounded-lg bg-black/10 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                placeholder="Your Name"
                required
              />

              <input
                type="text"
                name="studentClass"
                value={formData.studentClass}
                onChange={handleChange}
                placeholder="Your Class"
                required
                className="w-full px-4 py-2.5 border border-gray-600 rounded-lg bg-black/10 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-600 rounded-lg bg-black/10 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                placeholder="Pincode"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-600 rounded-lg bg-black/10 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                placeholder="Your Email"
                required
              />

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-600 rounded-lg bg-black/10 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                placeholder="Mobile Number"
                required
              />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-600 rounded-lg bg-black/10 text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                required
              >
                <option value="" disabled>
                  I am a...
                </option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="school">School</option>
                <option value="institution">Institution</option>
                <option value="college">College</option>
                <option value="company/startup">Company/Startup</option>
              </select>

              {/* ✅ Submit Button with Loader */}
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-indigo-600 text-white py-2.5 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading} // ✅ Disable when loading
              >
                {loading ? (
                  <>
                    <svg
                      className="w-5 h-5 mr-2 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h-4l3 3 3-3h-4a8 8 0 01-8 8V16l-3 3 3 3v-4a8 8 0 01-8-8H4z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Get Started"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Success!</h2>
            <p className="text-gray-300 mb-6">
              Thank you for registering. We'll get back to you soon!
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-indigo-600 text-white py-2.5 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
