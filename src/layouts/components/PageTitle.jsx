import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title, subTitle, color = "black" }) => {
  return (
    <>
      <Helmet>
        <title>
          {title} | {import.meta.env.VITE_NAME}
        </title>
      </Helmet>
      <div className="text-center mt-10 mb-8">
        <span className="text-green-500 text-lg font-semibold font-playWrite py-5">
          --- {subTitle} ---
        </span>
        <h2
          className={`text-4xl md:text-5xl font-bold font-poppins py-5 text-${color}`}
        >
          {title}
        </h2>
      </div>
    </>
  );
};

export default PageTitle;
