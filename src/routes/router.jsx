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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import UserRoute from "./UserRoute";
import Profile from "../panels/Profile";
import UpdateProfile from "../panels/UpdateProfile";
import AddProperty from "../panels/Agent/AddProperty";
import MyProperty from "../panels/Agent/MyProperty";
import SoldProperties from "../panels/Agent/SoldProperties";
import RequestedProperty from "../panels/Agent/RequestedProperty";
import EditProperty from "../panels/Agent/EditProperty";

const urlHome = import.meta.env.VITE_URL;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/agents", element: <Agents /> },
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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      // Common Routes
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/profile/update",
        element: <UpdateProfile />,
      },
      // User Routes
      {
        path: "/dashboard",
        element: (
          <UserRoute>
            <UserHome />
          </UserRoute>
        ),
      },
      // Agent Routes
      {
        path: "/dashboard/agentHome",
        element: (
          <AgentRoute>
            <AgentHome />
          </AgentRoute>
        ),
      },
      {
        path: "/dashboard/agent/addProperty",
        element: (
          <AgentRoute>
            <AddProperty />
          </AgentRoute>
        ),
      },
      {
        path: "/dashboard/agent/updateProperty/:id",
        element: (
          <AgentRoute>
            <EditProperty />
          </AgentRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/property/${params.id}`),
      },
      {
        path: "/dashboard/agent/myProperties",
        element: (
          <AgentRoute>
            <MyProperty />
          </AgentRoute>
        ),
      },
      {
        path: "/dashboard/agent/soldProperties",
        element: (
          <AgentRoute>
            <SoldProperties />
          </AgentRoute>
        ),
      },
      {
        path: "/dashboard/agent/requestedProperties",
        element: (
          <AgentRoute>
            <RequestedProperty />
          </AgentRoute>
        ),
      },
      // Admin Routes
      {
        path: "/dashboard/adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
