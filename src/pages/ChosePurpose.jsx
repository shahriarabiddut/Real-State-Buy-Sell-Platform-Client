import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BreadcumbBanner from "../components/BreadcumbBanner";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ChosePurpose = () => {
  const { user, showToast } = useAuth();
  const axiosSecure = useAxiosSecure();

  console.log(user.email);
  const navigate = useNavigate();
  // Check user Already have role or not
  useEffect(() => {
    setTimeout(() => {
      axiosSecure
        .get(`/user/${user?.email}`)
        .then((response) => {
          console.log(response.data.role, user?.email);
          if (
            response.data.role != null &&
            response.data.role != "notMentioned"
          ) {
            showToast("You cannot Change Role!", "error");
            navigate("/");
          }
        })
        .catch((error) => {
          // console.error("Error updating user role:", error);
        });
    }, 2000);
  }, []);

  //

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const updatedAt = new Date().toISOString();
    const updateRole = {
      email: user.email,
      role: data.role,
      updatedAt,
    };
    axiosSecure
      .patch(`/userRole`, updateRole)
      .then((response) => {
        // console.log(response);
        if (response.data.modifiedCount > 0) {
          showToast("Welcome New User", "info");
          navigate("/");
        }
      })
      .catch((error) => {
        showToast("You don't Have Permission!", "error");
      });
  };

  return (
    <>
      <Helmet>
        <title>Chose Purpose | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <BreadcumbBanner title={"Chose Purpose"} />
      <section className="py-20 w-11/12 mx-auto">
        <div className="container mx-auto">
          <form className="card-body py-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">What Do You Want?</span>
              </label>
              <select
                className="select select-bordered w-full capitalize"
                {...register("role", { required: true })}
              >
                <option disabled defaultValue={"None"}>
                  Select Purpose
                </option>
                <option value="agent" className="capitalize">
                  Want To Sell Property
                </option>
                <option value="user" className="capitalize">
                  Want To Buy Property
                </option>
              </select>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-firstBg text-white"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ChosePurpose;
