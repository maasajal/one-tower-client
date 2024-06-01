import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen px-8 pt-12 bg-[#3d5cab] text-white space-y-8 -ml-60 md:ml-0 hover:ml-0 md:hover:ml-0">
        <img src={logo} alt="company logo" />
        <ul className="uppercase space-y-4">
          <li>
            <NavLink to="/dashboard/myProfile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/announcements">Announcements</NavLink>
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
