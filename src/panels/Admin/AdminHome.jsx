import React from "react";
import { Helmet } from "react-helmet-async";
import { FaUsers } from "react-icons/fa";

const AdminHome = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {/* Card 1 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="p-3 mr-4 bg-orange-100 rounded-full dark:bg-orange-500">
            <FaUsers />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Total clients
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              6389
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="p-3 mr-4 bg-green-100 rounded-full dark:bg-green-500">
            <FaUsers />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Account balance
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              $46,760.89
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="p-3 mr-4 bg-blue-100 rounded-full dark:bg-blue-500">
            <FaUsers />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              New sales
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              376
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="p-3 mr-4 bg-teal-100 rounded-full dark:bg-teal-500">
            <FaUsers />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Pending contacts
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              35
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
