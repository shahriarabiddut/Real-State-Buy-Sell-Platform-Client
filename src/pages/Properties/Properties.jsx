import React from "react";
import BreadcumbBanner from "../../components/BreadcumbBanner";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import PropertyCard from "../../components/PropertyCard";
import SectionTitle from "../../components/SectionTitle";
import useProperty from "../../hooks/useProperty";
import SearchLocation from "./SearchLocation";
import { SiLevelsdotfyi } from "react-icons/si";

const Properties = () => {
  const {
    properties,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    isFetched,
    pages,
    refetch,
    count,
    filters,
    setFilters,
    setSort,
  } = useProperty({
    admin: true,
    home: true,
    advertise: false,
  });
  const handleImageError = (e, imageError) => {
    e.target.src = imageError;
  };
  return (
    <>
      <BreadcumbBanner title={"Properties"} />
      <SearchLocation filters={filters} setFilters={setFilters} />
      <section className="container mx-auto w-11/12 py-20 lg:-mt-24 lg:py-10 lg:mb-14">
        <SectionTitle
          title={" Properties"}
          subTitle={"What we offer"}
          color="black"
        />

        <div className="flex justify-center flex-col">
          <div className="flex flex-row items-center justify-end py-2">
            <button
              className={`btn btn-success text-white`}
              onClick={() => setSort(1)}
            >
              Sort By Price <SiLevelsdotfyi />
            </button>
          </div>
          {!isFetched ? (
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-2">
                {count === 0 ? (
                  <p>No properties found.</p>
                ) : (
                  properties.map((property, index) => (
                    <PropertyCard
                      key={index}
                      property={property}
                      dark={false}
                      userType={"home"}
                    />
                  ))
                )}
              </div>

              {/* Pagination */}
              {count > 0 && (
                <Pagination
                  setItemsPerPage={setItemsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  pages={pages}
                  itemsPerPage={itemsPerPage}
                />
              )}
            </>
          )}
        </div>
        {/* TODO: Using Swiper JS Slide 12 properties */}
      </section>
    </>
  );
};

export default Properties;
