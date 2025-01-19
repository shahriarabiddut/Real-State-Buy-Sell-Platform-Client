import React from "react";
import Pagination from "../../components/Pagination";
import useReview from "../../hooks/useReview";
import Loading from "../../components/Loading";
import ReviewCard from "../../components/ReviewCard";
import useAuth from "../../hooks/useAuth";
import PageTitle from "../../layouts/components/PageTitle";
import { FaEye, FaQuoteLeft, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { NavLink } from "react-router-dom";

const ManageReviews = () => {
  const { user, dark } = useAuth();
  const {
    reviews,
    refetchReview,
    isFetchedReview,
    count,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    pages,
  } = useReview({
    dashboard: "admin",
    propertyId: "",
  });
  const fontColor = dark ? "white" : "black";
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/reviewA/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetchReview(); // Refetch data after deletion
              Swal.fire({
                title: "Removed!",
                text: "Review has been Removed .",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the Review.",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <>
      <section className="w-11/12 mx-auto py-10">
        <PageTitle
          title={"Manage Reviews"}
          subTitle={"Reviews Given To Properties By Users!"}
          color={fontColor}
        />
        <div className="flex justify-center flex-col">
          {!isFetchedReview ? (
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {count === 0 ? (
                  <p className="col-span-full text-center text-gray-700">
                    No reviews in Property .
                  </p>
                ) : (
                  reviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg rounded-lg p-6 w-full mx-auto flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-4xl text-firstBg block mb-4">
                          <FaQuoteLeft />
                        </span>
                        <p className="text-gray-700 mb-6 text-justify overflow-hidden">
                          {review.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-start mt-auto space-y-2">
                        <div className="text-left">
                          <p className="font-semibold">
                            {review.propertyDetails.title} on &nbsp;
                            <span className="text-sm text-gray-500">
                              {review.createdAt}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start mt-auto">
                        <div
                          className="w-16 h-16 bg-cover bg-center rounded-full"
                          style={{
                            backgroundImage: `url(${
                              review.reviewer.photo || profileError
                            })`,
                          }}
                        ></div>
                        <div className="ml-4 text-left">
                          <p className="font-semibold">{review.reviewerName}</p>
                          <p className="font-semibold text-gray-500">
                            {review.reviewerEmail}
                          </p>
                        </div>
                      </div>
                      <div className="my-2 flex justify-between items-center gap-1">
                        <NavLink to={`/property/${review.propertyId}`}>
                          <button className="inline-flex items-center btn btn-sm btn-success text-white ">
                            <FaEye /> Property
                          </button>
                        </NavLink>
                        <button
                          className="inline-flex btn btn-sm btn-error text-white"
                          onClick={() => {
                            handleDelete(review._id);
                          }}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Pagination */}
              {count > 0 && (
                <Pagination
                  setItemsPerPage={setItemsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  pages={pages}
                  itemsPerPage={itemsPerPage}
                />
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ManageReviews;
