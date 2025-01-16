import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <HelmetProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </HelmetProvider>
  );
};

export default AuthLayout;
