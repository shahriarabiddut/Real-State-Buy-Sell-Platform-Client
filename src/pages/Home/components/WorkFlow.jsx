import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import blob from "../../../assets/blob.png";

const WorkFlow = () => {
  return (
    <section className="bg-slate-800 ">
      <div className="container mx-auto w-11/12 py-24">
        <SectionTitle
          title={"How it works"}
          subTitle={"Work flow"}
          color={"white"}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div
              className="flex flex-col items-center justify-center text-2xl font-bold text-white mb-1 bg-cover bg-center w-32 h-32"
              style={{ backgroundImage: `url(${blob})` }}
            >
              {" "}
              1{" "}
            </div>
            <h3 className="text-xl font-bold font-playWrite py-2 text-gray-100">
              Evaluate Property
            </h3>
            <p className="text-lg text-gray-100">
              Assess the value and condition of the property to ensure the best
              deal.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div
              className="flex flex-col items-center justify-center text-2xl font-bold text-white mb-1 bg-cover bg-center w-32 h-32"
              style={{ backgroundImage: `url(${blob})` }}
            >
              2
            </div>
            <h3 className="text-xl font-bold font-playWrite py-2 text-gray-100">
              Meet Your Agent
            </h3>
            <p className="text-lg text-gray-100">
              Connect with a professional agent to guide you through the
              process.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div
              className="flex flex-col items-center justify-center text-2xl font-bold text-white mb-1 bg-cover bg-center w-32 h-32"
              style={{ backgroundImage: `url(${blob})` }}
            >
              3
            </div>
            <h3 className="text-xl font-bold font-playWrite py-2 text-gray-100">
              Close the Deal
            </h3>
            <p className="text-lg text-gray-100">
              Finalize all transactions smoothly and confidently.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div
              className="flex flex-col items-center justify-center text-2xl font-bold text-white mb-1 bg-cover bg-center w-32 h-32"
              style={{ backgroundImage: `url(${blob})` }}
            >
              4
            </div>
            <h3 className="text-xl font-bold font-playWrite py-2 text-gray-100">
              Have Your Property
            </h3>
            <p className="text-lg text-gray-100">
              Take ownership of your property and enjoy your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
