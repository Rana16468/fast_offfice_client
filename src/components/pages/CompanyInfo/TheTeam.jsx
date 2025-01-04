import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

const partners = [
    {
      name: "Nat Reynolds",
      position: "Senior Partner",
      img: "https://via.placeholder.com/100",
      description:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavid from dolor amet iquam",
    },
    {
      name: "Betty Nilson",
      position: "Senior Partner",
      img: "https://via.placeholder.com/100",
      description:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavid from dolor amet iquam",
    },
    {
      name: "Mattie Smith",
      position: "Financial Director",
      img: "https://via.placeholder.com/100",
      description:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavid from dolor amet iquam",
    },
    {
      name: "Betty Nilson",
      position: "Chief Accountant",
      img: "https://via.placeholder.com/100",
      description:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavid from dolor amet iquam",
    },
    {
      name: "John Doe",
      position: "Marketing Head",
      img: "https://via.placeholder.com/100",
      description:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavid from dolor amet iquam",
    },
    {
      name: "Jane Smith",
      position: "Operations Manager",
      img: "https://via.placeholder.com/100",
      description:
        "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavid from dolor amet iquam",
    },
  ];

const TheTeam = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 mt-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">Our Partners</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 rounded-full border-4 border-orange-500 overflow-hidden mb-4">
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{partner.name}</h2>
                <p className="text-orange-500 font-medium">{partner.position}</p>
                <p className="text-gray-600 text-sm mt-2">{partner.description}</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-orange-500 hover:text-orange-600">
                    <FacebookIcon className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-orange-500 hover:text-orange-600">
                    <TwitterIcon className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-orange-500 hover:text-orange-600">
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default TheTeam;