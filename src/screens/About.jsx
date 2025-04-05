import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl top-[-15%] left-[-15%]" />
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl bottom-[-15%] right-[-15%]" />
        {/* Cosmic Decorations */}
        <svg
          className="absolute top-1/4 left-10 w-40 h-40 text-indigo-500 opacity-25"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="url(#aboutGrad1)" strokeWidth="5" strokeDasharray="15 15" />
          <defs>
            <linearGradient id="aboutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute bottom-1/4 right-10 w-32 h-32 text-purple-500 opacity-25"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 60 Q50 30 60 60 Q70 80 60 90 L40 90 Q30 80 40 60"
            fill="url(#aboutGrad2)"
            stroke="url(#aboutGrad2)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="aboutGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#A855F7', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Banner */}
      <div className="max-w-6xl mx-auto text-center relative z-10 mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6 tracking-tight drop-shadow-lg">
          Lakshya Path: Illuminating Futures
          <div className="mt-4 w-32 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto shadow-[0_0_15px_rgba(168,85,247,0.7)]" />
        </h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
          India’s pioneering platform blending career counseling, education, and employment opportunities, dedicated to empowering rural students with cosmic clarity and local pathways.
        </p>
      </div>

      {/* Split Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 relative z-10">
        {/* Why We Exist */}
        <div className="bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-gray-800/20 p-8 rounded-3xl backdrop-blur-lg border border-indigo-700/50 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl" />
          <h2 className="relative z-10 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-6 drop-shadow-md">
            Why We Exist
          </h2>
          <p className="relative z-10 text-gray-200 text-lg leading-relaxed">
            In India, countless students are trapped in mismatched careers due to limited guidance and resources. At Lakshya Path, we harness the ancient wisdom of Vedic astrology alongside expert counseling to align education with meaningful employment. Our goal is to transform rural landscapes into thriving educational hubs, bridging the gap between ambition and opportunity.
          </p>
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500/30 rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full" />
        </div>

        {/* Our Vision */}
        <div className="bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-gray-800/20 p-8 rounded-3xl backdrop-blur-lg border border-indigo-700/50 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl" />
          <h2 className="relative z-10 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-6 drop-shadow-md">
            Our Vision
          </h2>
          <p className="relative z-10 text-gray-200 text-lg leading-relaxed">
            We envision a world where every student, no matter their location, can access top-tier education and fulfilling careers. By integrating cutting-edge technology, personalized guidance, and local job networks, Lakshya Path aims to empower rural youth to shine as global leaders, turning dreams into destinies.
          </p>
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500/30 rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full" />
        </div>
      </div>

      {/* Additional Section: Our Approach */}
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-gray-800/20 p-8 rounded-3xl backdrop-blur-lg border border-indigo-700/50 shadow-2xl relative z-10 mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl" />
        <h2 className="relative z-10 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-6 drop-shadow-md text-center">
          Our Approach
        </h2>
        <p className="relative z-10 text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Lakshya Path combines tradition and innovation—using Vedic astrology to uncover individual strengths, modern counseling to chart career paths, and partnerships with industry giants to secure local opportunities. We’re not just a platform; we’re a movement to redefine rural potential, one student at a time.
        </p>
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500/30 rounded-full" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full" />
      </div>

      {/* CTA */}
      <div className="text-center relative z-10">
        <Link
          to="/contact"
          className="inline-block relative bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white px-12 py-5 rounded-full font-semibold text-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] border border-indigo-400/70 hover:scale-105"
        >
          <span className="relative z-10 drop-shadow-md">Connect with Us</span>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full" />
        </Link>
      </div>

      {/* Tailwind Styles */}
      <style jsx global>{`
        .drop-shadow-md { filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5)); }
        .drop-shadow-lg { filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.6)); }
      `}</style>
    </div>
  );
}

export default About;