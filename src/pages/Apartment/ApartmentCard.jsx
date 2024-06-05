import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAgreement from "../../hooks/useAgreement";

const ApartmentCard = ({ room }) => {
  const { _id, image, block_name, floor_no, apartment_no, rent } = room;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const [agreement, refetch] = useAgreement();
  const date = new Date();
  const request_date = date.toLocaleDateString();
  const handleAgreement = async () => {
    // Some github user has no allow the email.fot that reason allow to agreement by checking their displayName
    if ((user && user.email) || (user && user.displayName)) {
      const agreementInfo = {
        user_name: user.displayName,
        user_email: user.email,
        roomId: _id,
        image,
        floor_no,
        block_name,
        apartment_no,
        rent,
        request_date,
        status: "pending",
      };
      if (user.email === "one@tower.com") {
        Swal.fire({
          title: "Owner cannot rent the apartment!",
          icon: "warning",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      if (agreement._id) {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Your cannot rent 2 apartment at a time!",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      } else {
        const { data } = await axiosSecure.post("/agreements", agreementInfo);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Rent request send to the owner!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
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
          navigate("/login", { state: { from: location }, replace: true });
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
