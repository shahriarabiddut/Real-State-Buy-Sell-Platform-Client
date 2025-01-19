import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useState } from "react";

const useProperty = ({ admin, home, advertise, sort }) => {
  // For Search
  const [filters, setFilters] = useState("");
  // console.log(admin, home, advertise);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const userEmail = admin ? "" : user?.email;
  const check = home ? "verified" : "";
  const adv = advertise ? "adv" : "";
  const selecetitemsPerPage = advertise ? 4 : 12;
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(selecetitemsPerPage);
  const {
    refetch,
    data: properties = { data: [], count: 0 },
    isFetched,
  } = useQuery({
    queryKey: ["properties", userEmail, currentPage, itemsPerPage, filters],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/property?email=${userEmail}&page=${currentPage}&size=${itemsPerPage}&check=${check}&adv=${adv}&${filters}`
      );
      // console.log(filters);
      return res.data;
    },
    keepPreviousData: true,
  });

  const numberOfPages = Math.ceil(properties?.count / itemsPerPage) || 1;
  const pages = [...Array(numberOfPages).keys()];

  return {
    properties: properties?.result || [],
    count: properties?.count || [],
    refetch,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    pages,
    isFetched,
    filters,
    setFilters,
  };
};

export default useProperty;
