import React, { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaBell,
  FaCog,
  FaDoorClosed,
  FaMoon,
  FaSun,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { CgClose } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";
import profileError from "../../assets/profileError.png";

const Sidebar = () => {
  const { user, logOut, showToast, dark, setDark } = useAuth();
  const handleLogout = () => {
    logOut()
      .then(() => showToast("Logged Out Successfully!", "info"))
      .catch((error) => console.log(error));
  };
  const handleImageError = (e) => {
    e.target.src = profileError;
    e.target.onerror = null;
  };
  //
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  const toggleTheme = () => setDark(!dark);
  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  //   On Clicking Outside Close All Opened Tabs
  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const sideMenuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsProfileOpen(false);
    }
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setIsNotificationOpen(false);
    }
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
      setIsSideMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        className={`z-10 py-4  shadow-md ${dark ? "bg-gray-800" : "bg-white"} `}
      >
        <div
          className={`container flex items-center justify-between md:justify-end h-full px-6 mx-auto  ${
            dark ? "text-green-300" : "text-green-600"
          }`}
        >
          <button
            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none"
            onClick={toggleSideMenu}
          >
            {!isSideMenuOpen ? <FaBars /> : <CgClose />}
          </button>
          <ul className="flex items-end flex-shrink-0 space-x-6 ">
            {/* <!-- Theme toggler --> */}
            <li className="flex">
              <button
                className="rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={toggleTheme}
              >
                {dark ? <FaSun /> : <FaMoon />}
              </button>
            </li>
            {/* <!-- Notifications menu --> */}
            <li className="relative">
              <button
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={toggleNotification}
              >
                <FaBell />
                {/* <!-- Notification badge --> */}
                <span
                  aria-hidden="true"
                  className={` absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2  rounded-full ${
                    dark ? "border-gray-800" : "border-white"
                  }`}
                ></span>
              </button>
              <div>
                {isNotificationOpen && (
                  <ul
                    ref={notificationRef}
                    x-transition:leave="transition ease-in duration-150"
                    x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0"
                    className={`absolute z-10 right-0 w-56 p-2 mt-5 space-y-2 border rounded-md shadow-md ${
                      dark
                        ? "text-gray-300 border-gray-700 bg-gray-700"
                        : "text-gray-600 bg-white border-gray-100"
                    }`}
                  >
                    <li className="flex">
                      <Link
                        className={`inline-flex gap-3 items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md  ${
                          dark
                            ? "hover:bg-gray-800 hover:text-gray-200"
                            : "hover:bg-gray-100 hover:text-gray-800"
                        }`}
                        to="#"
                      >
                        <span>Messages</span>
                        <span
                          className={`inline-flex gap-3 items-center justify-center px-2 py-1 text-xs font-bold leading-none  rounded-full ${
                            dark
                              ? "text-red-100 bg-red-600"
                              : "text-red-600 bg-red-100"
                          }`}
                        >
                          13
                        </span>
                      </Link>
                    </li>
                    <li className="flex">
                      <Link
                        className={`inline-flex gap-3 items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md  ${
                          dark
                            ? "hover:bg-gray-800 hover:text-gray-200"
                            : "hover:bg-gray-100 hover:text-gray-800"
                        }`}
                        to="#"
                      >
                        <span>Sales</span>
                        <span
                          className={`inline-flex gap-3 items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full ${
                            dark
                              ? "text-red-100 bg-red-600"
                              : "text-red-600 bg-red-100"
                          }`}
                        >
                          2
                        </span>
                      </Link>
                    </li>
                    <li className="flex">
                      <Link
                        className={`inline-flex gap-3 items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full ${
                          dark
                            ? "text-red-100 bg-red-600"
                            : "text-red-600 bg-red-100"
                        }`}
                        to="#"
                      >
                        <span>Alerts</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            {/* Profile Menu */}
            <li className="relative">
              <button
                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                aria-label="Account"
                aria-haspopup="true"
                onClick={toggleProfile}
              >
                <img
                  className="object-cover w-6 h-6 rounded-full"
                  src={user.photoURL}
                  onError={(e) => handleImageError(e)}
                  alt={user.displayName}
                  aria-hidden="true"
                />
              </button>
              <div>
                {isProfileOpen && (
                  <ul
                    ref={profileRef}
                    className={`absolute right-0 w-56 p-2 mt-5 space-y-2 border rounded-md shadow-md transition-all duration-300 ease-in-out transform  ${
                      dark
                        ? "border-gray-700 text-gray-300 bg-gray-700"
                        : "text-gray-600 bg-white border-gray-100"
                    }`}
                    aria-label="submenu"
                  >
                    <li className="flex">
                      <Link
                        className={`inline-flex gap-3 items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md ${
                          dark
                            ? "hover:bg-gray-800 hover:text-gray-200"
                            : "hover:bg-gray-100 hover:text-gray-800"
                        }`}
                        to={`/dashboard/profile`}
                      >
                        <FaUser />
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li className="flex">
                      <button
                        className={`inline-flex gap-3 items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md ${
                          dark
                            ? "hover:bg-gray-800 hover:text-gray-200"
                            : "hover:bg-gray-100 hover:text-gray-800"
                        }`}
                        onClick={handleLogout}
                      >
                        <FaDoorClosed />
                        <span>Log out</span>
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
      </header>
      <aside
        ref={sideMenuRef}
        className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto transition-all duration-300 ease-in-out border-r-2 ${
          dark ? "bg-gray-800" : "bg-white"
        } ${
          isSideMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-64 opacity-0"
        } md:hidden`}
      >
        <Menu dark={dark} />
      </aside>
    </>
  );
};

export default Sidebar;
