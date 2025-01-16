import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const authPath = location.pathname.includes("/auth");
  const cssClass =
    "cursor-pointer rounded-xl hover:border-b-2 hover:border-white p-2";
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
          to={"/agent"}
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
          Properties
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
      <li>
        <NavLink
          to={"/auth/login"}
          className={cssClass}
          onClick={() => setIsOpen(false)}
        >
          Login
        </NavLink>
      </li>
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
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
          authPath
            ? "bg-firstBg shadow-md py-1 bg-opacity-95"
            : isScrolled
            ? "bg-firstBg shadow-md py-1 bg-opacity-95"
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
            className={`hidden text-xl md:flex space-x-1 font-poppins text-white `}
          >
            {links}
          </ul>
          <button
            className="cursor-pointer bg-slate-100 p-2 rounded-xl md:hidden flex items-center space-x-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "X" : <FaBars />}
          </button>
        </div>
        {/* Mobile Nav */}
        <div className="">
          <div
            className={`${
              isOpen ? "flex justify-center" : "hidden"
            } font-paaji bg-blue-200 mt-3 absolute top-16 right-0 mx-3 my-2 z-10 rounded-xl w-1/3 p-3`}
          >
            <ul className="list-none flex flex-col justify-center items-center gap-3 ">
              {links}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
