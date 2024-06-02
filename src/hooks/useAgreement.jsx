import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAgreement = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: agreement = [] } = useQuery({
    queryKey: ["agreements", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements/${user.email}`);
      return res.data;
    },
  });
  return [agreement];
};
export default useAgreement;
