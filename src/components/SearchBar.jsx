import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <section className="lg:-top-24 lg:relative lg:z-20 bg-gray-800 lg:bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12 p-6 bg-gray-800 lg:rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-xl text-white font-medium mb-2 ">
                    Keyword
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FaSearch />
                    </span>
                    <input
                      type="text"
                      placeholder="Keyword"
                      className="input input-bordered w-full pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xl text-white font-medium mb-2">
                    Property Type
                  </label>
                  <select className="select select-bordered w-full">
                    <option>Residence</option>
                    <option>Offices</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xl text-white font-medium mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FaSearch />
                    </span>
                    <input
                      type="text"
                      placeholder="Location"
                      className="input input-bordered w-full pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xl text-white font-medium mb-2">
                    Price Limit
                  </label>
                  <select className="select select-bordered w-full">
                    <option>৳500,000</option>
                    <option>৳600,000</option>
                    <option>৳700,000</option>
                    <option>৳800,000</option>
                    <option>৳900,000</option>
                    <option>৳1,000,000</option>
                    <option>৳2,000,000</option>
                  </select>
                </div>
                <div className="flex items-end sm:col-span-2 lg:col-span-1">
                  <button className="btn bg-firstBg border-none hover:bg-white hover:text-firstBg text-white w-full">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
