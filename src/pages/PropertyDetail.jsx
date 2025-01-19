import React, { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BreadcumbBanner from "../components/BreadcumbBanner";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useRole from "../hooks/useRole";
import useWishList from "../hooks/useWishList";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useReview from "../hooks/useReview";
import ReviewCard from "../components/ReviewCard";

const PropertyDetail = () => {
  const [isRole] = useRole();
  const { user, sweetAlert, showToast } = useAuth();
  const navigate = useNavigate();
  const locationR = useLocation();
  const axiosSecure = useAxiosSecure();
  const { wishlist, refetch, isFetched } = useWishList({ dashboard: false });
  const {
    _id,
    image,
    title,
    minPrice,
    maxPrice,
    status,
    area,
    location,
    agentName,
    agentEmail,
  } = useLoaderData();

  const { reviews, refetchReview, isFetchedReview, count } = useReview({
    dashboard: false,
    propertyId: _id,
  });
  const handleAddWishlist = (id) => {
    if (user && user.email) {
      // Todo: Send Data
      // console.log(food);
      const wishItem = {
        propertyId: id,
        email: user.email,
        agent: agentEmail,
      };
      // console.log(wishItem);
      axiosSecure.post("/wishlist", wishItem).then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          showToast("Added To Wishlist", "success");
          // Refetch the cart items count
          refetch();
        }
      });
    } else {
      sweetAlert(
        "You Are Not Logged In!",
        "Please Login to Add to Cart",
        "question",
        "Login"
      ).then((result) => {
        if (result.isConfirmed) {
          navigate("/auth/login", { state: { from: locationR } });
        }
      });
    }
  };
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // Prepare data To Send the data to mongoDB
    const review = {
      propertyId: _id,
      description: data.description,
      reviewerEmail: user.email,
      reviewerName: user.displayName,
      createdAt: new Date().toUTCString(),
    };
    //   Now Send the Data
    const reviewRes = await axiosSecure.post(`/review`, review);
    console.log(reviewRes.data);
    if (reviewRes.data.insertedId) {
      document.getElementById("my_modal_3").close();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Review has been Added!",
        showConfirmButton: false,
        timer: 1500,
      });
      // Reset the form after submission
      reset();
      refetchReview();
    }
  };
  return (
    <>
      <BreadcumbBanner title={"Property Details"} />
      {status != "rejected" ? (
        <div className="py-20 w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-5 justify-start items-start">
            <div className="p-5 w-full md:w-1/3 flex flex-col justify-center items-center md:items-start md:justify-start space-y-3">
              <img
                src={image}
                alt={title}
                className="w-72 h-72 object-cover border-2 rounded-lg"
              />
              <h3
                className={`font-bold text-center font-playWrite text-3xl py-2 mb-1 hover:text-firstBg text-black`}
              >
                {title}
              </h3>
            </div>
            <div className="p-5 w-full md:w-2/3 ">
              <Tabs>
                <TabList className="flex space-x-4 border-b-2 border-gray-200">
                  <Tab
                    className="cursor-pointer py-2 px-4 text-lg font-semibold text-gray-600 hover:text-firstBg hover:border-b-2 hover:border-blue-500"
                    selectedClassName="text-firstBg border-b-2 border-firstBg"
                  >
                    Details
                  </Tab>
                  <Tab
                    className="cursor-pointer py-2 px-4 text-lg font-semibold text-gray-600 hover:text-firstBg hover:border-b-2 hover:border-blue-500"
                    selectedClassName="text-firstBg border-b-2 border-firstBg"
                  >
                    User Reviews
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="p-6 bg-gray-100 rounded-lg mt-4 space-y-2">
                    <h2 className="text-xl text-gray-900">
                      Location : {location}
                    </h2>
                    <h2 className="text-xl text-gray-900">
                      Price : {minPrice} - {maxPrice}
                    </h2>
                    <h2 className="text-xl text-gray-900">
                      Size : {area} sqft.
                    </h2>
                    <h2 className="text-xl text-gray-900">
                      Agent : {agentName}{" "}
                    </h2>
                  </div>
                  {isRole === "user" &&
                    (!isFetched ? (
                      <>Loading...</>
                    ) : (
                      !wishlist.some((w) => w.propertyId === _id) && (
                        <div className="rounded-lg mt-4 space-y-2">
                          <button
                            className="btn btn-block btn-accent text-white text-xl"
                            onClick={() => handleAddWishlist(_id)}
                          >
                            Add To Wishlist
                          </button>
                        </div>
                      )
                    ))}
                </TabPanel>
                <TabPanel>
                  <div className="p-6 bg-gray-100 rounded-lg mt-4 space-y-2">
                    {count === 0 ? (
                      <p>No review found.</p>
                    ) : (
                      <>
                        <h2 className="py-2 text-2xl">
                          {count} Reviews Found on this Property
                        </h2>
                        {reviews.map((review, index) => (
                          <ReviewCard key={index} review={review} />
                        ))}
                      </>
                    )}
                  </div>
                  <div className=" rounded-lg mt-4 space-y-2">
                    <button
                      className="btn btn-block btn-primary text-white text-xl"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Add A Review
                    </button>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          {/* Modal For Add Review */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-center">
                Add Your Review!
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body py-5"
              >
                <div className="form-control">
                  <label className="label">
                    <span className={`font-sans text-lg text-black`}>
                      Review Details
                    </span>
                  </label>
                  <textarea
                    className="border-2 rounded-xl "
                    rows="3"
                    name="description"
                    {...register("description", { required: true })}
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button>
                    <input
                      type="submit"
                      className="btn bg-firstBg border-white hover:bg-gray-100 hover:text-firstBg text-white "
                      value="Add Review"
                    />
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      ) : (
        <>Property is not listed here! </>
      )}
    </>
  );
};

export default PropertyDetail;
