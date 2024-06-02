import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAgreement from "../../hooks/useAgreement";

const MyProfile = () => {
  const { user } = useAuth();
  const [agreement] = useAgreement();
  const {
    floor_no,
    block_name,
    apartment_no,
    rent,
    status,
    agreement_accept_date,
  } = agreement;
  return (
    <div>
      <SectionTitle title="My Profile" subTitle="I need a home" />
      <div className="flex items-center gap-10 mb-10">
        <img src={user.photoURL} alt={user.displayName} />
        <div className="space-y-5">
          <h2 className="text-5xl font-bold">Name: {user.displayName}</h2>
          <h3 className="text-2xl">Email: {user.email} </h3>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center gap-10 bg-[#d58c59] text-white shadow-xl">
          <figure>
            <img src="" alt="Apartment room: none" />
          </figure>
          <div className="card-body">
            <h3 className="text-2xl">
              Agreement accept date:{" "}
              {status === "pending" ? "none" : agreement_accept_date}
            </h3>
            <h2 className="card-title">
              Block: {status === "pending" ? "none" : block_name}
            </h2>
            <p>Floor No: {status === "pending" ? "none" : floor_no}</p>
            <p>Apartment No: {status === "pending" ? "none" : apartment_no}</p>
            <div className="card-actions justify-between items-center">
              <div>Rent: {status === "pending" ? "none" : rent} </div>
              <div className="bg-[#3d5cab] p-2">Status: {status} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
