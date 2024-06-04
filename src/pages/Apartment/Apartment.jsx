import SectionTitle from "../../components/SectionTitle";
import useApartment from "../../hooks/useApartment";
import Cover from "../Shared/Cover/Cover";
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
import { Helmet } from "react-helmet";

const Apartment = () => {
  const [apartment] = useApartment();

  const itemsPerPage = 6;
  //   const numberOfPages = Math.ceil(apartment.length / itemsPerPage);
  const pages = Array.from(
    { length: Math.ceil(apartment.length / itemsPerPage) },
    (v, i) => apartment.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  );
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Apartments - One Tower</title>
      </Helmet>
      <Cover
        bgImage="https://i.ibb.co/qdS9LFZ/apartmentforrent.jpg"
        heading="Apartment for Rent"
        headingText="Welcome to The One Tower Agreement"
      />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-12">
        <SectionTitle
          title="Our Apartments"
          subTitle="Find your suitable apartment"
        />
        <section id="apartment">
          {/* <Carousel>
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
          </Carousel> */}

          <Swiper
            pagination={pagination}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            id="apartment"
          >
            {pages.map((rooms, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-14 md:pb-20">
                  {rooms.map((room) => (
                    <ApartmentCard key={room._id} room={room} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
};
export default Apartment;
