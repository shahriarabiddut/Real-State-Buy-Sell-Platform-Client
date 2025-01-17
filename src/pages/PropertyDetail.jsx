import React from "react";
import BreadcumbBanner from "../components/BreadcumbBanner";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const PropertyDetail = () => {
  const {
    _id,
    image,
    title,
    minPrice,
    maxPrice,
    status,
    area,
    location,
    agentName,
  } = useLoaderData();
  return (
    <>
      <BreadcumbBanner title={"Property Details"} />
      <div className="py-20 w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-5 justify-start items-start">
          <div className="p-5 w-full md:w-1/3 flex flex-col justify-center items-center md:items-start md:justify-start space-y-3">
            <img
              src={image}
              alt={title}
              className="w-72 h-72 object-cover border-2 rounded-lg"
            />
            <h3
              className={`font-bold text-center font-playWrite text-3xl py-2 mb-1 hover:text-firstBg text-black`}
            >
              {title}
            </h3>
          </div>
          <div className="p-5 w-full md:w-2/3 ">
            <Tabs>
              <TabList className="flex space-x-4 border-b-2 border-gray-200">
                <Tab
                  className="cursor-pointer py-2 px-4 text-lg font-semibold text-gray-600 hover:text-firstBg hover:border-b-2 hover:border-blue-500"
                  selectedClassName="text-firstBg border-b-2 border-firstBg"
                >
                  Details
                </Tab>
                <Tab
                  className="cursor-pointer py-2 px-4 text-lg font-semibold text-gray-600 hover:text-firstBg hover:border-b-2 hover:border-blue-500"
                  selectedClassName="text-firstBg border-b-2 border-firstBg"
                >
                  User Reviews
                </Tab>
              </TabList>

              <TabPanel>
                <div className="p-6 bg-gray-100 rounded-lg mt-4 space-y-2">
                  <h2 className="text-xl text-gray-900">
                    Location : {location}
                  </h2>
                  <h2 className="text-xl text-gray-900">
                    Price : {minPrice} - {maxPrice}
                  </h2>
                  <h2 className="text-xl text-gray-900">Size : {area} sqft.</h2>
                  <h2 className="text-xl text-gray-900">
                    Agent : {agentName}{" "}
                  </h2>
                </div>
                <div className=" rounded-lg mt-4 space-y-2">
                  <button className="btn btn-block btn-accent text-white text-xl">
                    Add To Wishlist
                  </button>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="p-6 bg-gray-100 rounded-lg mt-4 space-y-2">
                  <h2>User Reviews</h2>
                </div>
                <div className=" rounded-lg mt-4 space-y-2">
                  <button className="btn btn-block btn-primary text-white text-xl">
                    Add A Review
                  </button>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
