import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useState } from "react";

const useWishList = ({ dashboard }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const panel = dashboard ? "dashboard" : "";
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const {
    refetch,
    data: wishlist = { data: [], count: 0 },
    isFetched,
  } = useQuery({
    queryKey: ["wishlist", user?.email, currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/wishlist?email=${user.email}&dashboard=${panel}&page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });
  const numberOfPages = Math.ceil(wishlist?.count / itemsPerPage) || 1;
  const pages = [...Array(numberOfPages).keys()];
  return {
    wishlist: wishlist?.result || [],
    refetch,
    isFetched,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    pages,
    count: wishlist?.count || 0,
  };
};

export default useWishList;
