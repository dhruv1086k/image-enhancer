import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-800 mx-32 my-2 p-5 flex justify-between items-center max-w-full  rounded-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={assets.logo} alt="" className="w-32" />
      </div>

      {/* Copyright */}
      <div className="text-gray-300 text-sm">Copyright © 2025 Image Zen</div>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a
          href="#"
          className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center text-gray-800 hover:bg-lime-300 hover:-translate-y-0.5 transition-all duration-300"
          title="Twitter"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center text-gray-800 hover:bg-lime-300 hover:-translate-y-0.5 transition-all duration-300"
          title="LinkedIn"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      {/* Mobile Responsive - Stack vertically on small screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            flex-direction: column;
            gap: 1.25rem;
            padding: 1.875rem 1.25rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
