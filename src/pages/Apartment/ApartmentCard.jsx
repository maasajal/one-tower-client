import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApartmentCard = ({ room }) => {
  const { image, block_name, floor_no, apartment_no, rent } = room;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAgreement = async () => {
    if (user && user.email) {
      const agreementInfo = {
        user_name: user.displayName,
        user_email: user.email,
        floor_no,
        block_name,
        apartment_no,
        rent,
        status: "pending",
      };
      const { data } = await axiosSecure.post("/agreements", agreementInfo);
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rent request send to the owner!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        title: "You are not login!",
        text: "Please login to rent the apartment.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <Link onClick={handleAgreement} className="btn badge badge-outline">
              Agreement
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ApartmentCard;
