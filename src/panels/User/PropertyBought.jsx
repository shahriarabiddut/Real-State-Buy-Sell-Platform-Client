import React from "react";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import PropertyCard from "../../components/PropertyCard";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useDeal from "../../hooks/useDeal";
import PageTitle from "../../layouts/components/PageTitle";

const PropertyBought = () => {
  const { user, dark } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    deals,
    refetch,
    isFetched,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    pages,
  } = useDeal({ type: "user", sold: false });
  const fontColor = dark ? "white" : "black";

  return (
    <section className="w-11/12 mx-auto py-10">
      <PageTitle
        title={"Property Bought"}
        subTitle={"Property Offered and Bought!"}
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
              {deals.length === 0 ? (
                <p>No Property in deals.</p>
              ) : (
                deals.map((deal, index) => (
                  <PropertyCard
                    key={index}
                    property={deal.propertyDetails}
                    dark={dark}
                    userType={"bought"}
                  />
                ))
              )}
            </div>

            {/* Pagination */}
            {deals.length > 0 && (
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

export default PropertyBought;
