import React, { useState } from "react";
import PageTitle from "../../layouts/components/PageTitle";
import useAuth from "../../hooks/useAuth";
import useProperty from "../../hooks/useProperty";
import PropertyCard from "../../components/PropertyCard";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

const MyProperty = () => {
  const { dark } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Destructure the useProperty hook properly
  const {
    properties,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    isFetching,
    pages,
    refetch,
  } = useProperty();

  const fontColor = dark ? "white" : "black";

  // Delete Property Function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/property/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch(); // Refetch data after deletion
              Swal.fire({
                title: "Deleted!",
                text: "Your Property has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the property.",
              icon: "error",
            });
          });
      }
    });
  };

  // Pagination Logic

  return (
    <section className="w-11/12 mx-auto py-10">
      <PageTitle
        title={"My Property"}
        subTitle={"Property Listed By You!"}
        color={fontColor}
      />
      <div className="flex justify-center flex-col">
        {isFetching ? (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {properties.length === 0 ? (
                <p>No properties found.</p>
              ) : (
                properties.map((property, index) => (
                  <PropertyCard
                    key={index}
                    property={property}
                    dark={dark}
                    handleDelete={handleDelete}
                    userType={"agent"}
                  />
                ))
              )}
            </div>

            {/* Pagination */}
            {properties.length > 0 && (
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
  );
};

export default MyProperty;
