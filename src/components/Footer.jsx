import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start">
        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p className="text-black">Placement Buddies</p>
          <p className="text-black">Email: placementbuddiesofficial19@gmail.com</p>
          <p className="text-black">Phone: +91 98765 43210</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-400"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Credit Section */}
      <div className="bg-gray-100 text-center py-4">
        <p className="text-black">
          &copy; {new Date().getFullYear()} Placement Buddies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
