import SectionTitle from "../../components/SectionTitle";
import useApartment from "../../hooks/useApartment";
import Banner from "../Home/Banner/Banner";
import ApartmentCard from "./ApartmentCard";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Apartment.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Carousel } from "react-responsive-carousel";

const Apartment = () => {
  const [apartment] = useApartment();

  const itemsPerPage = 6;
  //   const numberOfPages = Math.ceil(apartment.length / itemsPerPage);
  const pages = Array.from(
    { length: Math.ceil(apartment.length / itemsPerPage) },
    (v, i) => apartment.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  );
  console.log(pages);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Banner />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-12">
        <SectionTitle
          title="Our Apartments"
          subTitle="Find your suitable apartment"
        />
        <section id="apartment">
          <Carousel>
            {pages.map((rooms, index) => (
              <div key={index}>
                <img src={index + 1} alt={index + 1} className="w-5" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rooms.map((room) => (
                    <ApartmentCard key={room._id} room={room} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
          {/* <Swiper
            pagination={pagination}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            id="apartment"
          >
            {pages.map((rooms, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rooms.map((room) => (
                    <ApartmentCard key={room._id} room={room} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </section>
      </div>
    </>
  );
};
export default Apartment;
