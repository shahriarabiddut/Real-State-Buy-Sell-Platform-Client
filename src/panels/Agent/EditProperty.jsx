import React, { useState } from "react";
import PageTitle from "../../layouts/components/PageTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditProperty = () => {
  const { _id, image, title, minPrice, maxPrice, area, location } =
    useLoaderData();
  const { user, dark } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [newImage, setNewImage] = useState(image);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    if (data.imageNew.length !== 0) {
      // Upload image to imgbb
      const imageFIle = { image: data.imageNew[0] };
      const res = await axiosPublic
        .post(image_hosting_api, imageFIle, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then(async (res) => {
          console.log(res.data.data);
          if (res.data.success) {
            // Prepare data To Send the data to mongoDB
            const property = {
              title: data.title,
              location: data.location,
              image: res.data.data.display_url,
              agentName: data.agentName,
              agentEmail: data.agentEmail,
              minPrice: parseFloat(data.minPrice),
              maxPrice: parseFloat(data.maxPrice),
              area: parseFloat(data.area),
            };
            setNewImage(res.data.data.display_url);
            //   Now Send the Data
            const propertyRes = await axiosSecure.patch(
              `/property/${_id}`,
              property
            );
            console.log(propertyRes.data);
            if (propertyRes.data.modifiedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Property has been Updated",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }
        });
    } else {
      // Prepare data To Send the data to mongoDB
      const property = {
        title: data.title,
        location: data.location,
        image: image,
        agentName: data.agentName,
        agentEmail: data.agentEmail,
        minPrice: parseFloat(data.minPrice),
        maxPrice: parseFloat(data.maxPrice),
        area: parseFloat(data.area),
      };
      console.log("hit");
      //   Now Send the Data
      const propertyRes = await axiosSecure.patch(`/property/${_id}`, property);
      console.log(propertyRes.data);
      if (propertyRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Property has been Updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (
        propertyRes.data.modifiedCount == 0 &&
        propertyRes.data.matchedCount > 0
      ) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Nothing New To Update!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  const fontColor = dark ? "white" : "black";
  return (
    <>
      <section className="w-11/12 mx-auto py-10">
        <PageTitle
          title={"Update Property"}
          subTitle={"Propety Datas Are Cross Checked!"}
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
                required
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
                required
              />
            </div>
            <div className="form-control">
              <img src={newImage} className="w-64 h-64" alt="" /> <br />
              <label className="label">
                <span className={`font-sans text-lg text-${fontColor}`}>
                  Want To Add New Property Image ?
                </span>
              </label>
              <input
                type="file"
                className="file-input input-bordered w-full"
                {...register("imageNew")}
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
                defaultValue={user.displayName}
              />
            </div>
            <div className="form-control">
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
                defaultValue={user.email}
              />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="form-control">
                <label className="label">
                  <span className={`font-sans text-lg text-${fontColor}`}>
                    Minimum Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Min Price"
                  defaultValue={minPrice}
                  className="input input-bordered"
                  {...register("minPrice", { required: true })}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className={`font-sans text-lg text-${fontColor}`}>
                    Maximum Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Max Price"
                  defaultValue={maxPrice}
                  className="input input-bordered"
                  {...register("maxPrice", { required: true })}
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className={`font-sans text-lg text-${fontColor}`}>
                  Property Area (in sqft)
                </span>
              </label>
              <input
                type="number"
                placeholder="in sqft"
                className="input input-bordered"
                defaultValue={area}
                {...register("area", { required: true })}
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-firstBg border-white hover:bg-gray-100 hover:text-firstBg text-white "
                value="Update Property"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditProperty;
