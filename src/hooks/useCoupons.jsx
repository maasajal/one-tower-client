import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCoupons = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: agreement = [], refetch } = useQuery({
    queryKey: ["agreements", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements/${user.email}`);
      return res.data;
    },
  });
  return [agreement, refetch];
};
export default useCoupons;
