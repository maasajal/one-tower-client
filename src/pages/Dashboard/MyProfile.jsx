import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

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
            <h3 className="text-2xl">Agreement accept date: none</h3>
            <h2 className="card-title">Block: none</h2>
            <p>Floor No: none</p>
            <p>Apartment No: none</p>
            <div className="card-actions justify-between items-center">
              <div className="">Rent: none </div>
              <div className="">Status: pending </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
