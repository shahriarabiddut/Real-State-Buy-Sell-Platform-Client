import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import authImg from "../assets/register.gif";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { createUser, showToast, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((currentUser) => {
        let createdAt = currentUser?.user?.metadata?.createdAt;
        // console.log(currentUser.user, createdAt);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              photo: data.photo,
              role: data.role,
              createdAt,
            };
            // Send Data To Databse
            axiosPublic
              .post("/users", userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  reset();
                  showToast("Successfully Registered!", "success");
                  navigate("/");
                }
              })
              .catch((error) => {
                showToast("Something Wrong!", "error");
              });
            //
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        showToast("Allready Registered", "error");
        // showToast(error,'error');
      });
  };
  // console.log(watch("name")) // watch input value by passing the name of it
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      showToast("Captcha Matched", "success");
      setDisabled(false);
    } else {
      showToast("Captcha Didn't Matched", "error");
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Register | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen py-20">
        <div className="hero-content flex flex-wrap lg:flex-nowrap p-4 md:p-6 lg:p-10 m-4 md:m-6 lg:m-10 border-2 shadow-2xl w-11/12 lg:w-11/12">
          <div className="text-center lg:text-left w-full lg:w-1/2 md:w-1/2">
            <img src={authImg} alt="" className="max-w-full h-auto" />
          </div>
          <div className="card bg-base-100 w-full lg:w-1/2 md:w-1/2 shadow-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold pt-5 font-cinzel text-center">
              Register
            </h1>
            <form className="card-body py-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  className="input input-bordered"
                  {...register("name")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Photo URL"
                  name="photo"
                  className="input input-bordered"
                  {...register("photo")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="input input-bordered"
                  {...register("email")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  className="input input-bordered space-y-1"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                  })}
                  required
                />
                {errors.password && (
                  <p className="text-red-600 px-1">
                    {errors.password.type === "required" &&
                      "Password field is required"}
                    {errors.password.type === "minLength" &&
                      "At least 8 characters long"}
                    {errors.password.type === "pattern" &&
                      "Password must include at least 1 lowercase, uppercase, number, and special character"}
                  </p>
                )}
              </div>
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
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="Type Captcha"
                  ref={captchaRef}
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  className="input input-bordered"
                  required
                />
                {/* <button className='btn btn-outline btn-xs my-2' onClick={handleValidateCaptcha}>Validate</button> */}
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  type="submit"
                  className="btn bg-firstBg text-white"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-blue-600 text-center pb-5">
              <small>
                {" "}
                Allready Have An Account ?{" "}
                <Link to={"/auth/login"} className="font-bold">
                  {" "}
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
