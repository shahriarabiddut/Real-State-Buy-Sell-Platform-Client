import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { dark } = useAuth();
  return (
    <HelmetProvider>
      <div
        className={`flex min-h-screen ${dark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        {/* Desktop sidebar */}
        <aside
          className={`z-20 hidden w-64 overflow-y-auto md:block flex-shrink-0 border-r-2 ${
            dark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className={`py-4  ${dark ? "text-gray-800" : "text-gray-500"}`}>
            <Menu dark={dark} />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex flex-col flex-1 w-full">
          {/* Mobile Sidebar */}
          <Sidebar />
          {/* Content Section */}
          <main className="">
            <div className="container px-6 mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Dashboard;
