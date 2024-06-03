import SectionTitle from "../../../components/SectionTitle";

const AboutTheBuilding = () => {
  return (
    <div className="bg-[#3d5cab] py-14">
      <SectionTitle
        title="About The Building"
        subTitle="Know more about our building"
      />
      <div className="p-5 md:p-10 text-white space-y-5">
        <p className="leading-8 text-justify">
          One Tower is a beacon of luxury and convenience, standing tall in the
          heart of the city. Designed with modern aesthetics and cutting-edge
          technology, our building offers an unparalleled living experience for
          residents and visitors alike.
        </p>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold border-b-2 border-[#e87726] w-fit pb-3">Architectural Excellence</h4>
          <p className="leading-8 text-justify">
            One Tower is a masterpiece of contemporary architecture. Its sleek,
            glass facade reflects the bustling cityscape, while the innovative
            design ensures maximum natural light and panoramic views from every
            apartment. The building's striking presence makes it a landmark in
            the city skyline.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold border-b-2 border-[#e87726] w-fit pb-3">State-of-the-Art Amenities</h4>
          <p className="leading-8 text-justify">
            Living in One Tower means enjoying access to world-class amenities
            designed to enhance your lifestyle. Residents can unwind in the
            rooftop infinity pool, stay active in the state-of-the-art fitness
            center, or host events in the elegant community lounge. Each amenity
            space is thoughtfully crafted to provide comfort and convenience.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold border-b-2 border-[#e87726] w-fit pb-3">Smart Home Integration</h4>
          <p className="leading-8 text-justify">
            At One Tower, we embrace the future of living with smart home
            technology integrated throughout the building. Control lighting,
            temperature, and security systems with ease from your smartphone.
            Our smart home features ensure that your living environment is
            always tailored to your preferences.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold border-b-2 border-[#e87726] w-fit pb-3">Sustainable Living</h4>
          <p className="leading-8 text-justify">
            We are committed to sustainability and eco-friendly practices. One
            Tower is equipped with energy-efficient systems, solar panels, and
            rainwater harvesting facilities. Our green initiatives not only
            reduce environmental impact but also lower utility costs for
            residents.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold border-b-2 border-[#e87726] w-fit pb-3">Prime Location</h4>
          <p className="leading-8 text-justify">
            Situated in a prime location, One Tower offers easy access to the
            city's best dining, shopping, and entertainment venues. Excellent
            public transport links ensure that commuting is a breeze, while
            nearby parks and recreational areas provide a perfect escape from
            the urban hustle.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold border-b-2 border-[#e87726] w-fit pb-3">Unmatched Security</h4>
          <p className="leading-8 text-justify">
            Your safety is our top priority. One Tower features 24/7 security
            personnel, advanced surveillance systems, and secure access points.
            Our comprehensive security measures give residents peace of mind,
            allowing them to enjoy the luxury and comfort of their homes without
            worry.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutTheBuilding;
