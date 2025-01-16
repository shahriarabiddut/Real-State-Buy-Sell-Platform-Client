import React from "react";
import {
  FaChartLine,
  FaHandshake,
  FaRegClipboard,
  FaSearch,
} from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { Md360, MdConnectWithoutContact } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import { HiOutlineDocumentText } from "react-icons/hi";

const services = [
  {
    title: "Property Discovery",
    description:
      "Seamlessly browse properties with advanced search, wishlists, and detailed reviews to find your dream home effortlessly.",
    icon: <FaSearch />,
  },
  {
    title: "Agent Tools",
    description:
      "Empowering agents with tools to efficiently manage listings, track sales, and handle customer requests with ease.",
    icon: <FaRegClipboard />,
  },
  {
    title: "Customer Engagement",
    description:
      "Build trust and foster transparency through personalized support, reviews, and streamlined communication.",
    icon: <MdConnectWithoutContact />,
  },
  {
    title: "Transaction Management",
    description:
      "Simplify real estate transactions with tools designed to ensure secure, transparent, and efficient processes for buyers and agents.",
    icon: <GiReceiveMoney />,
  },
  {
    title: "Virtual Tours",
    description:
      "Experience properties remotely with immersive virtual tours, giving you a real feel of your future home.",
    icon: <Md360 />,
  },
  {
    title: "Market Insights",
    description:
      "Stay informed with real-time market trends, property valuations, and neighborhood statistics to make smart decisions.",
    icon: <FaChartLine />,
  },
  {
    title: "Secure Documentation",
    description:
      "Simplify paperwork with secure, digital document management to ensure hassle-free property transactions.",
    icon: <HiOutlineDocumentText />,
  },
  {
    title: "Support Network",
    description:
      "Access a trusted network of legal, financial, and maintenance experts to guide you through every step of your journey.",
    icon: <FaHandshake />,
  },
];

const SpecialServices = () => {
  return (
    <>
      <section className="container mx-auto py-20 w-11/12">
        <SectionTitle
          title={`Special Services`}
          subTitle={"Services"}
          color="black"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="card hover:shadow-lg text-center py-6 px-4 border border-gray-200 rounded-md"
            >
              <div className="text-7xl mx-auto mb-4 text-center text-green-600">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SpecialServices;
