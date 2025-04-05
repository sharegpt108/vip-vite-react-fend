import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-gray-200 py-16 px-6 relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl top-[-20%] left-[-10%] animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-[-20%] right-[-10%] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Column 1: Branding & Description */}
        <div>
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-4 tracking-tight animate-fade-in-down">
            Lakshya <span className="text-pink-400">Path</span>
          </h3>
          <p className="text-gray-300 leading-relaxed font-medium">
            Lighting up rural India with cosmic career guidance, elite education, and stellar job opportunities via Vedic astrology and top-tier alliances.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 tracking-wide animate-fade-in-up">
            Cosmic Links
          </h4>
          <ul className="space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/career-guidance", label: "Career Guidance" },
              { to: "/partners", label: "Partners" },
              { to: "/market-research", label: "Share Your Needs" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="text-gray-400 hover:text-indigo-300 transition-all duration-300 hover:translate-x-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 tracking-wide animate-fade-in-up">
            Reach the Stars
          </h4>
          <p className="text-gray-300 mb-2">Email: support@lakshyapath.com</p>
          <p className="text-gray-300 mb-6">Phone: +91 123-456-7890</p>
          <div className="flex space-x-6">
            {[
              { href: "https://twitter.com", label: "Twitter" },
              { href: "https://linkedin.com", label: "LinkedIn" },
              { href: "https://facebook.com", label: "Facebook" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-300 transition-all duration-300 hover:scale-110"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-indigo-700/30 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p className="animate-fade-in-up">
          © {new Date().getFullYear()} Lakshya Path. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 space-x-6 animate-fade-in-up">
          <Link
            to="/privacy"
            className="hover:text-indigo-300 transition-all duration-300 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-indigo-300 transition-all duration-300 hover:underline"
          >
            Terms of Service
          </Link>
        </div>
      </div>

      {/* Cosmic Accent */}
      <svg
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 text-indigo-400 opacity-30 animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" stroke="url(#footerGrad)" strokeWidth="4" strokeDasharray="10 10" />
        <defs>
          <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

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
        @keyframes spin-slow {
          0% { transform: translate(-50%, 0) rotate(0deg); }
          100% { transform: translate(-50%, 0) rotate(360deg); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 1s ease forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease forwards 0.3s; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </footer>

    // end
  );
}

export default Footer;