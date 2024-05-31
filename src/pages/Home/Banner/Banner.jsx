import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import bannerSlide1 from "../../../assets/logo.png";
import bannerSlide2 from "../../../assets/logo.png";
import bannerSlide3 from "../../../assets/logo.png";
import bannerSlide4 from "../../../assets/logo.png";
import bannerSlide5 from "../../../assets/logo.png";
import bannerSlide6 from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showArrows={true} className="text-center">
        <div>
          <img src={bannerSlide1} />
          <div className="legend space-y-6">
            <h2 className="text-3xl font-bold">Apartment 1</h2>
            <Link
              to="/apartment-details"
              className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
            >
              View Details
            </Link>
          </div>
        </div>
        <div>
          <img src={bannerSlide2} />
          <div className="legend space-y-6">
            <h2 className="text-3xl font-bold">Apartment 2</h2>
            <Link
              to="/apartment-details"
              className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
            >
              View Details
            </Link>
          </div>
        </div>
        <div>
          <img src={bannerSlide3} />
          <div className="legend space-y-6">
            <h2 className="text-3xl font-bold">Apartment 3</h2>
            <Link
              to="/apartment-details"
              className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
            >
              View Details
            </Link>
          </div>
        </div>
        <div>
          <img src={bannerSlide4} />
          <div className="legend space-y-6">
            <h2 className="text-3xl font-bold">Apartment 4</h2>
            <Link
              to="/apartment-details"
              className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
            >
              View Details
            </Link>
          </div>
        </div>
        <div>
          <img src={bannerSlide5} />
          <div className="legend space-y-6">
            <h2 className="text-3xl font-bold">Apartment 5</h2>
            <Link
              to="/apartment-details"
              className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
            >
              View Details
            </Link>
          </div>
        </div>
        <div>
          <img src={bannerSlide6} />
          <div className="legend space-y-6">
            <h2 className="text-3xl font-bold">Apartment 6</h2>
            <Link
              to="/apartment-details"
              className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
            >
              View Details
            </Link>
          </div>
        </div>
      </Carousel>
    </>
  );
};
export default Banner;
