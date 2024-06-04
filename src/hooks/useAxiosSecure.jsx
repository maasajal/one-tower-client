import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: import.meta.env.VITE_SERVER,
  baseURL: import.meta.env.VITE_LOCAL_SERVER,
});
const useAxiosSecure = () => {
  return axiosSecure;
};
export default useAxiosSecure;
