import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const partners = [
  {
    name: "Nat Reynolds",
    position: "Senior Partner",
    img: "https://www.shutterstock.com/image-photo/happy-professional-business-man-company-600nw-2424450769.jpg",
    description:
      "Leading our strategic initiatives with over 15 years of experience in workspace innovation and development.",
  },
  {
    name: "Betty Nilson",
    position: "Senior Partner",
    img: "https://cdn.create.vista.com/api/media/small/158330686/stock-photo-businessman-using-laptop",
    description:
      "Spearheading our expansion efforts with expertise in market analysis and international office space trends.",
  },
  {
    name: "Mattie Smith",
    position: "Financial Director",
    img: "https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg",
    description:
      "Managing our financial growth with a keen eye for sustainable investment and flexible pricing models.",
  },
  {
    name: "Robert Chen",
    position: "Chief Accountant",
    img: "https://img.freepik.com/free-photo/man-checking-some-important-documents_329181-16082.jpg",
    description:
      "Ensuring financial transparency and developing subscription models that work for businesses of all sizes.",
  },
  {
    name: "John Doe",
    position: "Marketing Head",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFF7hsWCh8aYQNrBXKA3RpKFor0pcsetg9w&s",
    description:
      "Creating our brand story and connecting flexible workspace solutions with the entrepreneurs who need them most.",
  },
  {
    name: "Jane Smith",
    position: "Operations Manager",
    img: "https://img.freepik.com/free-photo/businesswoman-leader-modern-office-with-businesspeople-workin_1139-957.jpg",
    description:
      "Optimizing our workspace experiences to deliver seamless productivity for members across all locations.",
  },
];

const TheTeam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 mt-8">
          <h2 className="text-blue-600 font-semibold uppercase tracking-wider mb-2 text-sm sm:text-base">
            The Minds Behind Fast Office
          </h2>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
            Meet Our Leadership Team
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
            Our diverse team of experts is dedicated to revolutionizing the office industry, making quality workspaces accessible anytime, anywhere.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-56 sm:h-64 bg-blue-400">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-blue-800 to-transparent">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{partner.name}</h2>
                  <p className="text-blue-200 font-medium text-sm sm:text-base">{partner.position}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6 text-sm sm:text-base">{partner.description}</p>

                {/* Social Icons */}
                <div className="flex flex-wrap space-x-4 pt-4 border-t border-gray-100">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Mission Banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
            <div className="sm:w-2/3 mb-4 sm:mb-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Fast Office: Anytime, Anywhere
              </h3>
              <p className="text-blue-100 text-sm sm:text-base">
                We empower startups, freelancers, and businesses with flexible, affordable, and professional workspaces. Experience seamless productivity with state-of-the-art equipment, modern amenities, and a supportive community.
              </p>
            </div>
            <div>
              <button className="bg-white text-blue-600 px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md">
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
