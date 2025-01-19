import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useState } from "react";

const useReview = ({ dashboard, propertyId }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const panel = dashboard ? "dashboard" : "";
  const userEmail = dashboard === "home" ? "" : user.email;
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const {
    refetch,
    data: review = { data: [], count: 0 },
    isFetched,
  } = useQuery({
    queryKey: ["review", user?.email, currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/review?email=${userEmail}&dashboard=${panel}&id=${propertyId}`
      );
      return res.data;
    },
  });
  const numberOfPages = Math.ceil(review?.count / itemsPerPage) || 1;
  const pages = [...Array(numberOfPages).keys()];
  return {
    reviews: review?.result || [],
    count: review?.count,
    refetchReview: refetch,
    isFetchedReview: isFetched,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    pages,
  };
};

export default useReview;
