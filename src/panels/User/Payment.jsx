import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PageTitle from "../../layouts/components/PageTitle";
import useAuth from "../../hooks/useAuth";
import CheckOutForm from "./CheckOutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY);

const Payment = () => {
  const { user, dark } = useAuth();
  const fontColor = dark ? "white" : "black";
  const deal = useLoaderData();
  return (
    <section className="w-11/12 mx-auto py-10">
      <PageTitle
        title={"Payment"}
        subTitle={"Pay To Complete Transaction!"}
        color={fontColor}
      />
      <section className="p-5 w-full md:w-10/12 bg-white mx-auto my-5">
        <Elements stripe={stripePromise}>
          <CheckOutForm deal={deal} />
        </Elements>
      </section>
    </section>
  );
};

export default Payment;
