import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Apartment from "../pages/Apartment/Apartment";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MyProfile from "../pages/Dashboard/MyProfile";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Announcements from "../pages/Dashboard/Announcements";
import MakePayment from "../pages/Dashboard/Payment/MakePayment";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import Payment from "../pages/Dashboard/Payment/Payment";
import ManageMembers from "../pages/Dashboard/Admin/ManageMembers/ManageMembers";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile.js/AdminProfile";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement/MakeAnnouncement";
import AgreementRequests from "../pages/Dashboard/Admin/AgreementRequests/AgreementRequests";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons/ManageCoupons";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment",
        element: <Apartment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/announcements",
        element: (
          <PrivateRoute>
            <Announcements />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/makePayment",
        element: (
          <PrivateRoute>
            <MakePayment />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      //   Admin dashboard navs
      {
        path: "/dashboard/adminProfile",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageMembers",
        element: (
          <AdminRoute>
            <ManageMembers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/makeAnnouncement",
        element: (
          <AdminRoute>
            <MakeAnnouncement />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/agreementRequests",
        element: (
          <AdminRoute>
            <AgreementRequests />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageCoupons",
        element: (
          <AdminRoute>
            <ManageCoupons />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
