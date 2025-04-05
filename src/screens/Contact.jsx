import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contact form submitted! (Backend integration pending)');
  };

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
          <circle cx="50" cy="50" r="45" stroke="url(#contactGrad1)" strokeWidth="5" strokeDasharray="15 15" />
          <defs>
            <linearGradient id="contactGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
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
            fill="url(#contactGrad2)"
            stroke="url(#contactGrad2)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="contactGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#A855F7', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Two-Sided Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 min-h-[80vh]">
        {/* Left Side - Content */}
        <div className="bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-gray-800/20 p-8 rounded-3xl backdrop-blur-lg border border-indigo-700/50 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl" />
          <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6 tracking-tight drop-shadow-lg">
            Reach for the Stars
          </h1>
          <p className="relative z-10 text-gray-200 text-lg leading-relaxed mb-6">
            At Lakshya Path, we’re more than a platform—we’re your cosmic guide. Whether you’re a student seeking direction, a partner with a vision, or simply curious about our mission, we’re here to connect. Drop us a message, and let’s align your aspirations with the universe!
          </p>
          <h2 className="relative z-10 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-4 drop-shadow-md">
            Why Contact Us?
          </h2>
          <ul className="relative z-10 text-gray-200 text-lg space-y-3">
            <li>Personalized career guidance inquiries</li>
            <li>Collaboration opportunities with industry leaders</li>
            <li>Support for rural education initiatives</li>
            <li>Feedback to shape our cosmic journey</li>
          </ul>
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500/30 rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full" />
        </div>

        {/* Right Side - Form */}
        <div className="bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-gray-800/20 p-8 rounded-3xl backdrop-blur-lg border border-indigo-700/50 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl" />
          <h2 className="relative z-10 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-6 drop-shadow-md text-center">
            Send Us a Signal
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-gray-200 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-gray-800/20 border border-indigo-700/50 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-200 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-800/20 border border-indigo-700/50 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-200 font-medium mb-2">Phone (Optional)</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full p-3 bg-gray-800/20 border border-indigo-700/50 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-200 font-medium mb-2">Subject</label>
              <select
                required
                className="w-full p-3 bg-gray-800/20 border border-indigo-700/50 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              >
                <option value="" disabled selected className="text-gray-400">
                  Select a Subject
                </option>
                <option value="general" className="text-gray-200">General Inquiry</option>
                <option value="collaboration" className="text-gray-200">Collaboration Opportunity</option>
                <option value="support" className="text-gray-200">Support Request</option>
                <option value="feedback" className="text-gray-200">Feedback</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-200 font-medium mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                required
                className="w-full p-3 bg-gray-800/20 border border-indigo-700/50 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-40 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full relative bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white p-4 rounded-md font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] border border-indigo-400/70 hover:scale-105"
            >
              <span className="relative z-10 drop-shadow-md">Transmit Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-md" />
            </button>
          </form>
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500/30 rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full" />
        </div>
      </div>

      {/* Additional Contact Info */}
      <div className="max-w-6xl mx-auto text-center relative z-10 mt-20">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-6 drop-shadow-md">
          Alternate Channels
        </h2>
        <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed">
          Prefer a direct line? Reach us through these cosmic coordinates:
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <p className="text-gray-200">
            Email: <a href="mailto:support@lakshyapath.com" className="text-indigo-400 hover:text-pink-400 transition duration-300">support@lakshyapath.com</a>
          </p>
          <p className="text-gray-200">
            Phone: <a href="tel:+919876543210" className="text-indigo-400 hover:text-pink-400 transition duration-300">+91 98765 43210</a>
          </p>
          <p className="text-gray-200">
            Address: Lakshya Path HQ, Stellar Hub, Rural India
          </p>
        </div>
      </div>

      {/* Tailwind Styles */}
      <style jsx global>{`
        .drop-shadow-md { filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5)); }
        .drop-shadow-lg { filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.6)); }
      `}</style>
    </div>
  );
}

export default Contact;