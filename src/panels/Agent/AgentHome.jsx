import React from "react";
import { Helmet } from "react-helmet-async";

const AgentHome = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      AgentHome
    </div>
  );
};

export default AgentHome;
