import SectionTitle from "../../../components/SectionTitle";
import GoogleMapReact from "google-map-react";
import OneTowerMap from "./OneTowerMap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Location = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div id="contact" className="py-10">
      <SectionTitle
        title="Find Your Way to One Tower"
        subTitle="Want to Visit our location?"
      />
      <p className="max-w-3xl mx-auto text-center">
        Prime Location One Tower is strategically located in the heart of the
        city, offering easy access to major attractions, business districts, and
        recreational areas. Our prime location ensures that everything you need
        is just a short distance away, making your daily commute and weekend
        adventures a breeze.
      </p>
      <div className="my-5 md:my-10 flex items-center flex-col md:flex-row">
        <div className="bg-[#3d5cab] p-4 md:p-10 text-white space-y-5 w-full md:w-1/3">
          <h3 className="text-3xl">Address:</h3>
          <address>Pellervonkatu 9 / Joukahaisenkatu 5, 33540 TAMPERE</address>
          <h3 className="text-3xl">Distances</h3>
          <div className="flex justify-between gap-5">
            <p>Tampere university central campus</p>
            <p>1.6 km</p>
          </div>
          <div className="flex justify-between gap-5">
            <p>Tampere university Hervanta campus </p>
            <p>7.2 km</p>
          </div>
          <div className="flex justify-between gap-5">
            <p>TAMK (Teiskontie)</p>
            <p>1.9 km</p>
          </div>
          <div className="flex justify-between gap-5">
            <p>Nearest bus stop</p>
            <p>200 m</p>
          </div>
          <div className="flex justify-between gap-5">
            <p>Nearest tram stop</p>
            <p>200 m</p>
          </div>
          <div className="flex justify-between gap-5">
            <p>Nearest grocery store</p>
            <p>200 m</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.809106743173!2d23.80415530000001!3d61.49791179999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468f20a765ecd8a7%3A0x89ececfbeb855b1c!2sPellervonkatu%209%2C%2033540%20Tampere!5e0!3m2!1sen!2sfi!4v1717236925143!5m2!1sen!2sfi"
          className="h-[550px] w-full md:w-2/3"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default Location;
