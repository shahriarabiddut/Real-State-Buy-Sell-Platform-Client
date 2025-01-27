import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SSlCommerz = ({ deal }) => {
  const payment = deal;
  const axiosSecure = useAxiosSecure();
  const handleClick = () => {
    try {
      axiosSecure.post("/create-ssl-payment", payment).then((res) => {
        console.log(res.data.getwayUrl);
        window.location.replace(res.data.getwayUrl);
      });
    } catch (error) {
      console.error("Error creating SSL payment:", error);
    }
  };

  return (
    <div>
      <p className="text-lg font-medium text-gray-700 py-3">
        SSL Commerz Payment
      </p>
      <button
        onClick={handleClick}
        className="px-2 py-1 rounded-xl bg-firstBg border-none hover:bg-white hover:text-firstBg text-white btn-lg"
      >
        Pay With SSL Commerz
      </button>
    </div>
  );
};

export default SSlCommerz;
