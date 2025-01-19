import React from "react";
import PropertyCard from "../../../components/PropertyCard";
import SectionTitle from "../../../components/SectionTitle";
import useProperty from "../../../hooks/useProperty";

const FeaturedProperties = () => {
  const { properties, isFetched } = useProperty({
    admin: true,
    home: true,
    advertise: true,
  });
  const handleImageError = (e, imageError) => {
    e.target.src = imageError;
  };

  return (
    <>
      <section className="container mx-auto w-11/12 py-20 lg:-mt-24 lg:py-10 lg:mb-14 ">
        <SectionTitle
          title={"Featured Properties"}
          subTitle={"What we offer"}
          color="black"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-2">
          {properties.length === 0 ? (
            <p>No Featured Properties found.</p>
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
      </section>
    </>
  );
};

export default FeaturedProperties;
