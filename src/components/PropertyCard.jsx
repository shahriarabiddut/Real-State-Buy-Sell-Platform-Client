import React from "react";
import { Link, NavLink } from "react-router-dom";
import errorProperty from "../assets/errorProperty.jpg";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { RiSpeakAiLine } from "react-icons/ri";

const PropertyCard = ({ property, dark, handleDelete, userType }) => {
  const handleImageError = (e) => {
    e.target.src = errorProperty;
    e.target.onerror = null;
  };
  const {
    _id,
    image,
    title,
    status,
    minPrice,
    maxPrice,
    area,
    location,
    agentName,
  } = property;
  const tdCss = `font-medium border border-gray-300 px-2 py-1 ${
    dark ? "text-gray-200" : "text-gray-500"
  }`;
  const tdpCss = `border border-gray-300 px-2 py-1 ${
    dark ? "text-gray-200" : "text-gray-500"
  }`;
  return (
    <div
      className={`card shadow-xl overflow-hidden rounded-lg ${
        dark ? "bg-gray-800" : "bg-base-100"
      }`}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          onError={handleImageError}
        />
        <div
          className={`badge ${
            status == "pending"
              ? "badge-info"
              : status == "rejected"
              ? "badge-error"
              : "badge-primary"
          } absolute top-2 left-2 uppercase text-white font-semibold`}
        >
          {status}
        </div>
        <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-md shadow-md">
          <span className="font-bold">
            ৳ {minPrice}-{maxPrice}
          </span>
        </div>
      </div>
      <div className="p-4 ">
        {userType != "bought" && (
          <>
            <ul className="flex justify-between text-sm text-gray-600 mb-4">
              <li className={`${dark ? "text-gray-200" : "text-gray-500"}`}>
                {area} sqft
              </li>
            </ul>

            <div className="min-h-18">
              <Link to={`/property/${_id}`}>
                <h3
                  className={`font-bold text-lg mb-1 hover:text-blue-500  ${
                    dark ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  {title}
                </h3>
              </Link>
              <p
                className={`text-sm ${
                  dark ? "text-gray-200" : "text-gray-500"
                }`}
              >
                {location}
              </p>
            </div>
          </>
        )}
        {userType === "agent" && (
          <>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={property?.agent?.photo}
                  alt={agentName}
                  className="w-10 h-10 rounded-full object-cover mr-2"
                />
                <span className="text-sm font-medium">{agentName}</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <NavLink to={`/property/${_id}`}>
                <button className="inline-flex btn btn-sm btn-success text-white">
                  <FaEye />
                </button>
              </NavLink>
              {status === "rejected" || (
                <NavLink to={`/dashboard/agent/updateProperty/${_id}`}>
                  <button className="inline-flex btn btn-sm btn-info text-white">
                    <FaPen /> Edit
                  </button>
                </NavLink>
              )}
              <button
                className="inline-flex btn btn-sm btn-error text-white"
                onClick={() => {
                  handleDelete(_id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </>
        )}
        {userType === "home" && (
          <>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={property?.agent?.photo}
                  alt={agentName}
                  className="w-10 h-10 rounded-full object-cover mr-2"
                />
                <p className="text-lg font-medium">{agentName}</p>
              </div>
            </div>
            <div className="my-2 mx-auto w-full">
              <NavLink to={`/property/${_id}`}>
                <button className="flex items-center btn btn-wide btn-success text-white ">
                  <FaEye /> View Details
                </button>
              </NavLink>
            </div>
          </>
        )}
        {userType === "wish" && (
          <>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={property?.agent?.photo}
                  alt={agentName}
                  className="w-10 h-10 rounded-full object-cover mr-2"
                />
                <p className="text-lg font-medium">{agentName}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              {/* <NavLink to={`/property/${_id}`}>
                <button className="inline-flex btn btn-sm btn-success text-white">
                  <FaEye />
                </button>
              </NavLink> */}
              <NavLink to={`/dashboard/makeOffer/${_id}`}>
                <button className="inline-flex btn btn-sm btn-info text-white">
                  <RiSpeakAiLine /> Make an offer
                </button>
              </NavLink>
              <button
                className="inline-flex btn btn-sm btn-error text-white"
                onClick={() => {
                  handleDelete(property?.wishlistId);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </>
        )}
        {userType === "bought" && (
          <>
            <table className="table-fixed border-collapse border border-gray-300 w-full my-4">
              <tbody>
                <tr className="border border-gray-300">
                  <td
                    colSpan={2}
                    className={tdpCss + " font-bold hover:text-blue-500"}
                  >
                    <Link to={`/property/${_id}`}>
                      {title} ({area} sqft.)
                    </Link>
                  </td>
                </tr>
                <tr className="border border-gray-300">
                  <td className={tdCss}>Agent</td>
                  <td className={tdpCss}>{agentName}</td>
                </tr>
                <tr className="border border-gray-300">
                  <td className={tdCss}>Offered Price</td>
                  <td className={tdpCss}>{minPrice}</td>
                </tr>
                <tr className="border border-gray-300">
                  <td className={tdCss}>Status</td>
                  <td className={tdpCss + " uppercase"}>{status}</td>
                </tr>
                {status === "accepted" && (
                  <tr className="border border-gray-300 p-2">
                    <td
                      colSpan={2}
                      className={
                        tdpCss + " font-bold hover:text-blue-500 text-center"
                      }
                    >
                      <Link
                        to={`/dashboard/payment/${property?.dealId}`}
                        className="bg-firstBg text-white p-1 rounded-lg text-center"
                      >
                        Pay To Confirm
                      </Link>
                    </td>
                  </tr>
                )}
                {status === "bought" && (
                  <>
                    <tr className="border border-gray-300 p-2">
                      <td colSpan={2} className={tdCss}>
                        TransactionId
                      </td>
                    </tr>
                    <tr className="border border-gray-300 p-2">
                      <td colSpan={2} className={tdpCss + " uppercase"}>
                        {property?.trId}
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
