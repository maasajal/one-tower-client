import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import useUsers from "../hooks/useUsers";
import useAdmin from "../hooks/useAdmin";
import { RiMenuUnfold3Fill } from "react-icons/ri";

const Dashboard = () => {
  const [users] = useUsers();
  const memberUser = users.filter((member) => member.role === "member");
  const [isAdmin] = useAdmin();

  return (
    <>
      <div className="drawer md:drawer-open">
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
                      Admin Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageMembers">
                      Manage Members
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/makeAnnouncement">
                      Make Announcement
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/agreementRequests">
                      Agreement Requests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageCoupons">
                      Manage Coupons
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard/myProfile">My Profile</NavLink>
                  </li>
                  {memberUser.length > 0 && (
                    <>
                      <li>
                        <NavLink to="/dashboard/makePayment">
                          Make Payment
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/dashboard/paymentHistory">
                          Payment History
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <NavLink to="/dashboard/announcements">
                      Announcements
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <hr />
            <ul className="menu uppercase space-y-4">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apartment">Apartment</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
