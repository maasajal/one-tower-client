import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center my-20 mx-auto space-y-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 - Page Not Found!</title>
      </Helmet>
      <h1 className="text-5xl font-Cinzel font-bold text-red-700">
        404 - Page not found!
      </h1>
      <hr />
      <ul className="menu max-w-96 mx-auto space-y-5">
        <li>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/dashboard/myProfile" className="btn">
            Back to Dashboard
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/dashboard/adminProfile" className="btn">
            Back to Admin Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default ErrorPage;
