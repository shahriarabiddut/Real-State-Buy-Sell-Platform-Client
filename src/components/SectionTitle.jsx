import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-8">
      <span className="text-green-500 text-lg font-semibold font-playWrite py-5">
        ---------- {subTitle} ----------
      </span>
      <h2 className="text-4xl md:text-5xl font-bold font-poppins py-5">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
