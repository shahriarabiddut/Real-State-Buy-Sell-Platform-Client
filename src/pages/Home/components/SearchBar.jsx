import React from "react";
import { FaGreaterThan, FaLessThan, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
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
    const queryParams = new URLSearchParams(keywords).toString();
    // console.log(queryParams);
    navigate(`/propertySearch?${queryParams}`);
  };

  return (
    <section className="lg:-top-24 lg:relative lg:z-20 bg-gray-800 lg:bg-transparent">
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
                      name="minPrice"
                      placeholder="Min Price"
                      className="input input-bordered w-full pl-10"
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
                      name="maxPrice"
                      placeholder="Highest Price"
                      className="input input-bordered w-full pl-10"
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
                      //   onChange={handleSubmit}
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
      </div>
    </section>
  );
};

export default SearchBar;
