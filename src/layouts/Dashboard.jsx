import React, { useState } from "react";
import { FaWpforms } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  const [dark, setDark] = useState(false);
  const menu = (
    <>
      <div className={`py-4 ${dark ? "text-gray-400" : "text-gray-500"}`}>
        <Link
          className={`ml-6 text-xl font-bold font-playWrite ${
            dark ? "text-green-200" : "text-green-800"
          }`}
          to={"/"}
        >
          {import.meta.env.VITE_NAME}
        </Link>
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
            <Link
              to="/forms"
              className={`inline-flex items-center w-full text-sm font-semibold  ${
                dark ? "hover:text-gray-200" : "hover:text-gray-800 "
              }`}
            >
              <FaWpforms className="text-xl" />
              <span className="ml-4">Forms</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <div className={`flex h-screen ${dark ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Desktop sidebar */}
      <aside
        className={`z-20 hidden w-64 overflow-y-auto md:block flex-shrink-0 border-r-2 ${
          dark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className={`py-4 ${dark ? "text-gray-800" : "text-gray-500"}`}>
          {menu}
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 w-full">
        {/* Mobile Sidebar */}
        <Sidebar menu={menu} dark={dark} setDark={setDark} />
        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto">Dashboard</div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
