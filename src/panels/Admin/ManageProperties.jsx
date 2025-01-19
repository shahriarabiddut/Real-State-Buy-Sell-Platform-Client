import React from "react";
import PageTitle from "../../layouts/components/PageTitle";
import useAuth from "../../hooks/useAuth";
import useProperty from "../../hooks/useProperty";
import { Link } from "react-router-dom";
import { FaBan, FaCheck } from "react-icons/fa";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageProperties = () => {
  const { showToast, dark } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    properties,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    isFetched,
    pages,
    count,
    refetch,
  } = useProperty({
    admin: true,
    home: false,
    advertise: false,

    sort: "",
  });
  const fontColor = dark ? "white" : "black";
  const fontColorTh = dark ? "text-gray-200" : "text-gray-900";
  const handleVerify = async (_id) => {
    try {
      const res = await axiosSecure.patch(`/propertyCheck`, {
        id: _id,
        check: "verified",
      });
      // console.log("Checked:", res);
      if (res?.data?.modifiedCount > 0) {
        showToast("Property Verified!", "success");
        refetch();
      } else {
        showToast("No changes made. Property may already be verified.", "info");
      }
    } catch (err) {
      console.error("Verification error:", err);
      showToast("Failed to verify property. Please try again.", "error");
    }
  };
  const handleReject = async (_id) => {
    try {
      const res = await axiosSecure.patch(`/propertyCheck`, {
        id: _id,
        check: "rejected",
      });
      // console.log("Checked:", res);
      if (res?.data?.modifiedCount > 0) {
        showToast("Property Rejected!", "success");
        refetch();
      } else {
        showToast("No changes made. Property may already be verified.", "info");
      }
    } catch (err) {
      console.error("Verification error:", err);
      showToast("Failed to verify property. Please try again.", "error");
    }
  };

  return (
    <>
      <section className="w-11/12 mx-auto py-10">
        <PageTitle
          title={"Manage Properties"}
          subTitle={"Propety Data Listing Management!"}
          color={fontColor}
        />
        <div
          className={`p-2 m-1 rounded-lg shadow-md ${
            dark ? "bg-gray-800" : "bg-white"
          }`}
        >
          {!isFetched ? (
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          ) : count === 0 ? (
            <div className="flex justify-center items-center">
              <p>No properties available.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th className={fontColorTh}>Agent</th>
                    <th className={fontColorTh}>Propety</th>
                    <th className={fontColorTh}>Size</th>
                    <th className={fontColorTh}>Price</th>
                    <th className={fontColorTh}>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property, index) => (
                    <tr key={property._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={property.agent.photo}
                                alt={property.agentName}
                              />
                            </div>
                          </div>
                          <div>
                            <div className={fontColorTh + " font-bold"}>
                              {property.agentName}
                            </div>
                            <div
                              className={fontColorTh + " text-sm opacity-50"}
                            >
                              {property.agentEmail}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Link to={`/property/${property._id}`}>
                          <span
                            className={
                              fontColorTh +
                              " text-lg text-center font-semibold hover:text-firstBg"
                            }
                          >
                            {property.title}
                          </span>
                        </Link>
                        <br />
                        <span className={" p-1 m-1 " + fontColorTh}>
                          {property.location}
                        </span>
                      </td>
                      <td className={fontColorTh}>{property.area} sqft</td>
                      <td className={fontColorTh}>
                        ৳ {property.minPrice}-{property.maxPrice}
                      </td>
                      <td className="flex gap-1">
                        {property.status == "pending" && (
                          <>
                            <button
                              className="btn btn-sm btn-success flex text-white items-center"
                              onClick={() => handleVerify(property._id)}
                            >
                              <FaCheck />
                              Verify
                            </button>
                            <button
                              className="btn btn-sm btn-error flex text-white items-center"
                              onClick={() => handleReject(property._id)}
                            >
                              <FaBan />
                              Reject
                            </button>
                          </>
                        )}
                        {property.status == "verified" && (
                          <p className="text-green-800 font-bold">Verified</p>
                        )}
                        {property.status == "rejected" && (
                          <p className="text-red-800 font-bold">Rejected</p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* foot */}
                <tfoot>
                  <tr>
                    <td colSpan={"6"}>
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
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ManageProperties;
