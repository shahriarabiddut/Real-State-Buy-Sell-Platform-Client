import React from "react";
import headerImg from "../assets/Main/headerBanner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <header
        id="home"
        className="relative h-screen pt-10"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Enables the parallax effect
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col justify-center items-center md:items-start h-full container mx-auto w-11/12 text-white gap-4">
          <h1 className="text-4xl md:text-6xl font-poppins mb-4">
            Find Perfect <br /> House From Your Area.
          </h1>
          <p className="text-xl text-gray-300">
            From as low as ৳10,000,00 , the tranquil Shitalakshya River flows
            near Dhaka, <br /> enriching the area with its natural beauty and
            resources.
          </p>
          <Link to={`/properties`}>
            <button className="btn bg-firstBg border-none hover:bg-white hover:text-firstBg text-white btn-lg">
              View All Properties
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Banner;
