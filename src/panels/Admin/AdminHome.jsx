import React from "react";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      AdminHome
    </div>
  );
};

export default AdminHome;
