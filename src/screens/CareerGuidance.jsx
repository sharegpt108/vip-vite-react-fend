import React, { useState } from "react";
import { Link } from "react-router-dom";
import enquiryService from "../services/enquireService";
import registerService from "../services/registerService";
import { toast } from "react-toastify";

function CareerGuidance() {
  const [formType, setFormType] = useState("withAstrology");
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData =
      formType === "withAstrology"
        ? {
            name: e.target[0].value,
            email: e.target[1].value,
            birthDate: e.target[2].value,
            birthTime: e.target[3].value,
            birthPlace: e.target[4].value,
            plan: selectedPlan,
          }
        : {
            name: e.target[0].value,
            studentClass: e.target[1].value,
            pincode: e.target[2].value,
            email: e.target[3].value,
            mobile: e.target[4].value,
            role: e.target[5].value,
          };

    try {
      if (formType === "withAstrology") {
        await enquiryService.submitEnquiry(formData);
        toast.success("Enquiry submitted successfully!");
      } else {
        await registerService.registerUser(formData);
      }
      setIsModalOpen(true);
    } catch (error) {
      if (formType === "withAstrology") {
        toast.error(error.message || "Failed to submit enquiry");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl top-[-20%] left-[-10%] animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-[-20%] right-[-10%] animate-pulse-slow" />
        <svg
          className="absolute top-10 left-10 w-32 h-32 text-indigo-400 opacity-30 animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="url(#decorGrad1)" strokeWidth="4" strokeDasharray="10 10" />
          <defs>
            <linearGradient id="decorGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute bottom-20 right-20 w-24 h-24 text-purple-400 opacity-30 animate-float"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 60 Q50 30 60 60 Q70 80 60 90 L40 90 Q30 80 40 60"
            fill="url(#decorGrad2)"
          />
          <defs>
            <linearGradient id="decorGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#A855F7', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 0.5 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-6 tracking-tight animate-fade-in-down">
          Career Cosmos
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto shadow-glow animate-scale-in" />
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up">
          Chart your stellar path with cosmic insights—crafted with precision, beauty, and you in mind.
        </p>
      </div>

      {/* Form Type Toggle */}
      <div className="max-w-3xl mx-auto mb-12 flex justify-center space-x-6 relative">
        {["withAstrology", "withoutAstrology"].map((type) => (
          <button
            key={type}
            onClick={() => setFormType(type)}
            className={`px-6 py-3 rounded-xl font-medium text-gray-200 bg-gradient-to-br from-white/10 to-gray-800/10 border border-indigo-700/50 backdrop-blur-md ${
              formType === type
                ? "ring-2 ring-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                : "hover:bg-gray-700/30"
            } transition-all duration-300`}
          >
            {type === "withAstrology" ? "With Astrology" : "Without Astrology"}
          </button>
        ))}
        <div className="absolute -top-10 -left-10 w-16 h-16 bg-indigo-500/20 rounded-full animate-float" />
        <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-float delay-200" />
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-white/10 to-gray-800/10 p-8 rounded-3xl backdrop-blur-lg border border-indigo-700/30 shadow-2xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] relative">
        <svg
          className="absolute -top-12 -left-12 w-24 h-24 text-indigo-400 opacity-40 animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="url(#formGrad)" strokeWidth="4" strokeDasharray="10 10" />
          <defs>
            <linearGradient id="formGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        <form onSubmit={handleSubmit} className="space-y-8">
          {formType === "withAstrology" ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField label="Name" type="text" placeholder="Your Name" required />
                <InputField label="Email" type="email" placeholder="Your Email" required />
                <InputField label="Birth Date" type="date" required />
                <InputField label="Birth Time" type="time" required />
              </div>
              <InputField label="Birth Place" type="text" placeholder="Your Birth Place" required />
              <div>
                <label className="block text-gray-200 font-medium mb-3">Choose Your Orbit</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["free", "basic", "premium"].map((plan) => (
                    <label
                      key={plan}
                      className={`flex items-center justify-between p-4 bg-gray-800/20 rounded-xl border ${
                        selectedPlan === plan
                          ? "border-indigo-400 shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                          : "border-gray-700/50"
                      } hover:border-indigo-300/50 hover:shadow-md transition-all duration-300 cursor-pointer`}
                    >
                      <span className="text-gray-200 text-sm font-medium">
                        {plan.charAt(0).toUpperCase() + plan.slice(1)}{" "}
                        {plan !== "free" && (
                          <span className="text-indigo-300">
                            ₹{plan === "basic" ? "500" : "1000"}
                          </span>
                        )}
                      </span>
                      <input
                        type="radio"
                        name="plan"
                        value={plan}
                        checked={selectedPlan === plan}
                        onChange={() => setSelectedPlan(plan)}
                        className="form-radio text-indigo-500 h-5 w-5"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField label="Name" type="text" placeholder="Your Name" required />
                  <InputField
                    label="Class"
                    type="text"
                    name="studentClass"
                    placeholder="Your Class"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField label="Pincode" type="text" placeholder="Your Pincode" required />
                  <InputField label="Email" type="email" placeholder="Your Email" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField label="Mobile" type="tel" placeholder="Your Mobile" required />
                  <div>
                    <label className="block text-gray-200 font-medium mb-3">Who Are You?</label>
                    <select
                      required
                      className="w-full p-3 bg-gray-800/20 border border-gray-700/50 rounded-xl text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all duration-300 hover:bg-gray-700/30"
                    >
                      <option value="" disabled className="text-gray-500">
                        Select your role
                      </option>
                      {["student", "parent", "school", "institution", "college", "company/startup"].map(
                        (role) => (
                          <option key={role} value={role} className="text-gray-200 bg-gray-900">
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 group overflow-hidden border border-indigo-400/50 ${
              loading
                ? "opacity-70 cursor-not-allowed animate-pulse-slow"
                : "hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] active:scale-95"
            }`}
          >
            <span className="relative z-10 flex items-center justify-center">
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
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h-4l3 3 3-3h-4a8 8 0 01-8 8V16l-3 3 3 3v-4a8 8 0 01-8-8H4z"
                    />
                  </svg>
                  Transmitting...
                </>
              ) : (
                formType === "withAstrology" ? "Book Now" : "Submit"
              )}
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-active:opacity-30 transition-opacity duration-300 rounded-xl transform scale-0 group-hover:scale-150 animate-ripple" />
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center animate-fade-in-up">
          Cosmic Offer: First 50 explorers get a free consultation!
        </p>
      </div>

      <div className="text-center mt-12 animate-fade-in-up">
        <Link
          to="/market-research"
          className="text-indigo-300 font-medium hover:text-pink-300 transition-all duration-300"
        >
          Want to summon opportunities to your galaxy? Share your needs →
        </Link>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm z-50">
          <div className="bg-gradient-to-br from-white/10 to-gray-800/10 p-8 rounded-3xl backdrop-blur-lg border border-indigo-700/30 shadow-2xl max-w-md text-center animate-fade-in-up relative">
            <svg
              className="absolute -top-10 -left-10 w-20 h-20 text-indigo-400 opacity-40 animate-spin-slow"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" stroke="url(#modalGrad)" strokeWidth="4" strokeDasharray="10 10" />
              <defs>
                <linearGradient id="modalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300 mb-3">
              Transmission Received!
            </h2>
            <p className="text-gray-300">
              {formType === "withAstrology"
                ? "Your cosmic enquiry has been successfully sent."
                : "Your registration has successfully launched!"}
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] group overflow-hidden border border-indigo-400/50 active:scale-95"
            >
              <span className="relative z-10">Close Portal</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-active:opacity-30 transition-opacity duration-300 rounded-xl transform scale-0 group-hover:scale-150 animate-ripple" />
            </button>
          </div>
        </div>
      )}

      {/* Tailwind Animation Keyframes */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(150); opacity: 0; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 1s ease forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease forwards 0.3s; }
        .animate-scale-in { animation: scale-in 1s ease forwards; }
        .animate-ripple { animation: ripple 0.6s ease-out; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .shadow-glow { box-shadow: 0 0 15px rgba(99, 102, 241, 0.5); }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
}

// Reusable Input Field Component
const InputField = ({ label, type, placeholder, required, name }) => (
  <div>
    <label className="block text-gray-200 font-medium mb-3">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full px-5 py-3 bg-gray-800/20 border border-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400 text-base focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all duration-300 hover:bg-gray-700/30"
    />
  </div>
);

export default CareerGuidance;