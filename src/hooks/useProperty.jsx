import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useState } from "react";

const useProperty = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const {
    refetch,
    data: properties = { data: [], count: 0 },
    isFetching,
  } = useQuery({
    queryKey: ["properties", user?.email, currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/property?email=${user.email}&page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const numberOfPages = Math.ceil(properties?.count / itemsPerPage) || 1;
  const pages = [...Array(numberOfPages).keys()];

  return {
    properties: properties?.result || [],
    refetch,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    pages,
    isFetching,
  };
};

export default useProperty;
