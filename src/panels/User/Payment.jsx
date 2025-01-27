import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PageTitle from "../../layouts/components/PageTitle";
import useAuth from "../../hooks/useAuth";
import CheckOutForm from "./PaymentGateWays/CheckOutForm";
import { useLoaderData } from "react-router-dom";
import SSlCommerz from "./PaymentGateWays/SSlCommerz";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY);

const Payment = () => {
  const { user, dark } = useAuth();
  const fontColor = dark ? "white" : "black";
  const deal = useLoaderData();
  const [selectedGateway, setSelectedGateway] = useState("stripe");

  const handleGatewayChange = (event) => {
    setSelectedGateway(event.target.value);
  };

  return (
    <section className="w-11/12 mx-auto py-10">
      <PageTitle
        title={"Payment"}
        subTitle={"Pay To Complete Transaction!"}
        color={fontColor}
      />

      {/* Payment Gateway Selection */}
      <section className="p-5 w-full md:w-10/12 bg-white mx-auto my-5">
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Payment Gateway
          </label>
          <select
            className="select select-bordered w-full"
            value={selectedGateway}
            onChange={handleGatewayChange}
          >
            <option value="stripe">Stripe</option>
            <option value="sslcommerz">SSL Commerz</option>
          </select>
        </div>

        {selectedGateway === "stripe" && (
          <Elements stripe={stripePromise}>
            <CheckOutForm deal={deal} />
          </Elements>
        )}

        {selectedGateway === "sslcommerz" && (
          <div>
            <SSlCommerz deal={deal} />
          </div>
        )}
      </section>
    </section>
  );
};

export default Payment;
