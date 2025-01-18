import React from "react";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useDeal from "../../hooks/useDeal";
import PageTitle from "../../layouts/components/PageTitle";
import { Link } from "react-router-dom";
import { FaBan, FaCheck } from "react-icons/fa";

const SoldProperties = () => {
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
  } = useDeal({ type: "agent", sold: true });
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
        title={"Sold Properties"}
        subTitle={"Property Sold History!"}
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
                <p>No Property Sold .</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th className={fontColorTh}>Propety</th>
                        <th className={fontColorTh}>Buyer</th>
                        <th className={fontColorTh}>Sold Price</th>
                        <th className={fontColorTh}>TranasactionId</th>
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
                          <td className="flex gap-1">{deal?.transactionId}</td>
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

export default SoldProperties;
