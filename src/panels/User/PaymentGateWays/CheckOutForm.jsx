import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CheckOutForm = ({ deal }) => {
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user, showToast } = useAuth();
  const totalPrice = deal.offerPrice;
  //   console.log(deal);
  const navigate = useNavigate();
  //
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  //
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Anonymous",
            name: user?.displayName || "Anonymous",
          },
        },
      });
    if (confirmError) {
      // console.log("Confirm Error : ", confirmError);
      setError(confirmError);
    } else {
      // console.log("Payment Intent : ", paymentIntent);
      setError("");
      if (paymentIntent?.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        // Now save the payment in DATABASE
        const payment = {
          email: user?.email || "Anonymous",
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // UTC Convert : MomentJs
          dealId: deal._id,
          propertyId: deal.propertyId,
          status: "paid",
          method: "stripe",
        };
        const result = await axiosSecure.post("/payments", payment);
        console.log("Payment Saved ", result);
        if (result.data?.result?.insertedId) {
          showToast("Payment Successfull! Order Confirmed!", "success");
          navigate("/dashboard/propertyBought");
        }
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn bg-primer my-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {error != "" && <p className="text-red-500 p-2"> {error}</p>}
      {transactionId != "" && (
        <p className="text-green-500 p-2">
          Your Transaction ID : {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
