import React from "react";
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 w-full shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Menu Section */}
        <div className="space-y-5">
          <h4 className="text-xl uppercase text-indigo-400 font-bold">Menu</h4>
          <ul className="space-y-3">
            {["Home", "Services", "Products", "Pricing"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-indigo-300 transition-all duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Branding Section */}
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-indigo-400 mb-3">Componentity</h3>
          <p className="text-gray-400 text-md leading-relaxed">
            Your one-stop solution for modern and scalable components. Crafting experiences that matter.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-5">
          <h4 className="text-xl uppercase text-indigo-400 font-bold">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <p className="text-gray-400">XXX XXXX, Floor 4 San Francisco, CA</p>
            </li>
            <li>
              <a href="mailto:contact@company.com" className="hover:text-indigo-300 transition-all duration-300">
                contact@company.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-6 text-center">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400">&copy; {year} Componentity. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[FaTwitter, FaFacebook, FaYoutube, FaLinkedin].map((Icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-indigo-400 transition-all duration-300">
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Page Layout Wrapper
const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col  bg-gray-100">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export { PageLayout };