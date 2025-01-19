import React, { useEffect } from "react";
import BreadcumbBanner from "../../components/BreadcumbBanner";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import PropertyCard from "../../components/PropertyCard";
import SectionTitle from "../../components/SectionTitle";
import useProperty from "../../hooks/useProperty";
import SearchLocation from "./SearchLocation";
import { useLocation } from "react-router-dom";

const PropertiesSearch = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const keywords = {
    minPrice: params.get("minPrice"),
    maxPrice: params.get("maxPrice"),
    location: params.get("location"),
    minsize: params.get("minsize"),
  };
  //   console.log(keywords, search);
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
  } = useProperty({
    admin: true,
    home: true,
    advertise: false,
    sort: "",
  });
  const handleImageError = (e, imageError) => {
    e.target.src = imageError;
  };
  useEffect(() => {
    setFilters(search);
  }, []);
  return (
    <>
      <BreadcumbBanner title={"Properties"} />
      <SearchLocation filters={keywords} setFilters={setFilters} />
      <section className="container mx-auto w-11/12 py-20 lg:-mt-24 lg:py-10 lg:mb-14">
        <SectionTitle
          title={" Properties"}
          subTitle={"What we offer"}
          color="black"
        />

        <div className="flex justify-center flex-col">
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

export default PropertiesSearch;
