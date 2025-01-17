import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useProperty = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: properties = [] } = useQuery({
    queryKey: ["properties", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myproperty?email=${user.email}`);
      return res.data;
    },
  });
  return [properties, refetch];
};
export default useProperty;
