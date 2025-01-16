import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/auth/login"} state={{ from: location }} replace />;
};

export default AdminRoute;
