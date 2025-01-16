import React from "react";
import { Link } from "react-router-dom";

const Agent = ({ agent }) => {
  return (
    <div className="flex flex-col items-center">
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
  );
};

export default Agent;
