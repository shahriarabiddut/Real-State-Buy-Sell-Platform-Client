import React from "react";
import { Helmet } from "react-helmet-async";

const UserHome = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      UserHome
    </>
  );
};

export default UserHome;
