import React from "react";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useDeal from "../../hooks/useDeal";
import PageTitle from "../../layouts/components/PageTitle";
import { Link } from "react-router-dom";
import { FaBan, FaCheck } from "react-icons/fa";

const RequestedProperty = () => {
  const { showToast, dark } = useAuth();
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
  } = useDeal({ type: "agent", sold: false });
  const fontColor = dark ? "white" : "black";
  const fontColorTh = dark ? "text-gray-200" : "text-gray-900";
  const handleAccept = async (_id) => {
    try {
      const res = await axiosSecure.patch(`/dealCheck`, {
        id: _id,
        check: "accepted",
      });
      // console.log("Checked:", res);
      if (res?.data?.modifiedCount > 0) {
        showToast("Deal Verified!", "success");
        refetch();
      } else {
        showToast("No changes made. Deal may already be verified.", "info");
      }
    } catch (err) {
      console.error("Verification error:", err);
      showToast("Failed to verify Deal. Please try again.", "error");
    }
  };
  const handleReject = async (_id) => {
    try {
      const res = await axiosSecure.patch(`/dealCheck`, {
        id: _id,
        check: "rejected",
      });
      // console.log("Checked:", res);
      if (res?.data?.modifiedCount > 0) {
        showToast("Deal Rejected!", "success");
        refetch();
      } else {
        showToast("No changes made. Deal may already be verified.", "info");
      }
    } catch (err) {
      console.error("Verification error:", err);
      showToast("Failed to verify Deal. Please try again.", "error");
    }
  };

  return (
    <section className="w-11/12 mx-auto py-10">
      <PageTitle
        title={"Requested Property"}
        subTitle={"Property Offered To Buy!"}
        color={fontColor}
      />
      <div className="flex justify-center flex-col">
        {!isFetched ? (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <>
            <div
              className={`p-2 m-1 rounded-lg shadow-md ${
                dark ? "bg-gray-800" : "bg-white"
              }`}
            >
              {deals.length === 0 ? (
                <p>No Property in deals.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th className={fontColorTh}>Propety</th>
                        <th className={fontColorTh}>Buyer</th>
                        <th className={fontColorTh}>Offer Price</th>
                        <th className={fontColorTh}>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {deals.map((deal, index) => (
                        <tr key={deal._id}>
                          <td>
                            <Link to={`/property/${deal.propertyId}`}>
                              <span
                                className={
                                  fontColorTh +
                                  " text-lg text-center font-semibold hover:text-firstBg  p-1 m-1"
                                }
                              >
                                {deal.propertyDetails.title}
                              </span>
                            </Link>
                            <br />
                            <span className={" p-1 m-1 " + fontColorTh}>
                              {deal.propertyDetails.location}
                            </span>
                            <br />
                            <span className={" p-1 m-1 " + fontColorTh}>
                              Price : {deal.propertyDetails.minPrice} -{" "}
                              {deal.propertyDetails.maxPrice}
                            </span>
                          </td>
                          <td>
                            <div className="flex items-center gap-3">
                              <div>
                                <div className={fontColorTh + " font-bold"}>
                                  {deal.buyerName}
                                </div>
                                <div
                                  className={
                                    fontColorTh + " text-sm opacity-50"
                                  }
                                >
                                  {deal.buyerEmail}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className={fontColorTh}>৳ {deal.offerPrice}</td>
                          <td className="flex gap-1">
                            {deal.status == "pending" && (
                              <>
                                <button
                                  className="btn btn-sm btn-success flex text-white items-center"
                                  onClick={() => handleAccept(deal._id)}
                                >
                                  <FaCheck />
                                  Accept
                                </button>
                                <button
                                  className="btn btn-sm btn-error flex text-white items-center"
                                  onClick={() => handleReject(deal._id)}
                                >
                                  <FaBan />
                                  Reject
                                </button>
                              </>
                            )}
                            {deal.status == "accepted" && (
                              <p className="text-green-800 font-bold ">
                                Accepted
                              </p>
                            )}
                            {deal.status == "rejected" && (
                              <p className="text-red-800 font-bold">Rejected</p>
                            )}
                            {deal.status == "bought" && (
                              <p className="text-green-800 font-bold">Sold</p>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    {/* foot */}
                    {deals.length > 0 && (
                      <tfoot>
                        <tr>
                          <td colSpan={"6"}>
                            {/* Pagination */}
                            <Pagination
                              setItemsPerPage={setItemsPerPage}
                              setCurrentPage={setCurrentPage}
                              currentPage={currentPage}
                              pages={pages}
                              itemsPerPage={itemsPerPage}
                            />
                          </td>
                        </tr>
                      </tfoot>
                    )}
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default RequestedProperty;
