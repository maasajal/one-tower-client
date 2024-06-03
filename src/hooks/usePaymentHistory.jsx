import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: paymentHistory = [], refetch } = useQuery({
    queryKey: ["payment-histories", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-histories/${user.email}`);
      return res.data;
    },
  });
  return [paymentHistory, refetch];
};
export default usePaymentHistory;
