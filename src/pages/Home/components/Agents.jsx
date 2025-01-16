import React from "react";
import profileError from "../../../assets/profileError.png";
import SectionTitle from "../../../components/SectionTitle";
import Agent from "../../../components/Agent";

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
    {
      name: "Sarah Geronimo",
      image: profileError,
      properties: "10",
    },
    {
      name: "Sarah Geronimo",
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
          {agents.splice(0, 4).map((agent, index) => (
            <Agent key={index} agent={agent} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Agents;
