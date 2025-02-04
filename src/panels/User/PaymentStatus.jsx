import React from "react";
import { Link } from "react-router-dom";

export const FailedPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-lg text-gray-700 mb-6">
          Unfortunately, we couldn’t process your payment. Please try again.
        </p>
        <Link to="/dashboard/propertyBought" className="btn btn-primary">
          Retry ! Show My Offered Properties
        </Link>
      </div>
    </div>
  );
};

export const CancelledPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">
          Payment Cancelled
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          You have cancelled your payment. You can start again whenever you’re
          ready.
        </p>
        <Link to="/dashboard/propertyBought" className="btn btn-secondary">
          Show My Offered Properties
        </Link>
      </div>
    </div>
  );
};

export const SuccessPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Payment Successful
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your payment! Your transaction has been completed
          successfully.
        </p>
        <Link to="/dashboard/propertyBought" className="btn btn-success">
          Show My Bought Properties
        </Link>
      </div>
    </div>
  );
};
