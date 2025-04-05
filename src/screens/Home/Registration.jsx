import React, { useState } from "react";
import registerService from "../../services/registerService"; // Adjust path based on your structure
import image from "../../assets/team-leader-teamwork-concept_74855-6671.avif"

const Registration = () => {
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <section className="py-28 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl top-[-10%] left-[10%] animate-pulse-slow" />
        <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-[-10%] right-[10%] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Section - Form */}
        <div className="bg-gradient-to-br from-white/10 to-gray-800/10 p-8 rounded-3xl backdrop-blur-lg border border-gray-700/30 shadow-2xl transition-all duration-500 hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]">
          {!isSubmitted ? (
            <>
              <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-3 tracking-tight animate-fade-in-down">
                Join the Cosmos
              </h2>
              <p className="text-center text-gray-300 mb-8 text-lg font-medium animate-fade-in-up">
                Step into your future in a few clicks
              </p>
              {error && (
                <p className="text-center text-sm text-pink-400 bg-pink-900/20 py-2 rounded-md mb-6 border border-pink-500/30">
                  {error}
                </p>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { name: "name", placeholder: "Your Name", type: "text" },
                    { name: "studentClass", placeholder: "Your Class", type: "text" },
                    { name: "pincode", placeholder: "Pincode", type: "text" },
                    { name: "email", placeholder: "Your Email", type: "email" },
                    { name: "mobile", placeholder: "Mobile Number", type: "tel" },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-gray-800/20 border border-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400 text-base focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all duration-300 hover:bg-gray-700/30"
                      placeholder={field.placeholder}
                      required
                    />
                  ))}
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-gray-800/20 border border-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400 text-base focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all duration-300 hover:bg-gray-700/30"
                    required
                  >
                    <option value="" disabled className="text-gray-500">
                      Select your role
                    </option>
                    {["student", "parent", "school", "institution", "college", "company/startup"].map(
                      (role) => (
                        <option key={role} value={role} className="text-gray-100 bg-gray-900">
                          {role.charAt(0).toUpperCase() + role.slice(1)}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden border border-indigo-400/50"
                  disabled={loading}
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
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h-4l3 3 3-3h-4a8 8 0 01-8 8V16l-3 3 3 3v-4a8 8 0 01-8-8H4z"
                        />
                      </svg>
                      Launching...
                    </>
                  ) : (
                    <span className="relative z-10">Register now</span>
                  )}
                  {/* <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl transform scale-0 group-hover:scale-150 animate-ripple" /> */}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12 animate-fade-in-up">
              <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300 mb-3 tracking-tight">
                You’re In!
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Welcome aboard—we’ll connect with you soon!
              </p>
              <svg
                className="w-16 h-16 mx-auto text-indigo-400 animate-pulse-slow"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Right Section - Cosmic SVG */}
        <div className="hidden lg:block">
          <svg
            className="w-full h-auto max-h-[500px] transition-all duration-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            fill="none"
          >
            {/* Cosmic Background */}
            <defs>
              <radialGradient id="cosmicBg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 0.1 }} />
              </radialGradient>
            </defs>
            <rect width="400" height="400" fill="url(#cosmicBg)" rx="20" className="animate-pulse-slow" />

            {/* Orbiting Rocket */}
            <g className="animate-float">
              <path
                d="M180 280 Q200 200 220 280 Q240 320 220 340 L180 340 Q160 320 180 280"
                fill="#EC4899"
                stroke="#A855F7"
                strokeWidth="4"
              /> {/* Rocket Body */}
              <path d="M190 340 L200 360 L210 340" fill="#FBBF24" /> {/* Flame */}
              <circle cx="200" cy="260" r="10" fill="#FFFFFF" /> {/* Window */}
            </g>

            {/* Orbit Path */}
            <path
              d="M100 300 Q200 100 300 300"
              stroke="url(#orbitGrad)"
              strokeWidth="6"
              strokeDasharray="10 10"
              fill="none"
              className="animate-draw-path"
            />
            <defs>
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* Cosmic Accents */}
            <circle cx="80" cy="80" r="15" fill="#A855F7" className="animate-pulse-slow" />
            <circle cx="320" cy="100" r="12" fill="#4F46E5" className="animate-pulse-slow delay-100" />
            <path
              d="M340 340 L350 360 L370 350 L350 350 Z"
              fill="#93C5FD"
              className="animate-spin-slow"
            />
          </svg>
          
        </div>
      </div>

      {/* Tailwind Animation Keyframes */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        @keyframes draw-path {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(150); opacity: 0; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-draw-path { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw-path 5s ease forwards; }
        .animate-fade-in-down { animation: fade-in-down 1s ease forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease forwards 0.3s; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-ripple { animation: ripple 0.6s ease-out; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .delay-100 { animation-delay: 0.1s; }
      `}</style>
    </section>
  );
};

export default Registration;