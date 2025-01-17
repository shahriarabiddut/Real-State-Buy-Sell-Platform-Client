import React from "react";
import PageTitle from "../../layouts/components/PageTitle";
import useAuth from "../../hooks/useAuth";
import useProperty from "../../hooks/useProperty";
import PropertyCard from "../../components/PropertyCard";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyProperty = () => {
  const { dark } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [properties, refetch] = useProperty();
  const fontColor = dark ? "white" : "black";
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
        axiosSecure.delete(`/property/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Property has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      <section className="w-11/12 mx-auto py-10">
        <PageTitle
          title={"My Property"}
          subTitle={"Property Listed By You!"}
          color={fontColor}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              property={property}
              dark={dark}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MyProperty;
