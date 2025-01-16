import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SectionTitle from "../components/SectionTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Profile = () => {
  const [serverUser, setServerUser] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user, dark } = useAuth();
  const fontColor = dark ? "white" : "black";
  useEffect(() => {
    axiosSecure
      .get(`/user/${user.email}`)
      .then((res) => setServerUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Profile | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <section className="mx-auto w-11/12">
        <div className=" min-h-screen my-10 ">
          <div className="lg:w-6/12 md:w-8/12 w-full mx-auto grid gap-4 mb-4">
            <SectionTitle
              title={"Profile"}
              subTitle={"User Profile"}
              color={fontColor}
            />
          </div>
          <div className="card shadow-lg bg-gray-700 text-white">
            <figure className="px-10 pt-10">
              <img
                src={serverUser.photo}
                alt={`Profile pic of ${serverUser.name}`}
                className="rounded-xl w-64 h-64"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="font-bold text-2xl text-center">
                {serverUser.name}
              </h2>
              <p className="font-semibold">{serverUser.email}</p>
              <p className="text-justify text-white">
                {serverUser.bio == null ? "Add Bio" : serverUser?.bio}
              </p>
              <div className="card-actions justify-center mt-4">
                <NavLink to={"/dashboard/profile/update"}>
                  <button className="bg-firstBg text-white p-3 font-semibold font-montserrat cursor-pointer hover:bg-white hover:border hover:border-gray-400 hover:text-firstBg rounded-lg flex gap-2 items-center">
                    <FaEdit />
                    Edit Profile
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
