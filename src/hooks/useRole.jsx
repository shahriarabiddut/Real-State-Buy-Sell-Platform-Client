import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isRole,
    isPending: isRoleLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "isRole"],
    enabled: !loading,
    queryFn: async () => {
      // console.log("is Role?");
      if (!user?.email) return false;
      const res = await axiosSecure.get(`/user/role/${user.email}`);
      // console.log(res.data?.role);
      return res.data?.role;
    },
  });

  return [isRole, isRoleLoading, refetch];
};

export default useRole;
