import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

const AuthLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [load, setLoad] = useState(true);
  // console.log(location.state)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    if (user != null && user?.email) {
      navigate("/");
    }
  }, [user]);
  return (
    <HelmetProvider>
      <Navbar />
      {load == true ? <Loading /> : <Outlet />}
      <Footer />
    </HelmetProvider>
  );
};

export default AuthLayout;
