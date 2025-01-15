import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { HelmetProvider } from "react-helmet-async";

const Main = () => {
  const location = useLocation();
  const bannerDifferent = location.pathname == "/";
  console.log(location.pathname);
  return (
    <>
      <HelmetProvider>
        <Navbar />
        {bannerDifferent && <Banner />}
        <Outlet />
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default Main;
