import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PageTitle from "../../layouts/components/PageTitle";

import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const tomorrowDate = tomorrow.toISOString().split("T")[0];

const MakeOffer = () => {
  const property = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    title,
    minPrice,
    maxPrice,
    area,
    location,
    agentName,
    agentEmail,
  } = property;

  const { user, dark } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // Prepare data To Send the data to mongoDB
    const deal = {
      propertyId: _id,
      title: data.title,
      location: data.location,
      agentName: data.agentName,
      agentEmail: data.agentEmail,
      buyerName: data.buyerName,
      buyerEmail: data.buyerEmail,
      offerPrice: parseFloat(data.offerPrice),
      date: data.buyingDate,
    };
    // Now Send the Data
    const dealRes = await axiosSecure.post(`/deals`, deal).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Property Offer Made!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/dashboard/wishlist");
    });
  };
  const fontColor = dark ? "white" : "black";
  return (
    <>
      <section className="w-11/12 mx-auto py-10">
        <PageTitle
          title={"Make Offer"}
          subTitle={"Offer Your Best Price!"}
          color={fontColor}
        />
        <div
          className={`p-2 m-1 rounded-lg shadow-md ${
            dark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-5">
            <div className="form-control">
              <label className="label">
                <span className={`font-sans text-lg text-${fontColor}`}>
                  Property title
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Property title"
                className="input input-bordered"
                defaultValue={title}
                {...register("title", { required: true })}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className={`font-sans text-lg text-${fontColor}`}>
                  Property Location
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Property Location"
                className="input input-bordered"
                defaultValue={location}
                {...register("location", { required: true })}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className={`font-sans text-lg text-${fontColor}`}>
                  Agent Name
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("agentName")}
                readOnly
                defaultValue={agentName}
              />
            </div>
            <div className="form-control hidden">
              <label className="label">
                <span className={`font-sans text-lg text-${fontColor}`}>
                  Agent Email
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("agentEmail")}
                readOnly
                defaultValue={agentEmail}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className={`font-sans text-lg text-${fontColor}`}>
                  Buyer Name
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("buyerName")}
                readOnly
                defaultValue={user.displayName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className={`font-sans text-lg text-${fontColor}`}>
                  Buyer Email
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("buyerEmail")}
                readOnly
                defaultValue={user.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className={`font-sans text-lg text-${fontColor}`}>
                  Offer Amount ( ৳ {minPrice} - {maxPrice} )
                </span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                min={minPrice + 1}
                max={maxPrice}
                {...register("offerPrice", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className={`font-sans text-lg text-${fontColor}`}>
                  Date
                </span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                min={tomorrowDate}
                {...register("buyingDate", { required: true })}
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-firstBg border-white hover:bg-gray-100 hover:text-firstBg text-white "
                value="Make Offer"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MakeOffer;
