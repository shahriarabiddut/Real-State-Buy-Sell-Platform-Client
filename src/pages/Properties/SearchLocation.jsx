import React, { useState } from "react";
import { FaGreaterThan, FaLessThan, FaSearch } from "react-icons/fa";

const SearchLocation = ({ filters, setFilters }) => {
  const [newFilters, setNewFilters] = useState(filters);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const minPrice = form.minPrice == undefined ? "" : form.minPrice.value;
    const maxPrice = form.maxPrice == undefined ? "" : form.maxPrice.value;
    const size = form.size.value;
    const keywords = {
      minPrice: minPrice,
      maxPrice: maxPrice,
      location: location,
      minsize: size,
    };
    // console.log(keywords);
    const queryString = Object.entries(keywords)
      .filter(([key, value]) => value)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    // console.log(queryString);
    setFilters(queryString);
    setNewFilters(keywords);
  };

  return (
    <>
      <section className="lg:-top-24 lg:relative lg:z-20 bg-gray-800 lg:bg-transparent ">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full lg:w-10/12 p-6 bg-gray-800 lg:rounded-lg shadow-md">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-xl text-white font-medium mb-2 ">
                      Min Price
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FaGreaterThan />
                      </span>
                      <input
                        type="number"
                        min={1}
                        name="minPrice"
                        placeholder="Min Price"
                        className="input input-bordered w-full pl-10"
                        defaultValue={newFilters?.minPrice}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xl text-white font-medium mb-2 ">
                      Max Price
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FaLessThan />
                      </span>
                      <input
                        type="number"
                        min={1}
                        name="maxPrice"
                        placeholder="Highest Price"
                        className="input input-bordered w-full pl-10"
                        defaultValue={newFilters?.maxPrice}
                      />
                    </div>
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
                        name="location"
                        defaultValue={newFilters?.location}
                        className="input input-bordered w-full pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xl text-white font-medium mb-2">
                      Size
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FaSearch />
                      </span>
                      <input
                        type="text"
                        placeholder="(sqft) minimum size"
                        name="size"
                        defaultValue={newFilters?.minsize}
                        className="input input-bordered w-full pl-10"
                      />
                    </div>
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
          <div className="flex justify-center">
            {newFilters !== "" && (
              <>
                <div className="py-2 w-full lg:w-10/12 p-6 bg-slate-300 lg:rounded-lg shadow-md">
                  <p className="w-11/12 mx-auto font-semibold font-poppins">
                    Filters :
                    {newFilters?.location && (
                      <>
                        Location&nbsp;
                        <span className="uppercase">
                          {newFilters.location}
                        </span>{" "}
                        .
                      </>
                    )}
                    {newFilters?.minsize && (
                      <> Min Size {newFilters.minsize} sqft.</>
                    )}
                    {newFilters?.minPrice && (
                      <> Min Price {newFilters.minPrice} .</>
                    )}
                    {newFilters?.maxPrice && (
                      <> Max Price {newFilters.maxPrice} .</>
                    )}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchLocation;
