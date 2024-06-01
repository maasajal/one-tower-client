import SectionTitle from "../../components/SectionTitle";
import useApartment from "../../hooks/useApartment";
import Banner from "../Home/Banner/Banner";

const Apartment = () => {
  const [apartment] = useApartment();
  console.log(apartment);
  return (
    <>
      <Banner />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-12">
        <SectionTitle
          title="Our Apartments"
          subTitle="Find your suitable apartment"
        />
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {apartment.map((room) => (
              <div key={room._id} className="card bg-[#d58c59] shadow-xl">
                <figure>
                  <img src={room.image} alt="Apartment room" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Block: {room.block_name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>Floor: {room.floor_no}</p>
                  <div className="card-actions justify-between items-center">
                    <div className="">Rent: ${room.rent} </div>
                    <div className="btn badge badge-outline">Agreement</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
export default Apartment;
