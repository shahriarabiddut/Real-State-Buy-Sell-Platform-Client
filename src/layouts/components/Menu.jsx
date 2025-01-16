import React from "react";
import { FaWpforms } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Menu = ({ dark }) => {
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
          <span
            className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          ></span>
          <NavLink
            to={`/dashboard`}
            className={`inline-flex items-center w-full text-sm font-semibold ${
              dark ? "hover:text-gray-200" : "hover:text-gray-800"
            }`}
          >
            <MdDashboard className="text-xl" />
            <span className="ml-4">Dashboard</span>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li className="relative px-6 py-3">
          <NavLink
            to="/forms"
            className={`inline-flex items-center w-full text-sm font-semibold  ${
              dark ? "hover:text-gray-200" : "hover:text-gray-800 "
            }`}
          >
            <FaWpforms className="text-xl" />
            <span className="ml-4">Forms</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
