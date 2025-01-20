import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  // Scrolling To Top
  const { pathname } = useLocation();
  // console.log(pathname);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  //
  return (
    <>
      <HelmetProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default Main;
