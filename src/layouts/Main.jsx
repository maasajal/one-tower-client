import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default Main;
