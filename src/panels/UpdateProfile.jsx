import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateProfile = () => {
  const [serverUser, setServerUser] = useState([]);
  const { user, updateUserProfile, showToast, dark } = useAuth();
  const fontColor = dark ? "white" : "black";
  const bgColor = dark ? "bg-gray-700" : "bg-gray-300";
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleUpdate = (e) => {
    e.preventDefault();
    const bio = e.target.bio.value;
    const updateData = { email: user.email, name, photo, bio };
    console.log(updateData);
    updateUserProfile(name, photo)
      .then(() => {
        // Proifle Update in MongoDB
        //Updated User Info
        axiosSecure
          .patch(`/user`, updateData)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            if (error.status == 401) {
              showToast("You don't Have Permission!", "error");
            } else {
              showToast("Something Went Wrong!", "error");
            }
          });
        navigate("/dashboard/profile");
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("Updated ", bio);
    showToast("Profile Updated", "info");
  };
  useEffect(() => {
    axiosSecure
      .get(`/user/${user.email}`)
      .then((res) => {
        setServerUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [user]);
  return (
    <div className="min-h-fit flex justify-center items-center py-10">
      <Helmet>
        <title>Update Profile | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <div className="w-10/12 md:w-9/12 lg:w-4/6 mx-auto my-4">
        <SectionTitle
          title={"Profile"}
          subTitle={"User Profile"}
          color={fontColor}
        />
        <div className="mx-auto">
          <form
            className={`card-body shadow-lg rounded-lg ${bgColor}`}
            onSubmit={handleUpdate}
          >
            <div className="form-control">
              <label className="label">
                <span className={`label-text text-${fontColor}`}>Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={serverUser.name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className={`label-text text-${fontColor}`}>
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={serverUser.photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className={`label-text text-${fontColor}`}>Bio</span>
              </label>
              <textarea
                className="border-2 rounded-xl "
                rows="3"
                name="bio"
                defaultValue={serverUser.bio}
              ></textarea>
            </div>
            <div className="form-control my-6">
              <button
                type="submit"
                className="btn bg-firstBg text-white font-semibold hover:text-firstBg hover:font-bold hover:bg-white"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
