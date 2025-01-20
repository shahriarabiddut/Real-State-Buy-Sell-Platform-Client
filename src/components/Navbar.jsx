import React, { useEffect, useState } from "react";
import { FaBars, FaDoorClosed, FaUser } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import profileError from "../assets/profileError.png";
import { MdDashboard } from "react-icons/md";
import useRole from "../hooks/useRole";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const authPath = location.pathname.includes("/auth");
  const cssClass =
    "cursor-pointer rounded-xl hover:border-b-2 hover:border-white p-2";
  const { user, logOut, showToast, loading } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const handleLogout = () => {
    logOut()
      .then(() => showToast("Logged Out Successfully!", "info"))
      .catch((error) => console.log(error));
  };
  const handleImageError = (e, imageError) => {
    e.target.src = imageError;
    e.target.onerror = null;
  };
  // Get the User Role
  const [isRole] = useRole();
  // console.log(isRole);

  //
  const cssUser = `inline-flex gap-3 items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-800 hover:text-white`;
  const links = (
    <>
      <li>
        <NavLink className={cssClass} to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={cssClass}
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/agents"}
          className={cssClass}
          onClick={() => setIsOpen(false)}
        >
          Agent
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/services"}
          className={cssClass}
          onClick={() => setIsOpen(false)}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/properties"}
          className={cssClass}
          onClick={() => setIsOpen(false)}
        >
          All Properties
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/contact"}
          className={cssClass}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="relative">
            <button
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none inline-flex items-center gap-2 border-2 -mt-[6px] p-1"
              onClick={toggleProfile}
            >
              <img
                className="object-cover w-8 h-8 rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
                onError={(e) => handleImageError(e, profileError)}
                aria-hidden="true"
              />
              <span className="truncate w-32 block">
                {user?.displayName?.length > 12
                  ? `${user.displayName.slice(0, 12)}...`
                  : user?.displayName}{" "}
              </span>
            </button>
            <div>
              {isProfileOpen && (
                <ul
                  className={`absolute right-0 w-36 md:w-44 p-2 mt-5 space-y-2 border rounded-md shadow-md transition-all duration-300 ease-in-out transform  text-gray-600 bg-white border-gray-100`}
                  aria-label="submenu"
                >
                  <li className="flex">
                    {isRole === "admin" && (
                      <Link className={cssUser} to={`/dashboard/adminHome`}>
                        <MdDashboard />
                        <span>Dashboard</span>
                      </Link>
                    )}
                    {isRole === "agent" && (
                      <Link className={cssUser} to={`/dashboard/agentHome`}>
                        <MdDashboard />
                        <span>Dashboard</span>
                      </Link>
                    )}
                    {isRole === "user" && (
                      <Link className={cssUser} to={`/dashboard/userHome`}>
                        <MdDashboard />
                        <span>Dashboard</span>
                      </Link>
                    )}
                    {isRole === "notMentioned" && (
                      <Link className={cssUser} to={`/chosePurpose`}>
                        <MdDashboard />
                        <span>Chose Purpose</span>
                      </Link>
                    )}
                  </li>
                  <li className="flex">
                    <button className={cssUser} onClick={handleLogout}>
                      <FaDoorClosed />
                      <span>Log out</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink className={cssClass} to={"/auth/login"}>
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
          authPath
            ? "bg-firstBg shadow-md py-2"
            : isScrolled
            ? "bg-firstBg shadow-md py-2"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-3">
          <NavLink
            className={`text-3xl font-bold font-playWrite text-white`}
            to={"/"}
          >
            {import.meta.env.VITE_NAME}
          </NavLink>
          <ul
            className={`hidden text-xl lg:flex space-x-1 font-poppins text-white `}
          >
            {links}
          </ul>
          <button
            className="cursor-pointer bg-slate-100 p-2 rounded-xl lg:hidden flex items-center space-x-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sm:text-xl md:text-2xl">
              {" "}
              {isOpen ? "X" : <FaBars />}{" "}
            </span>
          </button>
        </div>
        {/* Mobile Nav */}
        <div className="lg:hidden flex">
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 ease-out"
                : "translate-x-full opacity-0 ease-in "
            } font-poppins bg-green-300 mt-5 md:mt-6 absolute top-16 right-0 mx-3 my-2 z-10 rounded-xl w-1/2 h-auto p-3 transition-transform  duration-500 `}
          >
            <ul className="list-none flex flex-col justify-center items-center gap-3">
              {links}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
