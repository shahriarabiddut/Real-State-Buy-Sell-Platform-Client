import React from "react";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import PropertyCard from "../../components/PropertyCard";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useWishList from "../../hooks/useWishList";
import PageTitle from "../../layouts/components/PageTitle";

const WishList = () => {
  const { user, dark } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    wishlist,
    refetch,
    isFetched,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    pages,
  } = useWishList({ dashboard: true });
  const fontColor = dark ? "white" : "black";

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
          .delete(`/wishlist/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch(); // Refetch data after deletion
              Swal.fire({
                title: "Removed!",
                text: "Property has been Removed from Wishlist.",
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
  return (
    <section className="w-11/12 mx-auto py-10">
      <PageTitle
        title={"My WishList"}
        subTitle={"Property WishListed By You!"}
        color={fontColor}
      />
      <div className="flex justify-center flex-col">
        {!isFetched ? (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-2">
              {wishlist.length === 0 ? (
                <p>No Property in Wishlist.</p>
              ) : (
                wishlist.map((wish, index) => (
                  <PropertyCard
                    key={index}
                    property={wish.propertyDetails}
                    dark={dark}
                    handleDelete={handleDelete}
                    userType={"wish"}
                  />
                ))
              )}
            </div>

            {/* Pagination */}
            {wishlist.length > 0 && (
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

export default WishList;
