import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMember = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isMember, isPending: isMemberPending } = useQuery({
    queryKey: [user?.email, "isMember"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/is-member/${user.email}`);
      return res.data?.member;
    },
  });
  return [isMember, isMemberPending];
};
export default useMember;
