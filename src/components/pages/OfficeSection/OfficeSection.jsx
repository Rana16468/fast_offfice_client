

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { RiAccountBoxFill } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlinePostAdd, MdFormatListNumbered } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlinePassword } from "react-icons/md";

const OfficeSection= () => {
//   const [isOpen, setIsOpen] = useState(true);
  



  

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

 

  return (
    <div className="">
      {/* <div className="flex justify-between py-5 bg-gray-300">
        <div>
          <FaBars className="text-xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div className="flex gap-5 items-center">
        <button  className="btn btn-outline btn-error bg-red-100 btn-sm text-black">
           <BiLogOutCircle className="text-xl"/> Logout
            </button>

          <Link to="/profile">
          <img 
            className="h-10 w-10 rounded-full cursor-pointer"
            src={''}
            alt=""
          />
          </Link>
          <h1 className="font-bold">{''}</h1>
        </div>
      </div> */}

     

      {/* Sidebar Section */}
      <section
        className={`fixed top-0 left-0 px-3 h-full mt-16 bg-gray-300 transition-transform duration-300 ease-in-out ${
          true ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <div className="py-5 flex justify-between items-center">
          <h1 className="text-xl font-bold">
           TECH{" "}
            <span className="bg-orange-700 text-white px-2 rounded-lg">
             GROUP
            </span>
          </h1>
          <FaTimes className="text-xl cursor-pointer" onClick={true} />
        </div>
        <hr />
        <h2 className="text-xl font-bold mt-2 text-gray-500">ADMIN</h2>

        <Link
          to="/"
          className="flex gap-5 mt-5 hover:bg-black hover:text-white py-3 rounded-lg px-5"
        >
          <TiHomeOutline className="text-2xl" />
          <h3>Dashboard</h3>
        </Link>

        
        {/* update user section  */}

        <div className="collapse group hover:bg-black hover:text-white mt-3 collapse-arrow bg-gray-100 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
          <input type="checkbox" name="my-accordion-3" />
          <div className="collapse-title flex items-center gap-3 font-semibold px-4 py-3 cursor-pointer group-hover:bg-black group-hover:text-white">
            <MdFormatListNumbered className="text-3xl group-hover:text-white transition duration-300" />
            <h2 className="text-xl">User</h2>
          </div>
          <div className="collapse-content">
            <ul className="ml-8 mt-2 space-y-3">
              <li>
                <NavLink
                  className="text-lg m-2 hover:text-red-500 transition duration-300"
                  to="/all_user"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "",
                    textDecoration: isActive ? "underline" : "",
                  })}
                >
                All Users
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-lg m-2 hover:text-red-500 transition duration-300"
                  to="/all_visitor_activity"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "",
                    textDecoration: isActive ? "underline" : "",
                  })}
                >
                 All Visitors
                </NavLink>
              </li>

              
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="collapse group hover:bg-black hover:text-white mt-3 collapse-arrow bg-gray-100 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
          <input type="checkbox" name="my-accordion-3" />
          <div className="collapse-title flex items-center gap-3 font-semibold px-4 py-3 cursor-pointer group-hover:bg-black group-hover:text-white">
            <MdFormatListNumbered className="text-3xl group-hover:text-white transition duration-300" />
            <h2 className="text-xl">Features</h2>
          </div>
          <div className="collapse-content">
            <ul className="ml-8 mt-2 space-y-3">
              <li>
                <NavLink
                  className="text-lg m-2 hover:text-red-500 transition duration-300"
                  to="/news"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "",
                    textDecoration: isActive ? "underline" : "",
                  })}
                >
                  News
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-lg m-2 hover:text-red-500 transition duration-300"
                  to="/team"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "",
                    textDecoration: isActive ? "underline" : "",
                  })}
                >
                  The Team
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-lg m-2 hover:text-red-500 transition duration-300"
                  to="/licence"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "",
                    textDecoration: isActive ? "underline" : "",
                  })}
                >
                  Trade Licence
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-lg m-2 hover:text-red-500 transition duration-300"
                  to="/uplode_file"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "",
                    textDecoration: isActive ? "underline" : "",
                  })}
                >
                 Uplode File
                </NavLink>
              </li>
              {/* /uplode_file */}
            </ul>
          </div>
        </div>

        {/* Contact Details Section */}
        <Link
          to="/account"
         
          className="flex gap-5 mt-5 hover:bg-black hover:text-white py-3 rounded-lg px-5"
        >
          <RiAccountBoxFill className="text-2xl" />
          <h3>Contact Details</h3>
        </Link>

        {/* Create Admin Section */}
        <Link
          to="/create_admin"
          className="flex gap-5 mt-5 hover:bg-black hover:text-white py-3 rounded-lg px-5"
        >
          <IoCreateOutline className="text-2xl" />
          <h3>Create Admin</h3>
        </Link>

        {/* Careers Section */}
        <Link
          to="/careers_page"
          className="flex gap-5 mt-5 hover:bg-black hover:text-white py-3 rounded-lg px-5"
        >
          <MdOutlinePostAdd className="text-2xl" />
          <h3>Careers</h3>
        </Link>
        {/* chnage Password */}
      
        <Link
          to="/chnage_password"
          className="flex gap-5 mt-5 hover:bg-black hover:text-white py-3 rounded-lg px-5"
        >
          <MdOutlinePassword className="text-2xl" />
          <h3>Chnage Password</h3>
        </Link>
      </section>
    </div>
  );
};

export default OfficeSection;