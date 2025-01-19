import React from "react";
import { Link } from "react-router-dom";
import errorProperty from "../assets/errorProperty.jpg";
import fp1 from "../assets/fp1.jpg";
import fp2 from "../assets/fp2.jpg";
import fp3 from "../assets/fp3.jpg";
import profileError from "../assets/profileError.png";
import BreadcumbBanner from "../components/BreadcumbBanner";
import SectionTitle from "../components/SectionTitle";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import PropertyCard from "../components/PropertyCard";
import useProperty from "../hooks/useProperty";
import Pagination from "../components/Pagination";

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
  } = useProperty({ admin: true, home: true, advertise: false });
  const handleImageError = (e, imageError) => {
    e.target.src = imageError;
  };
  return (
    <>
      <BreadcumbBanner title={"Properties"} />
      <SearchBar />
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
                {properties.length === 0 ? (
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
              {properties.length > 0 && (
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
