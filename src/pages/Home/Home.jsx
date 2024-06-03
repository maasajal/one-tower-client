import AboutTheBuilding from "./AboutTheBuilding/AboutTheBuilding";
import Banner from "./Banner/Banner";
import Coupons from "./Coupons/Coupons";
import Location from "./Location/Location";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - One Tower</title>
      </Helmet>
      <Banner />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-12">
        <AboutTheBuilding />
        <Coupons />
        <Location />
      </div>
    </>
  );
};
export default Home;
