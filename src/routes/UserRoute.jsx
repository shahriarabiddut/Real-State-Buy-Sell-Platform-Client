import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";

const UserRoute = ({ children }) => {
  const [isRole, isRoleLoading] = useRole();
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading || isRoleLoading) {
    return <Loading />;
  }
  const isUser = isRole === "user" || isRole === "notMentioned";
  console.log(isUser);
  if (user && isUser) {
    return children;
  }
  return <Navigate to={"/auth/login"} state={{ from: location }} replace />;
};

export default UserRoute;
