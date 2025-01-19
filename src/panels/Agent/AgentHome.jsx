import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaSackDollar } from "react-icons/fa6";
import { MdHomeWork, MdOutlinePendingActions, MdSell } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AgentHome = () => {
  const [agentStats, setAgentStats] = useState([]);
  const { user, showToast, dark } = useAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/agentStats/${user.email}`).then((res) => {
      // console.log(res.data == null);
      setAgentStats(res.data);
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
            <MdHomeWork />
          </div>
          <div>
            <p className={cardTitleCss}>Total Property</p>
            <p className={cardCountCss}>{agentStats?.totalProperty}</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={cardCss}>
          <div className={cardIconCss2}>
            <MdOutlinePendingActions />
          </div>
          <div>
            <p className={cardTitleCss}>Pending Offers</p>
            <p className={cardCountCss}>{agentStats?.pendingOffers}</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className={cardCss}>
          <div className={cardIconCss3}>
            <MdSell />
          </div>
          <div>
            <p className={cardTitleCss}>Total Deals</p>
            <p className={cardCountCss}>{agentStats?.totalDeals}</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className={cardCss}>
          <div className={cardIconCss4}>
            <FaSackDollar />
          </div>
          <div>
            <p className={cardTitleCss}>Earning</p>
            <p className={cardCountCss}>{agentStats?.totalEarnings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentHome;
