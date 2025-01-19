import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useState } from "react";

const useDeal = ({ type, sold }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const flagData = sold ? "sold" : "";
  const {
    refetch,
    data: deals = { data: [], count: 0 },
    isFetched,
  } = useQuery({
    queryKey: ["deals", user?.email, currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/deals?email=${user.email}&type=${type}&flag=${flagData}&page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });
  const numberOfPages = Math.ceil(deals?.count / itemsPerPage) || 1;
  const pages = [...Array(numberOfPages).keys()];
  return {
    deals: deals?.result || [],
    refetch,
    isFetched,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    pages,
  };
};

export default useDeal;
