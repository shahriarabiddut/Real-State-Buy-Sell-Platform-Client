import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs";
import Agents from "../pages/Agents";
import Services from "../pages/Services";
import Properties from "../pages/Properties";
import Contact from "../pages/Contact";

const urlHome = import.meta.env.VITE_URL;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1 className="text-red-500">Error! Not Found</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/agent", element: <Agents /> },
      { path: "/services", element: <Services /> },
      { path: "/properties", element: <Properties /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
