import React from "react";
import { FaBroadcastTower, FaRemoveFormat } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useProperty from "../../hooks/useProperty";
import PageTitle from "../../layouts/components/PageTitle";

const ManageFeaturedProperties = () => {
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
    refetch,
  } = useProperty({ admin: true, home: true, advertise: false });
  const fontColor = dark ? "white" : "black";
  const fontColorTh = dark ? "text-gray-200" : "text-gray-900";
  const handleSetAdvertise = async (_id) => {
    try {
      const res = await axiosSecure.patch(`/propertyAdvertise`, {
        id: _id,
        check: "verified",
      });
      // console.log("Checked:", res);
      if (res?.data?.modifiedCount > 0) {
        showToast("Property Featured (Advertised)!", "success");
        refetch();
      } else {
        showToast("Featured (Advertised) quota filled.", "info");
      }
    } catch (err) {
      console.error("Verification error:", err);
      showToast(
        "Failed to Feature (Advertise) property. Please try again.",
        "error"
      );
    }
  };
  const handleRemoveAdv = async (_id) => {
    try {
      const res = await axiosSecure.patch(`/propertyAdvertise`, {
        id: _id,
        check: "rejected",
      });
      // console.log("Checked:", res);
      if (res?.data?.modifiedCount > 0) {
        showToast("Property Removed From Featured (Advertised)!", "success");
        refetch();
      } else {
        showToast("No changes made. Property may already be verified.", "info");
      }
    } catch (err) {
      console.error("Verification error:", err);
      showToast("Failed to verify property. Please try again.", "error");
    }
  };
  // console.log(properties);
  return (
    <>
      <section className="w-11/12 mx-auto py-10">
        <PageTitle
          title={"Manage Featured Properties"}
          subTitle={"Verified Propety Lists!"}
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
          ) : properties.length === 0 ? (
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
                    <th className={fontColorTh}>Price</th>
                    <th className={fontColorTh}>Status</th>
                    <th className={fontColorTh}></th>
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
                        <span className={fontColorTh}>{property.location}</span>
                        <br />
                        <span className={fontColorTh}>
                          {property.area} sqft
                        </span>
                      </td>
                      <td className={fontColorTh}>
                        ৳ {property.minPrice}-{property.maxPrice}
                      </td>
                      <td className="flex gap-1">
                        {property.advertisement == "0" && (
                          <>
                            <p className="text-red-800 font-bold my-1">
                              Not Featured
                            </p>
                          </>
                        )}
                        {property.advertisement != "0" && (
                          <>
                            <p className="text-green-800 font-bold my-1">
                              Featured
                            </p>
                          </>
                        )}
                      </td>
                      <td>
                        {property.advertisement == "0" && (
                          <>
                            <br />
                            <button
                              className="btn btn-sm btn-success flex text-white items-center"
                              onClick={() => handleSetAdvertise(property._id)}
                            >
                              <FaBroadcastTower />
                              Advertise
                            </button>
                          </>
                        )}
                        {property.advertisement != "0" && (
                          <>
                            <br />
                            <button
                              className="btn btn-sm btn-error flex text-white items-center"
                              onClick={() => handleRemoveAdv(property._id)}
                            >
                              <FaRemoveFormat />
                              Remove
                            </button>
                          </>
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
                      {properties.length > 0 && (
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

export default ManageFeaturedProperties;
