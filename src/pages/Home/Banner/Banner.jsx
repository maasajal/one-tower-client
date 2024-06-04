import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showArrows={true} className="text-center">
        <div>
          <img src="https://i.ibb.co/8bf7jVX/banner1.jpg" alt="" />
          <div className="legend">
            <div className="py-2 md:py-14 space-y-2 md:space-y-6">
              <h2 className="text-3xl font-bold">The One Tower building</h2>
              <p>Beautiful evening view of the One Tower building</p>
              <Link
                to="/apartment"
                className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
              >
                Our apartments
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/yXvJS8B/banner2.jpg" />
          <div className="legend">
            <div className="py-2 md:py-14 space-y-2 md:space-y-6">
              <h2 className="text-3xl font-bold">The One Tower building</h2>
              <p>Another side view of the One Tower building</p>
              <Link
                to="/apartment"
                className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
              >
                Our apartments
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/M1bP25t/banner3.jpg" />
          <div className="legend">
            <div className="py-2 md:py-14 space-y-2 md:space-y-6">
              <h2 className="text-3xl font-bold">
                A place of peace and recreation
              </h2>
              <p>Well decorated drawing room with nice view</p>
              <Link
                to="/apartment"
                className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
              >
                Our apartments
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/FgGYzk5/banner4.jpg" />
          <div className="legend">
            <div className="py-2 md:py-14 space-y-2 md:space-y-6">
              <h2 className="text-3xl font-bold">
                Children Playground in yard
              </h2>
              <p>
                Child health is importance & physical activities help their
                growth
              </p>
              <Link
                to="/apartment"
                className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
              >
                Our apartments
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/L1WbYvs/banner5.jpg" />
          <div className="legend">
            <div className="py-2 md:py-14 space-y-2 md:space-y-6">
              <h2 className="text-3xl font-bold">Luxurious Bedroom</h2>
              <p>
                Luxury bedrooms that will metamorphose your sleeping space into
                a haven of opulence and refinement
              </p>
              <Link
                to="/apartment"
                className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
              >
                Our apartments
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/2PhqX9z/banner6.jpg" />
          <div className="legend">
            <div className="py-2 md:py-14 space-y-2 md:space-y-6">
              <h2 className="text-3xl font-bold">Gym center for Tenants</h2>
              <p>All the residence have free access for the gym</p>
              <Link
                to="/apartment"
                className="btn btn-outline text-[#e87726] hover:text-[#e87726]"
              >
                Our apartments
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};
export default Banner;
