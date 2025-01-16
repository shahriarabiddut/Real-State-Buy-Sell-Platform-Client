import React from "react";
import BreadcumbBanner from "../components/BreadcumbBanner";
import About from "../components/About";
import UserReviews from "../components/UserReviews";

const AboutUs = () => {
  return (
    <div>
      <BreadcumbBanner title={"About Us"} />
      <About />
      <UserReviews />
    </div>
  );
};

export default AboutUs;
