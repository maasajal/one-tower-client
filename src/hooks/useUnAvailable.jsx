import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUnAvailable = () => {
  const axiosSecure = useAxiosSecure();
  const { data: unAvailable = [], refetch: reload } = useQuery({
    queryKey: ["unavailable"],
    queryFn: async () => {
      const res = await axiosSecure.get("/unavailable");
      return res.data;
    },
  });
  return [unAvailable, reload];
};
export default useUnAvailable;
