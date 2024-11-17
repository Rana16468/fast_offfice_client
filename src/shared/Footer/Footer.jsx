import React from "react";
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 w-full">
      {/* Grid Container */}
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Menu */}
        <div className="space-y-4">
          <h4 className="text-lg uppercase text-indigo-500 font-bold">Menu</h4>
          <ul className="space-y-2">
            {["Home", "Services", "Products", "Pricing"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Central Content */}
        <div className="text-center md:col-span-1">
          <h3 className="text-2xl font-bold text-indigo-500 mb-4">Componentity</h3>
          <p className="text-gray-400 text-sm">
            Your one-stop solution for modern and scalable components. Crafting
            experiences that matter.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-lg uppercase text-indigo-500 font-bold">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <p>XXX XXXX, Floor 4 San Francisco, CA</p>
            </li>
            <li>
              <a
                href="mailto:contact@company.com"
                className="hover:text-indigo-400 transition duration-200"
              >
                contact@company.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400">
            &copy; {year} Componentity. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-400 hover:text-indigo-400 transition duration-200"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-400 hover:text-indigo-400 transition duration-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="text-gray-400 hover:text-indigo-400 transition duration-200"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-indigo-400 transition duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
