import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import place1 from "../../../assets/place-1.jpg";
import place2 from "../../../assets/place-2.jpg";
import place3 from "../../../assets/place-3.jpg";
import { Link } from "react-router-dom";
import placeError from "../../../assets/placeError.jpg";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MostPropertyBasedOnCity = () => {
  const image = [place1, place2, place3];
  const [cities, setCities] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/popularcity").then((res) => setCities(res.data));
  }, []);

  const handleImageError = (e) => {
    e.target.src = placeError;
    e.target.onerror = null;
  };

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto w-11/12 py-20  ">
        <SectionTitle
          title={"Popular City Properties"}
          subTitle={"Properties"}
          color={"black"}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cities.map((city, index) => (
            <Link
              to={`#`}
              key={index}
              className="relative block h-96 rounded-lg shadow-lg overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${image[index]})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-40 flex flex-col justify-end items-start text-white">
                <h3 className="text-3xl md:text-xl font-semibold m-1 p-2 bg-gray-700 rounded-xl uppercase">
                  {city.name}
                </h3>
                <span className="text-xl md:text-sm m-1 p-1 bg-gray-700 rounded-xl">
                  {city.properties} Properties
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPropertyBasedOnCity;
