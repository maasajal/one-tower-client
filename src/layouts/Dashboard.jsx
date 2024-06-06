import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import useAdmin from "../hooks/useAdmin";
import { RiAdminFill, RiCoupon3Fill, RiMenuUnfold3Fill } from "react-icons/ri";
import useMember from "../hooks/useMember";

import { FaHistory, FaHome, FaUser, FaWallet } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import {
  MdAnnouncement,
  MdApartment,
  MdRequestPage,
  MdOutlineContactPhone,
} from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { FcAbout } from "react-icons/fc";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isMember] = useMember();
  return (
    <>
      <div className="drawer md:drawer-open font-Raleway">
        <input
          id="dashboard_drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="dashboard_drawer"
            className="btn btn-outline drawer-button md:hidden fixed top-5 left-2 z-10"
          >
            <RiMenuUnfold3Fill />
          </label>
          <div className="py-20 px-5 bg-[#3d5cab80] w-full min-h-screen">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard_drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="w-64 min-h-screen px-4 pt-20 bg-[#3d5cab] text-white space-y-5">
            <img src={logo} alt="company logo" />
            <ul className="menu uppercase space-y-4">
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/dashboard/adminProfile">
                      <RiAdminFill className="text-lg" /> Admin Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageMembers">
                      <FaUsersGear className="text-lg" /> Manage Members
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/makeAnnouncement">
                      <MdAnnouncement className="text-lg" /> Make Announcement
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/agreementRequests">
                      <MdRequestPage className="text-lg" /> Agreement Requests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageCoupons">
                      <RiCoupon3Fill className="text-lg" /> Manage Coupons
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard/myProfile">
                      <FaUser className="text-lg" /> My Profile
                    </NavLink>
                  </li>
                  {isMember && (
                    <>
                      <li>
                        <NavLink to="/dashboard/makePayment">
                          <FaWallet className="text-lg" /> Make Payment
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/dashboard/paymentHistory">
                          <FaHistory className="text-lg" /> Payment History
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <NavLink to="/dashboard/announcements">
                      <TfiAnnouncement className="text-lg" /> Announcements
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <hr />
            <ul className="menu uppercase space-y-4">
              <li>
                <NavLink to="/">
                  <FaHome className="text-lg" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/apartment">
                  <MdApartment className="text-lg" /> Apartment
                </NavLink>
              </li>
              <li>
                <NavLink to="/#about">
                  <FcAbout className="text-lg" /> About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/#contact">
                  <MdOutlineContactPhone className="text-lg" /> Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
