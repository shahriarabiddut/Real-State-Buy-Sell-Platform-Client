import React from "react";
import fp1 from "../../../assets/fp1.jpg";
import fp2 from "../../../assets/fp2.jpg";
import fp3 from "../../../assets/fp3.jpg";
import errorProperty from "../../../assets/errorProperty.jpg";
import profileError from "../../../assets/profileError.png";
import SectionTitle from "../../../components/SectionTitle";

const FeaturedProperties = () => {
  const properties = [
    {
      image: fp1,
      status: "Sale",
      price: "300,000",
      details: {
        beds: 3,
        baths: 2,
        area: "1,878 sqft",
      },
      title: "The Blue Sky Home",
      location: "Oakland",
      agentImage: "images/person_1.jpg",
      agentName: "John Dorf",
      timeAgo: "2 weeks ago",
    },
    {
      image: fp2,
      status: "Sale",
      price: "3,050",
      details: {
        beds: 3,
        baths: 2,
        area: "1,878 sqft",
      },
      title: "The Blue Sky Home",
      location: "Oakland",
      agentImage: "images/person_1.jpg",
      agentName: "John Dorf",
      timeAgo: "2 weeks ago",
    },
    {
      image: fp3,
      status: "Sale",
      price: "300",
      details: {
        beds: 3,
        baths: 2,
        area: "1,878 sqft",
      },
      title: "The Blue Sky Home",
      location: "Oakland",
      agentImage: "images/person_1.jpg",
      agentName: "John Dorf",
      timeAgo: "2 weeks ago",
    },
  ];
  const handleImageError = (e, imageError) => {
    e.target.src = imageError;
  };

  return (
    <>
      <div className="container mx-auto w-11/12 py-10 lg:-mt-2 lg:py-0">
        <SectionTitle
          title={"Featured Properties"}
          subTitle={"What we offer"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl overflow-hidden rounded-lg"
            >
              <div className=" relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => handleImageError(e, errorProperty)}
                />

                <div className="badge badge-primary absolute top-2 left-2">
                  {property.status}
                </div>
                <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-md shadow-md">
                  <span className="font-bold">৳ {property.price}</span>
                </div>
              </div>
              <div className="p-4">
                <ul className="flex justify-between text-sm text-gray-600 mb-4">
                  <li>{property.details.beds} Beds</li>
                  <li>{property.details.baths} Baths</li>
                  <li>{property.details.area}</li>
                </ul>
                <h3 className="font-bold text-lg mb-1">{property.title}</h3>
                <p className="text-gray-500 text-sm">{property.location}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={property.agentImage}
                      alt={property.agentName}
                      className="w-10 h-10 rounded-full object-cover mr-2"
                      onError={(e) => handleImageError(e, profileError)}
                    />
                    <span className="text-sm font-medium">
                      {property.agentName}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {property.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
