import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  // Chose User Role
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure
      .get(`/user/${user?.email}`)
      .then((response) => {
        // console.log(response.data.role, user?.email);
        if (
          response.data.role != null &&
          response.data.role === "notMentioned"
        ) {
          navigate("/chosePurpose");
        }
      })
      .catch((error) => {
        // console.error("Error updating user role:", error);
      });
  }, []);
  //
  if (user) {
    return children;
  }
  return <Navigate to={"/auth/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
