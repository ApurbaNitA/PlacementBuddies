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
    <footer className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start">
        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p className="text-white">Placement Buddies</p>
          <p className="text-white">Email: placementbuddiesofficial19@gmail.com</p>
          {/* <p className="text-white">Phone: +91 98765 43210</p> */}
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          
          <a
            href="https://www.instagram.com/placementbuddies_yt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/placement-buddies/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.youtube.com/@PlacementBuddies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Credit Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-center py-4">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Placement Buddies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
