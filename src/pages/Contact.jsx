import React from "react";
import BreadcumbBanner from "../components/BreadcumbBanner";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <BreadcumbBanner title={"Contact Us"} />
      <section className="py-20 w-11/12 mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="w-4/5 md:w-3/5 mb-10">
              <h2 className="text-center text-2xl font-bold mb-5 font-poppins">
                If you got any questions
                <br />
                please do not hesitate to send us a message
              </h2>
              <form className="bg-base-100 shadow-md rounded p-6">
                <div className="form-control mb-4">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-control mb-4">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-control mb-4">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-control mb-4">
                  <textarea
                    cols="30"
                    rows="7"
                    className="textarea textarea-bordered w-full"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-control">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn bg-firstBg border-none hover:bg-white hover:text-firstBg text-white w-full"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex-1 px-4 mb-6 md:mb-0 text-center inline-flex font-bold justify-center items-center gap-4 md:gap-2">
              <FaMapMarkerAlt className="text-3xl text-firstBg" />
              <p className="text-xl">Dhaka, Bangladesh</p>
            </div>
            <div className="flex-1 px-4 mb-6 md:mb-0 text-center inline-flex font-bold justify-center items-center gap-4 md:gap-2 md:border-l md:border-r">
              <FaPhoneAlt className="text-3xl text-firstBg" />
              <p className="text-xl">
                <Link to="tel:+23923929210">+88 01945506778</Link>
              </p>
            </div>
            <div className="flex-1 px-4 mb-6 md:mb-0 text-center inline-flex font-bold justify-center items-center gap-4 md:gap-2">
              <FaEnvelope className="text-3xl text-firstBg" />
              <p className="text-xl">
                <Link to="mailto:info@yourdomain.com">
                  info@phrealstate.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
