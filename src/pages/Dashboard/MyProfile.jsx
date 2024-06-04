import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAgreement from "../../hooks/useAgreement";
import { Helmet } from "react-helmet";

const MyProfile = () => {
  const { user } = useAuth();
  const [agreement, refetch] = useAgreement();
  const {
    image,
    floor_no,
    block_name,
    apartment_no,
    rent,
    status,
    accepted_date,
  } = agreement;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{user.displayName} Profile - One Tower</title>
      </Helmet>
      <SectionTitle title="My Profile" subTitle="Check you agreement" />
      <div className="flex items-center flex-col lg:flex-row gap-5 mb-10">
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="w-2/3 rounded-xl"
        />
        <div className="space-y-5 w-full">
          <h2 className="text-5xl font-bold">Name: {user.displayName}</h2>
          <h3 className="text-2xl">Email: {user.email} </h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 bg-[#d58c59] text-white shadow-xl">
        <img
          src={agreement ? image : "none"}
          alt="Apartment room: none"
          className="w-full md:w-1/3"
        />
        <div className="w-full pl-5">
          <h3 className="text-2xl">
            Agreement accept date: {agreement ? accepted_date : "none"}
          </h3>
          <h2 className="card-title">
            Block: {agreement ? block_name : "none"}
          </h2>
          <p>Floor No: {agreement ? floor_no : "none"}</p>
          <p>Apartment No: {agreement ? apartment_no : "none"}</p>
          <div className="card-actions justify-between items-center">
            <div>Rent: {agreement ? rent : "none"} </div>
            <div className="bg-[#3d5cab] p-2">
              Status: {agreement ? status : "none"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
