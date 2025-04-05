import React from 'react';
import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl top-[-20%] left-[-10%] animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-[-20%] right-[-10%] animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading with Neon Gradient */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-6 tracking-tight animate-fade-in-down">
          Ready to Ignite Your Destiny?
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-medium animate-fade-in-up">
          Step into Lakshya Path and unlock a universe of personalized guidance and local opportunities tailored just for you.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-6">
          <Link
            to="/career-guidance"
            className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] group overflow-hidden border border-indigo-400/50 transform hover:-translate-y-1"
          >
            <span className="relative z-10">Launch Now</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full transform scale-0 group-hover:scale-150 animate-ripple" />
          </Link>
          <Link
            to="/market-research"
            className="relative bg-transparent border-2 border-indigo-400 text-indigo-200 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] group transform hover:-translate-y-1"
          >
            <span className="relative z-10">Shape the Future</span>
            {/* <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full transform scale-0 group-hover:scale-150 animate-ripple" /> */}
          </Link>
        </div>

        {/* Subtle Cosmic Accent */}
        <div className="mt-12">
          <svg
            className="w-24 h-24 mx-auto text-indigo-400 animate-spin-slow opacity-50"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="45" stroke="url(#ctaGrad)" strokeWidth="4" strokeDasharray="10 10" />
            <defs>
              <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
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
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(150); opacity: 0; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 1s ease forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease forwards 0.3s; }
        .animate-ripple { animation: ripple 0.6s ease-out; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  );
}

export default CTASection;