import React from "react";
import { FaFileInvoiceDollar, FaHome, FaMagento, FaUser } from "react-icons/fa";
import {
  MdAddHome,
  MdDashboard,
  MdHomeWork,
  MdManageAccounts,
  MdOutlineRealEstateAgent,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import useRole from "../../hooks/useRole";
import { TbHomeQuestion, TbHomeShield } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";

const Menu = ({ dark }) => {
  const menuCss = ({ isActive }) =>
    `inline-flex items-center w-full text-sm font-semibold ${
      dark ? "hover:text-gray-200" : "hover:text-gray-800"
    } ${isActive ? "border-l-4 pl-1 border-l-firstBg " : ""}`;

  // Get the User Role
  const [isRole] = useRole();

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
        {isRole === "user" && (
          <li className="relative px-6 py-3">
            <NavLink to={`/dashboard`} className={menuCss}>
              <MdDashboard className="text-xl" />
              <span className="ml-4">Dashboard</span>
            </NavLink>
          </li>
        )}
        {isRole === "agent" && (
          <>
            <li className="relative px-6 py-3">
              <NavLink to={`/dashboard/agentHome`} className={menuCss}>
                <MdDashboard className="text-xl" />
                <span className="ml-4">Dashboard</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink to={`/dashboard/agent/addProperty`} className={menuCss}>
                <MdAddHome className="text-xl" />
                <span className="ml-4">Add Property</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink to={`/dashboard/agent/myProperties`} className={menuCss}>
                <MdHomeWork className="text-xl" />
                <span className="ml-4">My Added Properties</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink
                to={`/dashboard/agent/soldProperties`}
                className={menuCss}
              >
                <FaFileInvoiceDollar className="text-xl" />
                <span className="ml-4">My Sold Properties</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink
                to={`/dashboard/agent/requestedProperties`}
                className={menuCss}
              >
                <TbHomeQuestion className="text-xl" />
                <span className="ml-4">Requested Properties</span>
              </NavLink>
            </li>
          </>
        )}
        {isRole === "admin" && (
          <>
            <li className="relative px-6 py-3">
              <NavLink to={`/dashboard/adminHome`} className={menuCss}>
                <MdDashboard className="text-xl" />
                <span className="ml-4">Dashboard</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink to={`/dashboard/manageProperties`} className={menuCss}>
                <TbHomeShield className="text-xl" />
                <span className="ml-4">Manage Properties</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink to={`/dashboard/manageUsers`} className={menuCss}>
                <MdManageAccounts className="text-xl" />
                <span className="ml-4">Manage Users</span>
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink to={`/dashboard/manageReviews`} className={menuCss}>
                <VscPreview className="text-xl" />
                <span className="ml-4">Manage Reviews</span>
              </NavLink>
            </li>
          </>
        )}
        <div className={`divider ${dark ? "" : ""}`}></div>
        <li className="relative px-6 py-3">
          <NavLink to={`/dashboard/profile`} className={menuCss}>
            <FaUser className="text-xl" />
            <span className="ml-4">Profile</span>
          </NavLink>
        </li>
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
