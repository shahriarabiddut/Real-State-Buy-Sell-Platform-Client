import React from "react";
import about1 from "../../../assets/about.jpg";
import about2 from "../../../assets/about-2.jpg";

const About = () => {
  return (
    <section className="py-20 w-11/12 mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-0">
          <div className="w-full md:w-3/5 grid grid-cols-2 justify-between gap-1">
            <div
              className="w-full md:h-full h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${about1})` }}
            ></div>
            <div
              className="w-full md:h-full h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${about2})` }}
            ></div>
          </div>
          <div className="w-full md:w-2/5 py-8 md:py-16 md:px-4">
            <div className="pr-4">
              <h2 className="text-3xl font-playWrite mb-4 md:text-left text-center">
                {import.meta.env.VITE_NAME}
              </h2>
              <p className="text-base text-gray-700 mb-4 text-justify">
                Welcome to a platform designed to transform the real estate
                experience for both agents and customers. For customers, we
                offer an effortless journey to discover and purchase your dream
                property with tools like intuitive browsing, wishlists, and
                reviews to make informed decisions seamlessly.
              </p>
              <p className="text-base text-gray-700 text-justify">
                For agents, we provide powerful management tools to simplify
                property listings, track sales, and manage customer requests
                efficiently, helping you grow your business and build trust. By
                bridging the gap between buyers and agents, our platform ensures
                transparency, streamlines processes, and creates a smooth,
                rewarding experience for all. Welcome to the future of real
                estate innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
