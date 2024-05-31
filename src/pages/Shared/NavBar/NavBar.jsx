import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/oneTower.png";
import userPhoto from "../../../../public/favicon.png";
import "./NavBar.css";

const NavBar = () => {
  const navLinks = (
    <>
      <li key="home" className="hover:text-[#e87726]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li key="apartment" className="hover:text-[#e87726]">
        <NavLink to="/apartment">Apartment</NavLink>
      </li>
      <li key="about" className="hover:text-[#e87726]">
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li key="contact" className="hover:text-[#e87726]">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <>
      <header className="navbar py-4 md:px-14 bg-[#3d5cab80] text-white font-extrabold fixed z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#e87726]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#3d5cab80] rounded-box w-52 uppercase"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost h-full w-40">
            <img src={logo} alt="company logo" />
          </a>
        </div>
        <div className="navbar items-center justify-end gap-1 md:gap-2">
          <ul className="menu menu-horizontal hidden lg:flex uppercase">
            {navLinks}
          </ul>
          <div className="dropdown dropdown-end mr-1 tooltip tooltip-bottom tooltip-primary z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={userPhoto} alt="Logged user photo" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#b1b6c0] text-black rounded-box w-52 uppercase"
            >
              <li>
                <NavLink to="/userName" className="py-3 hover:text-white">
                  User Name
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className="py-3 hover:text-white">
                  Dashboard
                </NavLink>
              </li>
              <Link className="btn btn-outline px-3 font-extrabold">
                Sign Out
              </Link>
            </ul>
          </div>
          <Link
            to="/login"
            className="btn btn-outline px-3 text-[#e87726] uppercase font-extrabold"
          >
            Login
          </Link>
        </div>
      </header>
    </>
  );
};
export default NavBar;