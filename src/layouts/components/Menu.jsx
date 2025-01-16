import React from "react";
import { FaHome, FaMagento } from "react-icons/fa";
import {
  MdDashboard,
  MdOutlineRealEstateAgent,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const Menu = ({ dark }) => {
  const menuCss = ({ isActive }) =>
    `inline-flex items-center w-full text-sm font-semibold ${
      dark ? "hover:text-gray-200" : "hover:text-gray-800"
    } ${isActive ? "border-l-4 pl-1 border-l-firstBg " : ""}`;

  return (
    <div className={`py-4 ${dark ? "text-gray-400" : "text-gray-500"}`}>
      <NavLink
        className={`ml-6 text-xl font-bold font-playWrite ${
          dark ? "text-green-200" : "text-green-800"
        }`}
        to={"/"}
      >
        {import.meta.env.VITE_NAME}
      </NavLink>
      <ul className="mt-6">
        <li className="relative px-6 py-3">
          <NavLink to={`/dashboard`} className={menuCss}>
            <MdDashboard className="text-xl" />
            <span className="ml-4">Dashboard</span>
          </NavLink>
        </li>
        <div className="divider"></div>
        <li className="relative px-6 py-3">
          <NavLink to={`/`} className={menuCss}>
            <FaHome className="text-xl" />
            <span className="ml-4">Home</span>
          </NavLink>
        </li>
        <li className="relative px-6 py-3">
          <NavLink to={`/properties`} className={menuCss}>
            <MdOutlineRealEstateAgent className="text-xl" />
            <span className="ml-4">Properties</span>
          </NavLink>
        </li>
        <li className="relative px-6 py-3">
          <NavLink to={`/agents`} className={menuCss}>
            <FaMagento className="text-xl" />
            <span className="ml-4">Agents</span>
          </NavLink>
        </li>
        <li className="relative px-6 py-3">
          <NavLink to={`/contact`} className={menuCss}>
            <MdOutlineSupportAgent className="text-xl" />
            <span className="ml-4">Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
