import React from "react";
import profileError from "../../../assets/profileError.png";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";

const Agents = () => {
  const agents = [
    {
      name: "Carlos Henderson",
      image: profileError,
      properties: "10",
    },
    {
      name: "Mike Bochs",
      image: profileError,
      properties: "10",
    },
    {
      name: "Jessica Moore",
      image: profileError,
      properties: "10",
    },
    {
      name: "Sarah Geronimo",
      image: profileError,
      properties: "10",
    },
  ];

  return (
    <>
      <section className="container mx-auto py-20 w-11/12">
        <SectionTitle
          title={"Our Agents"}
          subTitle={"Meet our expert agents"}
          color={"black"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full overflow-hidden rounded-lg relative group">
                <img
                  src={agent.image}
                  className="w-full h-96 object-cover transition-transform duration-300 transform group-hover:scale-110"
                  alt={agent.name}
                />
                <div className="absolute inset-0 flex flex-col justify-end items-start text-white">
                  <h3 className="text-lg font-semibold text-gray-800">
                    <Link
                      to={``}
                      className="p-2 rounded-lg bg-white text-lg text-black hover:bg-firstBg hover:text-white m-2"
                    >
                      {agent.name}
                    </Link>
                  </h3>
                  <p className="p-2 rounded-lg bg-white text-xs text-black m-2">
                    {agent.properties} Properties
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Agents;
