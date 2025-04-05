import React from 'react';

function MissionSection() {
  return (
    <section className="py-28 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl top-[-10%] left-[10%] animate-pulse-slow" />
        <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-[-10%] right-[10%] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading with Neon Flair */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 tracking-tight">
          Our <span className="text-pink-400">Mission</span>
          <span className="block text-base font-medium text-indigo-200 mt-3 opacity-90">
            Empowering Dreams, Redefining Horizons
          </span>
          <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-glow animate-gradient-shift" />
        </h2>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div className="relative bg-gradient-to-br from-white/10 to-gray-800/10 p-8 rounded-3xl backdrop-blur-lg border border-gray-700/30 shadow-2xl transition-all duration-500 hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]">
            <div className="absolute inset-0 bg-white/5 rounded-3xl pointer-events-none" />
            <p className="text-xl text-gray-100 leading-relaxed font-medium">
              Lakshya Path fuses <span className="text-indigo-300 font-semibold">guidance</span>,{' '}
              <span className="text-purple-300 font-semibold">education</span>, and{' '}
              <span className="text-pink-300 font-semibold">job pipelines</span> into a game-changing
              ecosystem. We’re revolutionizing rural India, teaming up with titans to bring elite
              training and opportunities straight to the heart of the action.
            </p>
          </div>

          {/* Right: Partners with Orbital Graphic */}
          <div className="relative">
            {/* SVG Graphic - Cosmic Orbit */}
            <svg
              className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 w-48 h-48 z-0 animate-spin-slow"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="90" stroke="url(#orbitGrad)" strokeWidth="4" opacity="0.6" />
              <circle cx="100" cy="50" r="8" fill="#A855F7" />
              <circle cx="150" cy="100" r="6" fill="#EC4899" />
              <circle cx="50" cy="100" r="6" fill="#4F46E5" />
              <defs>
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>

            {/* Partners List */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-8 rounded-3xl backdrop-blur-lg shadow-xl border border-indigo-500/20 z-10 relative">
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-wide">Our Power Crew</h3>
              <div className="grid grid-cols-2 gap-6">
                {['Tata Strive', 'Amazon', 'Flipkart', 'Zomato'].map((partner, index) => (
                  <span
                    key={index}
                    className="text-white font-semibold text-lg bg-gradient-to-r from-indigo-600/40 to-purple-600/40 px-4 py-2 rounded-full shadow-md text-center border border-indigo-400/30 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animation Keyframes */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .shadow-glow {
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </section>
  );
}

export default MissionSection;