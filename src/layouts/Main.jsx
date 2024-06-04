import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="font-Inter">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Main;
