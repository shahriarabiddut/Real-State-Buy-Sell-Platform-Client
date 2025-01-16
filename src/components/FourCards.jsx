import React from "react";
import { BiHome } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { MdRealEstateAgent } from "react-icons/md";

const FourCards = ({ home }) => {
  const secCss = home
    ? "bg-green-500 py-8 lg:pt-36 lg:-top-40 lg:relative "
    : "bg-green-500 py-20 lg:relative ";
  return (
    <section className={secCss}>
      <div className="container mx-auto w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-1">
          <div className="bg-green-600 text-white hover:bg-green-900 text-center p-6 flex flex-col justify-between h-full rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="flex justify-center items-center mb-4">
                <span className="text-4xl text-white">
                  <IoBusiness />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Trusted by Thousands
              </h3>
              <p className="text-sm">
                Thousands of satisfied clients have put their trust in our
                services, ensuring quality and reliability.
              </p>
            </div>
          </div>
          <div className="bg-green-700 text-white hover:bg-green-900 text-center p-6 flex flex-col justify-between h-full rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="flex justify-center items-center mb-4">
                <span className="text-4xl text-white">
                  <BiHome />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Wide Range of Properties
              </h3>
              <p className="text-sm">
                Explore a variety of properties, from residential homes to
                commercial spaces, tailored to your needs.
              </p>
            </div>
          </div>
          <div className="bg-green-700 text-white hover:bg-green-900 text-center p-6 flex flex-col justify-between h-full rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="flex justify-center items-center mb-4">
                <span className="text-4xl text-white">
                  <MdRealEstateAgent />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Financing Made Easy
              </h3>
              <p className="text-sm">
                Our streamlined financing options make property ownership more
                accessible and hassle-free.
              </p>
            </div>
          </div>
          <div className="bg-green-600 text-white hover:bg-green-900 text-center p-6 flex flex-col justify-between h-full rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="flex justify-center items-center mb-4">
                <span className="text-4xl text-white">
                  <FaHandshake />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Locked in Pricing</h3>
              <p className="text-sm">
                Secure pricing with no unexpected surprises, ensuring
                transparency and confidence in your purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourCards;
