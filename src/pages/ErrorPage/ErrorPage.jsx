import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center my-20 mx-auto space-y-5">
      <h1 className="text-5xl font-Cinzel font-bold text-red-700">
        404 - Page not found!
      </h1>
      <hr />
      <Link to="/" className="btn">
        Back to Home
      </Link>
      <hr />
      <Link to="/dashboard/myProfile" className="btn">
        Back to Dashboard
      </Link>
      <hr />
      <Link to="/dashboard/adminProfile" className="btn">
        Back to Admin Dashboard
      </Link>
    </div>
  );
};
export default ErrorPage;
