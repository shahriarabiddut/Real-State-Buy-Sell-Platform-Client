import React, { useEffect, useState } from "react";
import PropertyCard from "../../../components/PropertyCard";
import SectionTitle from "../../../components/SectionTitle";
import useProperty from "../../../hooks/useProperty";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FeaturedProperties = () => {
  const [backupProperty, setBackupProperty] = useState([]);
  const { properties, isFetched, count } = useProperty({
    admin: true,
    home: true,
    advertise: true,

    sort: "",
  });
  const handleImageError = (e, imageError) => {
    e.target.src = imageError;
  };
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get("/property?email=&page=0&size=4&check=&adv=")
      .then((res) => {
        // console.log(res.data.result);
        setBackupProperty(res.data.result);
      });
  }, []);

  return (
    <>
      {isFetched && (
        <section className="container mx-auto w-11/12 py-20 lg:-mt-24 lg:py-10 lg:mb-14 ">
          <SectionTitle
            title={"Featured Properties"}
            subTitle={"What we offer"}
            color="black"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-2">
            {count > 0 &&
              properties.map((property, index) => (
                <PropertyCard
                  key={index}
                  property={property}
                  dark={false}
                  userType={"home"}
                />
              ))}
            {count == 0 &&
              backupProperty.map((property, index) => (
                <PropertyCard
                  key={index}
                  property={property}
                  dark={false}
                  userType={"home"}
                />
              ))}
          </div>
        </section>
      )}
    </>
  );
};

export default FeaturedProperties;
