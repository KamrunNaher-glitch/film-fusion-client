import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-base-content mt-10">
      <div className="container mx-auto px-4 py-10 md:px-10 lg:px-20">
        {/* Grid layout for responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white">Film Fusion</h2>
            <p className="mt-2 text-gray-500">
              Your one-stop destination for movies, TV shows, and entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/" className="text-white">About Us</a></li>
              <li><a href="/" className="text-white">Movies</a></li>
              <li><a href="/" className="text-white">Contact Us</a></li>
             
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-2 space-y-2">
            <li><a href="/" className="text-white">Featured Movies</a></li>
              <li><a href="/" className="text-white">Online booking</a></li>
              <li><a href="/" className="text-white">Gaming</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-primary">Follow Us</h3>
            <div className="mt-3 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary text-2xl">
              <FaFacebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary text-2xl">
              <FaTwitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary text-2xl">
              <FaInstagram />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary text-2xl">
              <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Film Fusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

