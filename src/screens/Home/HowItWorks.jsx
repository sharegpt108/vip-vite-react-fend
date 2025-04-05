import React from 'react';

function HowItWorks() {
  const steps = [
    {
      title: 'Find Your Cosmic Flow',
      description: 'Drop your birth stats and dreams—Vedic astrology crafts your bespoke career glow-up.',
    },
    {
      title: 'Master Your Grind',
      description: 'Unlock elite courses, skills, and hustles synced to your stellar destiny.',
    },
    {
      title: 'Forge Epic Futures',
      description: 'Name your region’s game—we’ll stack it with coaching and job goldmines.',
    },
    {
      title: 'Thrive with the Tribe',
      description: 'Vibe with mentors and a fire community for relentless support.',
    },
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 overflow-hidden relative">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl top-[-20%] left-[-10%] animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-[-20%] right-[-10%] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading with Neon Accent */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 tracking-tight">
          How We Ignite
          <span className="block text-base font-medium text-indigo-200 mt-3 opacity-90">
            Your Path, Redefined
          </span>
          <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-glow animate-gradient-shift" />
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-gray-800/10 p-6 rounded-3xl backdrop-blur-lg border border-gray-700/30 shadow-xl transition-all duration-500 hover:border-indigo-400/50 hover:shadow-2xl"
            >
              {/* Glassy Overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl pointer-events-none" />
              
              {/* Number Orb */}
              <div className="relative w-16 h-16 mb-6">
                <svg
                  className="absolute top-0 left-0 w-full h-full"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="30" fill="url(#orbGrad)" />
                  <circle cx="32" cy="32" r="28" fill="none" stroke="url(#orbStroke)" strokeWidth="2" />
                </svg>
                <defs>
                  <linearGradient id="orbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6B7280', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 0.3 }} />
                  </linearGradient>
                  <linearGradient id="orbStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white drop-shadow-lg">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 tracking-wide group-hover:text-indigo-300 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="mt-20 text-center relative">
          <p className="text-lg font-medium text-white px-8 py-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full inline-block shadow-lg border border-indigo-500/30 backdrop-blur-md">
            We’re sculpting your world into a masterpiece of education and opportunity.
            <span className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-pink-500 rounded-full animate-ping opacity-75" />
            <span className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-pink-500 rounded-full" />
          </p>
        </div>
      </div>

      {/* Tailwind Animation Keyframes */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
        .shadow-glow {
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </section>
  );
}

export default HowItWorks;