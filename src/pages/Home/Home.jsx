import AboutTheBuilding from "./AboutTheBuilding/AboutTheBuilding";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-12">
        <AboutTheBuilding />
      </div>
    </>
  );
};
export default Home;
