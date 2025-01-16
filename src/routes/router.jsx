import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs";
import Agents from "../pages/Agents";
import Services from "../pages/Services";
import Properties from "../pages/Properties";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserHome from "../panels/User/UserHome";
import AgentHome from "../panels/Agent/AgentHome";
import AdminHome from "../panels/Admin/AdminHome";
import ChosePurpose from "../pages/ChosePurpose";

const urlHome = import.meta.env.VITE_URL;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/agent", element: <Agents /> },
      { path: "/services", element: <Services /> },
      { path: "/properties", element: <Properties /> },
      { path: "/contact", element: <Contact /> },
      { path: "/chosePurpose", element: <ChosePurpose /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/auth", element: <Login /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <UserHome /> },
      { path: "/dashboard/agentHome", element: <AgentHome /> },
      { path: "/dashboard/adminHome", element: <AdminHome /> },
    ],
  },
]);

export default router;
