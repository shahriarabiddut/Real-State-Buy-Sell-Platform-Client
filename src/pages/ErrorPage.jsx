import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import error404 from "../assets/404.png";

const ErorPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Page Not Found | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 py-10">
        <img src={error404} alt="Error" className=" h-[80vh]" />
        <Link
          to="/"
          className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg flex gap-4 items-center"
        >
          <FaHome></FaHome> Home
        </Link>
      </div>
    </HelmetProvider>
  );
};

export default ErorPage;
