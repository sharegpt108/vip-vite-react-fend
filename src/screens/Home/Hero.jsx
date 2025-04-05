import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 py-28 px-6 overflow-hidden">
      {/* Background Cosmic Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
          }}
        />
        <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl top-[-20%] left-[-10%] animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-[-20%] right-[-10%] animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Section: Text and CTA */}
        <div className="text-center lg:text-left">
          {/* Heading with Neon Gradient */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-6 animate-fade-in-down tracking-tight">
            India’s First{' '}
            <span className="block md:inline bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text">
              Career Cosmos
            </span>
            <div className="mt-4 w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto lg:mx-0 shadow-glow animate-scale-in origin-left" />
          </h1>

          {/* Subheading with Cosmic Flair */}
          <p className="text-xl md:text-3xl text-gray-100 mb-8 animate-fade-in-up font-medium">
            Where{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
              Guidance Fuels Futures
            </span>{' '}
            & Dreams Ignite
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light drop-shadow-md">
            Lakshya Path blends Vedic astrology, expert career vibes, and real job pipelines—lighting
            up rural India with bold opportunities for students and parents alike.
          </p>

          {/* CTA Button */}
          <Link
            to="/career-guidance"
            className="inline-block relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] group overflow-hidden border border-indigo-400/50"
          >
            <span className="relative z-10">Launch Your Orbit</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full transform scale-0 group-hover:scale-150 animate-ripple" />
          </Link>
        </div>

        {/* Right Section: Cosmic SVG Graphic */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-md h-96 transition-all duration-500">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Gradient Orb */}
              <defs>
                <radialGradient id="cosmicGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 0.1 }} />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="190" fill="url(#cosmicGrad)" className="animate-pulse-slow" />

              {/* Orbiting Path with Gradient */}
              <defs>
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M120 280 Q200 120 280 280 T380 320"
                fill="none"
                stroke="url(#orbitGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                className="animate-draw-path"
              />
              <path
                d="M340 300 L380 320 L340 340"
                fill="none"
                stroke="#EC4899"
                strokeWidth="14"
                strokeLinecap="round"
                className="animate-draw-path delay-200"
              />

              {/* Cosmic Accents */}
              <circle cx="150" cy="150" r="12" fill="#A855F7" className="animate-pulse-slow" />
              <circle cx="250" cy="100" r="10" fill="#EC4899" className="animate-pulse-slow delay-100" />
              <circle cx="300" cy="250" r="14" fill="#4F46E5" className="animate-pulse-slow delay-300" />
              <path
                d="M80 80 L90 100 L110 90 L90 90 Z"
                fill="#93C5FD"
                className="animate-spin-slow"
              />

              {/* Text Overlay */}
              <text
                x="200"
                y="380"
                textAnchor="middle"
                fontSize="28"
                fontWeight="bold"
                className="animate-fade-in-up"
              >
                <tspan fill="url(#orbitGrad)">Orbit of Ambition</tspan>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Tailwind Animation Keyframes */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        @keyframes draw-path {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
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
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-draw-path { stroke-dasharray: 1000; animation: draw-path 3s ease forwards; }
        .animate-fade-in-down { animation: fade-in-down 1s ease forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease forwards 0.3s; }
        .animate-scale-in { animation: scale-in 1s ease forwards 0.5s; }
        .animate-ripple { animation: ripple 0.6s ease-out; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .shadow-glow { box-shadow: 0 0 15px rgba(99, 102, 241, 0.5); }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
}

export default Hero;