import React from "react";
import headerImg from "../assets/Main/headerBanner.jpg";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const BreadcumbBanner = ({ title }) => {
  return (
    <>
      <section
        className="relative h-[80vh] pt-10"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full container mx-auto w-11/12 text-white gap-4">
          <h2 className="capitalize  text-gray-400 inline-flex gap-1 items-center justify-center">
            <Link to={"/"} className="text-xl">
              Home
            </Link>{" "}
            <FaChevronRight className="text-xs mt-1" />{" "}
            <span className="text-xl">{title}</span>
          </h2>
          <h1 className="text-4xl md:text-6xl font-poppins mb-4">{title}</h1>
        </div>
      </section>
    </>
  );
};

export default BreadcumbBanner;
