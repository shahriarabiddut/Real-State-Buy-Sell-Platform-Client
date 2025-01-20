import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {import.meta.env.VITE_NAME}
            </h2>
            <p className="pb-3 text-justify">
              Welcome to a platform designed to transform the real estate
              experience for both agents and customers.
            </p>
            <div className="flex space-x-4">
              <Link
                to={``}
                className="text-gray-400 text-2xl p-3 bg-gray-700 rounded-full hover:text-white"
              >
                <FaXTwitter />
              </Link>
              <Link
                to={``}
                className="text-gray-400 text-2xl p-3 bg-gray-700 rounded-full hover:text-white"
              >
                <FaFacebook />
              </Link>
              <Link
                to={``}
                className="text-gray-400 text-2xl p-3 bg-gray-700 rounded-full hover:text-white"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Community</h2>
            <ul>
              <li>
                <Link
                  to={`/properties`}
                  className="text-gray-400 hover:text-white"
                >
                  <FaChevronRight className="inline mr-2" />
                  Search Properties
                </Link>
              </li>
              <li>
                <Link to={`/agents`} className="text-gray-400 hover:text-white">
                  <FaChevronRight className="inline mr-2" />
                  Agents
                </Link>
              </li>
              {/* <li>
                <Link
                  to={`/reviews`}
                  className="text-gray-400 hover:text-white"
                >
                  <FaChevronRight className="inline mr-2" />
                  Reviews
                </Link>
              </li> */}
              {/* <li>
                <Link to={`/faqs`} className="text-gray-400 hover:text-white">
                  <FaChevronRight className="inline mr-2" />
                  FAQs
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Company</h2>
            <ul>
              <li>
                <Link to={`/about`} className="text-gray-400 hover:text-white">
                  <FaChevronRight className="inline mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={`/contact`}
                  className="text-gray-400 hover:text-white"
                >
                  <FaChevronRight className="inline mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link
                  to={`/auth/login`}
                  className="text-gray-400 hover:text-white"
                >
                  <FaChevronRight className="inline mr-2" />
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to={`/auth/register`}
                  className="text-gray-400 hover:text-white"
                >
                  <FaChevronRight className="inline mr-2" />
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Have any Questions?</h2>
            <ul>
              <li className="flex items-center mb-3">
                <FaMapMarkerAlt className="mr-3" />
                <span>Dhaka , Bangladesh</span>
              </li>
              <li className="flex items-center mb-3">
                <FaPhoneAlt className="mr-3" />
                <Link to="tel:+23923929210">+88 01945506778</Link>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <Link to="mailto:info@yourdomain.com">
                  info@phrealstate.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved | Developed
            by&nbsp;
            <Link
              to={"https://shahriarahbiddut.web.app/"}
              className="text-firstBg font-playWrite hover:text-white"
            >
              Shahriar Ahmed Biddut
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
