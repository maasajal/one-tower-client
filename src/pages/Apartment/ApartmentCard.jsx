import { Link } from "react-router-dom";

const ApartmentCard = ({ room }) => {
  const { _id, image, block_name, floor_no, apartment_no, rent } = room;
  return (
    <>
      <div className="card bg-[#d58c59] shadow-xl">
        <figure>
          <img src={image} alt="Apartment room" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Block: {block_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Floor No: {floor_no}</p>
          <p>Apartment No: {apartment_no}</p>
          <div className="card-actions justify-between items-center">
            <div className="">Rent: ${rent} </div>
            <Link to={`apartment/${_id}`} className="btn badge badge-outline">
              Agreement
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ApartmentCard;
