import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useMember from "../hooks/useMember";

const MemberRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isMember] = useMember();
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  if (user && isMember) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};
export default MemberRoute;
