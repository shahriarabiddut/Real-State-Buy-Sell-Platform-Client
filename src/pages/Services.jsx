import React from "react";
import BreadcumbBanner from "../components/BreadcumbBanner";
import FourCards from "../components/FourCards";
import WorkFlow from "../components/WorkFlow";
import SpecialServices from "../components/SpecialServices";

const Services = () => {
  return (
    <>
      <BreadcumbBanner title={"Services"} />
      <FourCards home={false} />
      <WorkFlow />
      <SpecialServices />
    </>
  );
};

export default Services;
