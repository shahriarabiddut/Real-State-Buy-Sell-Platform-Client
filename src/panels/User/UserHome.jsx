import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaSackDollar } from "react-icons/fa6";
import {
  MdOutlinePendingActions,
  MdOutlineRateReview,
  MdSell,
} from "react-icons/md";
import { SiWish } from "react-icons/si";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserHome = () => {
  const [userStats, setUserStats] = useState([]);
  const { user, showToast, dark } = useAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/userStats/${user.email}`).then((res) => {
      // console.log(res.data == null);
      setUserStats(res.data);
    });
  }, []);
  const cardCss = `flex items-center p-4 rounded-lg shadow-lg ${
    dark ? "bg-gray-800" : "bg-white "
  }`;
  const cardIconCss = `p-3 mr-4  rounded-full ${
    dark ? "bg-green-200" : "bg-green-500"
  }`;
  const cardIconCss2 = `p-3 mr-4  rounded-full ${
    dark ? "bg-red-200" : "bg-red-500"
  }`;
  const cardIconCss3 = `p-3 mr-4  rounded-full ${
    dark ? "bg-blue-200" : "bg-blue-500"
  }`;
  const cardIconCss4 = `p-3 mr-4  rounded-full ${
    dark ? "bg-yellow-200" : "bg-yellow-500"
  }`;
  const cardTitleCss = `mb-2 text-sm font-medium ${
    dark ? "text-gray-400" : "text-gray-600"
  }`;
  const cardCountCss = `text-lg font-semibold ${
    dark ? "text-gray-200" : "text-gray-700"
  }`;
  return (
    <div>
      <Helmet>
        <title>Dashboard | {import.meta.env.VITE_NAME}</title>
      </Helmet>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 my-20">
        {/* Card 1 */}
        <div className={cardCss}>
          <div className={cardIconCss}>
            <SiWish />
          </div>
          <div>
            <p className={cardTitleCss}>Total Wishlisted</p>
            <p className={cardCountCss}>{userStats?.wishlistCount}</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={cardCss}>
          <div className={cardIconCss2}>
            <MdOutlineRateReview />
          </div>
          <div>
            <p className={cardTitleCss}>Total Reviews</p>
            <p className={cardCountCss}>{userStats?.reviewsCount}</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className={cardCss}>
          <div className={cardIconCss3}>
            <MdSell />
          </div>
          <div>
            <p className={cardTitleCss}>Deals Requested</p>
            <p className={cardCountCss}>{userStats?.dealsOffered}</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className={cardCss}>
          <div className={cardIconCss4}>
            <FaSackDollar />
          </div>
          <div>
            <p className={cardTitleCss}>Total Spent</p>
            <p className={cardCountCss}>{userStats?.totalSpent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
