// DashboardSidebar
import React, { useState, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  MdFormatListNumbered,
  MdAutoDelete,
  MdOutlinePassword,
} from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Userrole } from "../../../utility/Userrole";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import RoutesController from "../../../utility/RoutesController";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../../shared/Loading/Loading";
import ErrorPage from "../../../shared/Error/ErrorPage";

const DashboardSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {
        localStorage.setItem("token", null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const detailsRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const allRoutes = RoutesController();

  const {
    data: userroll = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userroll"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_COMMON_ROOT}/api/v1/auth/my_roll`,
          {
            method: "GET",
            headers: {
              authorization: `${localStorage.getItem("token")}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        return data;
      } catch (error) {
        if (error) {
          toast.error(error?.message);
        }
      }
    },
  });

  if (error) {
    if (error) {
      return <ErrorPage message={error?.message} />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  let AccessRouter = [];
  switch (!isLoading && userroll?.data?.role) {
    case Userrole.USER:
      {
        AccessRouter.push(...allRoutes.UserRoleRoute);
      }
      break;

      case Userrole.EMPLOYEE:{
        AccessRouter.push(...allRoutes.EmployeeRoleRoute);

      }break;

    case Userrole.ADMIN: {
      AccessRouter.push(...allRoutes.AdminRoleRoute);
      
    }break;
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Main Navigation Bar */}
      <div className="navbar bg-[#e4dfdf31] backdrop-blur-md shadow-lg">
        <div className="navbar-start flex items-center">
          <FaBars className="text-xl cursor-pointer " onClick={toggleSidebar} />

          <div className="avatar">
            <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-1 ml-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n0zOg9jtsSGeRzYKN4J3HC8sr1z4vy1sIw&s"
                alt="Fast Office Logo"
                className="object-contain"
              />
            </div>
          </div>

          <Link to="/" className="btn btn-ghost text-xl font-bold">
            Fast Office
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>About Us</summary>
                <ul className="w-48 rounded-sm">
                  <li>
                    <Link to="/company">Company</Link>
                  </li>
                  <li>
                    <Link to="/work">How We Work</Link>
                  </li>
                  <li>
                    <Link to="/team">The Team</Link>
                  </li>
                  <li>
                    <Link to="/office_section">Office Section</Link>
                  </li>
                  <li>
                    <Link to="/licence">Running Company</Link>
                  </li>
                  <li>
                    <Link to="/terms_and_condition">Terms And Conditions</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link
                to="/fast_office_product"
                onClick={() => scrollToSection("our-work")}>
                Office Section
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection("services")}>Services </Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {user?.emailVerified && user?.email ? (
            <>
              <h1 className="text-xl mr-5">{user?.displayName}</h1>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={
                        user?.photoURL === null
                          ? "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                          : user?.photoURL
                      }
                      alt="profile"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/profile" className="justify-between">
                      <div className="flex m-1">
                        <CgProfile className="text-xl mr-2" />
                        <span>Profile</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/chnage_password">
                      <div className="flex m-1">
                        <MdOutlinePassword className="text-xl mr-2" />
                        <span>Change Password</span>
                      </div>
                    </Link>
                  </li>
                  {/* /new_products/reset_password */}
                  <li>
                    <Link to="/delete_account">
                      <div className="flex m-1">
                        <MdAutoDelete className="text-xl mr-2" />
                        <span>Delete Account</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handelLogOut}
                      className="btn btn-error btn-outline btn-sm rounded">
                      <RiLogoutCircleRLine className="text-xl text-gray-700" />
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost ">
                LogIn
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <section
        className={`fixed top-0 left-0 px-3 h-full bg-white transition-transform duration-300 ease-in-out overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "275px", marginTop: "65px" }}>
        <div className="py-5 flex justify-between items-center">
          <div className="avatar">
            <div className="w-32 h-10 rounded-full bg-white overflow-hidden p-1 ml-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KuAZFQnRA02iyMkG5AnXXE-OGwJEvwUQlw&s"
                alt="Fast Office Logo"
                className="object-contain"
              />
            </div>
          </div>
          <FaTimes className="text-xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <hr />
        <h2 className="text-xl font-bold mt-2 text-gray-500">
          {userroll?.data?.role}
        </h2>
        <hr className="border-gray-700 border-solid" />
        {AccessRouter?.map((route, index) => (
          <React.Fragment key={index}>
            {/* Top-Level Links */}
            {route.icon && route.name && route.path ? (
              <Link
                to={route.path}
                className="flex gap-5 mt-5 hover:bg-black hover:text-white py-3 rounded-lg px-5">
                {route.icon}
                <h3>{route.name}</h3>
              </Link>
            ) : null}

            {/* Categories */}
            {route?.categorie?.map((category, catIndex) => (
              <div
                key={catIndex}
                className="collapse group hover:bg-black hover:text-white mt-3 collapse-arrow bg-gray-100 rounded-lg shadow-lg">
                <input
                  type="checkbox"
                  id={`category-${catIndex}`}
                  className="peer hidden"
                />
                <label
                  htmlFor={`category-${catIndex}`}
                  className="collapse-title flex items-center gap-3 font-semibold px-4 py-3 cursor-pointer">
                  <MdFormatListNumbered className="text-3xl" />
                  <h2 className="text-xl">{category.categorie_name}</h2>
                </label>
                <div className="collapse-content peer-checked:block hidden">
                  <ul className="ml-8 mt-2 space-y-3">
                    {category.categorie_routes.map((subRoute, subIndex) => (
                      <li key={subRoute?.path || subIndex}>
                        <NavLink
                          to={subRoute?.path}
                          className="text-lg m-2 hover:text-red-500 transition duration-300"
                          style={({ isActive }) => ({
                            color: isActive ? "red" : "",
                            textDecoration: isActive ? "underline" : "",
                          })}>
                          {subRoute.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};

export default DashboardSidebar;
