import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={`flex h-screen ${dark ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Desktop sidebar */}
      <aside
        className={`z-20 hidden w-64 overflow-y-auto md:block flex-shrink-0 border-r-2 ${
          dark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className={`py-4 ${dark ? "text-gray-800" : "text-gray-500"}`}>
          <Menu dark={dark} />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 w-full">
        {/* Mobile Sidebar */}
        <Sidebar dark={dark} setDark={setDark} />
        {/* Content Section */}
        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
