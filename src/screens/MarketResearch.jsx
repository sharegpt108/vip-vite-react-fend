import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

function MarketResearch() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      pincode: e.target[0].value,
      needs: e.target[1].value,
    };
    try {
      // Uncomment and adjust URL as needed when backend is ready
      // const response = await axios.post('http://localhost:5000/api/market-research', formData);
      // alert(response.data.message);
      alert('Thank you! Your input has been successfully transmitted.');
    } catch (error) {
      alert('Error submitting market research');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl top-[-20%] left-[-10%] animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-[-20%] right-[-10%] animate-pulse-slow" />
        {/* Cosmic Decorative Elements */}
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

      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-6 tracking-tight animate-fade-in-down">
          Cosmic Market Research
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto shadow-glow animate-scale-in" />
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up">
          Shape the future of education in your galaxy. Share your community’s needs to help us launch stellar educational hubs near you.
        </p>
      </div>

      {/* Additional Content Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 relative z-10">
        <div className="bg-gradient-to-br from-white/10 to-gray-800/10 p-6 rounded-2xl backdrop-blur-lg border border-indigo-700/30 shadow-lg animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Why Your Voice Matters</h2>
          <p className="text-gray-300 leading-relaxed">
            Your input fuels our mission to bridge educational gaps in rural India. By telling us what your area needs—be it coaching centers, vocational training, or digital resources—we can tailor solutions that empower your community.
          </p>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-gray-800/10 p-6 rounded-2xl backdrop-blur-lg border border-indigo-700/30 shadow-lg animate-fade-in-up delay-200">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">What We’re Building</h2>
          <p className="text-gray-300 leading-relaxed">
            We’re crafting cosmic hubs that offer career guidance, job opportunities, and skill development—all rooted in local insights. Your feedback helps us align with your region’s unique aspirations and challenges.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-lg mx-auto bg-gradient-to-br from-white/10 to-gray-800/10 p-8 rounded-3xl backdrop-blur-lg border border-indigo-700/30 shadow-2xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] relative">
        {/* Cosmic Form Accent */}
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
          <div>
            <label className="block text-gray-200 font-medium mb-3">Your Galactic Pincode</label>
            <input
              type="text"
              placeholder="Enter your pincode"
              required
              className="w-full px-5 py-3 bg-gray-800/20 border border-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400 text-base focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all duration-300 hover:bg-gray-700/30"
            />
          </div>
          <div>
            <label className="block text-gray-200 font-medium mb-3">Educational Needs</label>
            <textarea
              placeholder="What does your area need? (e.g., coaching centers, job training, digital literacy)"
              required
              className="w-full px-5 py-3 bg-gray-800/20 border border-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400 text-base focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all duration-300 hover:bg-gray-700/30 h-40"
            />
          </div>
          <button
            type="submit"
            className="w-full relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] group overflow-hidden border border-indigo-400/50"
          >
            <span className="relative z-10">Transmit Insights</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl transform scale-0 group-hover:scale-150 animate-ripple" />
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-6 text-center animate-fade-in-up">
          Your cosmic contribution helps us bring opportunities to your orbit!
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 animate-fade-in-up relative z-10">
        <p className="text-gray-300 text-lg mb-4">
          Want to explore more ways to shape your future?
        </p>
        <Link
          to="/career-guidance"
          className="text-indigo-300 font-medium hover:text-pink-300 transition-all duration-300"
        >
          Discover Career Guidance →
        </Link>
      </div>

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

export default MarketResearch;