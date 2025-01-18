import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Pagination from "../../components/Pagination";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../layouts/components/PageTitle";
import Loading from "../../components/Loading";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { showToast, dark } = useAuth();
  const axiosSecure = useAxiosSecure();
  const fontColor = dark ? "white" : "black";
  const fontColorTh = dark ? "text-gray-200" : "text-gray-900";
  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  //
  const {
    data: users = { data: [], count: 0 },
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["users", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users?page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });
  // Pagination
  const numberOfPages = Math.ceil(users.count / itemsPerPage) || 1;
  const pages = [...Array(numberOfPages).keys()];
  //

  const handleDelete = (id, email) => {
    console.log(id, email);
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
        axiosSecure.delete(`/users/${id}?email=${email}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: "User has been deleted!",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleChangeUser = (user, role) => {
    const userRole = role;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Make ${userRole}!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/role/${user._id}`, { role: role })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "User Role Changed!",
                text: ` User : ${user.name} is now an ${role}`,
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
          title={"Manage users"}
          subTitle={"User Management!"}
          color={fontColor}
        />
        <div
          className={`p-2 m-1 rounded-lg shadow-md ${
            dark ? "bg-gray-800" : "bg-white"
          }`}
        >
          {isFetching ? (
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          ) : users.length === 0 ? (
            <div className="flex justify-center items-center">
              <p>No users available.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th className={fontColorTh}>User</th>
                    <th className={fontColorTh}>Last Signed In</th>
                    <th className={fontColorTh}>Role</th>
                    <th className={fontColorTh}>Action</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.result.map((user, index) => (
                    <tr key={user._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={user.photo} alt={user.name} />
                            </div>
                          </div>
                          <div>
                            <div className={fontColorTh + " font-bold"}>
                              {user.name}
                            </div>
                            <div
                              className={fontColorTh + " text-sm opacity-50"}
                            >
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={fontColorTh}>{user?.lastSignInTime}</td>
                      <td className={fontColorTh}>
                        <p className="uppercase">{user.role}</p>
                        {user.role === "user" && (
                          <>
                            <button
                              className="bg-firstBg p-[6px] m-1 text-xs text-white rounded-lg text-center"
                              onClick={() => {
                                handleChangeUser(user, "agent");
                              }}
                            >
                              Make Agent
                            </button>
                            <button
                              className="bg-blue-800 p-[6px] m-1 text-xs text-white rounded-lg text-center"
                              onClick={() => {
                                handleChangeUser(user, "admin");
                              }}
                            >
                              Make Admin
                            </button>
                          </>
                        )}
                        {user.role === "agent" && (
                          <button
                            className="bg-gray-700 p-[6px] m-1 text-xs text-white rounded-lg text-center"
                            onClick={() => {
                              handleChangeUser(user, "fraud");
                            }}
                          >
                            Mark As Fraud
                          </button>
                        )}
                        {/* <button
                          className="bg-yellow-800 p-[6px] m-1 text-xs text-white rounded-lg text-center"
                          onClick={() => {
                            handleChangeUser(user, "user");
                          }}
                        >
                          Make User
                        </button> */}
                      </td>
                      <td className={fontColorTh}>
                        <button
                          className="btn btn-sm btn-error flex text-white items-center"
                          onClick={() => handleDelete(user._id, user.email)}
                        >
                          <FaTrash />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* foot */}
                <tfoot>
                  <tr>
                    <td colSpan={"6"}>
                      {/* Pagination */}
                      {users.result.length > 0 && (
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

export default ManageUsers;
