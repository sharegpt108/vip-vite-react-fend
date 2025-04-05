import React from 'react';

function Partners() {
  const partners = [
    'Tata Strive',
    'Amazon',
    'Flipkart',
    'Zomato',
    // Add more as needed
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl top-[-15%] left-[-15%]" />
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl bottom-[-15%] right-[-15%]" />
        {/* Enhanced Cosmic Decorations */}
        <svg
          className="absolute top-1/4 left-10 w-40 h-40 text-indigo-500 opacity-25"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="url(#partnerGrad1)" strokeWidth="5" strokeDasharray="15 15" />
          <defs>
            <linearGradient id="partnerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
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
            fill="url(#partnerGrad2)"
            stroke="url(#partnerGrad2)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="partnerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#A855F7', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-8 tracking-tight drop-shadow-lg">
          Our <span className="bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Cosmic Allies</span>
          <div className="mt-4 w-32 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto shadow-[0_0_15px_rgba(168,85,247,0.7)]" />
        </h1>
        <p className="text-xl text-gray-200 mb-16 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
          We unite with stellar organizations to deliver unparalleled training and opportunities to your galaxy.
        </p>
      </div>

      {/* Offset Vertical Card Stack */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-gray-800/20 p-8 rounded-3xl backdrop-blur-lg border border-indigo-700/50 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] hover:-translate-y-2"
            style={{
              marginLeft: index % 2 === 0 ? '0' : 'auto',
              marginRight: index % 2 === 0 ? 'auto' : '0',
              maxWidth: '600px',
            }}
          >
            {/* Card Inner Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl" />
            <div className="relative z-10 flex items-center justify-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 drop-shadow-md">
                {partner}
              </span>
            </div>
            {/* Subtle Accent */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500/30 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full" />
          </div>
        ))}
      </div>

      {/* Tailwind Styles */}
      <style jsx global>{`
        .drop-shadow-md { filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5)); }
        .drop-shadow-lg { filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.6)); }
      `}</style>
    </div>
  );
}

export default Partners;