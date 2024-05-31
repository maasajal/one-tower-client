import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Main;
