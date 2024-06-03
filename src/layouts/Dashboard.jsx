import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import useUsers from "../hooks/useUsers";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [users] = useUsers();
  const memberUser = users.filter((member) => member.role === "member");
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen px-8 pt-12 bg-[#3d5cab] text-white space-y-8 -ml-60 md:ml-0 hover:ml-0 md:hover:ml-0">
        <img src={logo} alt="company logo" />
        <ul className="menu uppercase space-y-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminProfile">Admin Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageMembers">Manage Members</NavLink>
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
                <NavLink to="/dashboard/manageCoupons">Manage Coupons</NavLink>
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
                    <NavLink to="/dashboard/makePayment">Make Payment</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/paymentHistory">
                      Payment History
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink to="/dashboard/announcements">Announcements</NavLink>
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
      <div className="flex-1 py-20 px-10 bg-[#F6F6F6]">
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
