import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAgreement from "../../../hooks/useAgreement";

const MakePayment = () => {
  const [agreement] = useAgreement();
  const { user_email, block_name, floor_no, apartment_no, rent } = agreement;

  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      user_email,
      block_name,
      floor_no,
      apartment_no,
      rent,
      month,
    },
  });
  const onSubmit = (data) => {
    try {
      navigate("/dashboard/payment", {
        replace: true,
        state: { rent: data.rent, month: data.month },
      });
    } catch (error) {
      console.error("Error", error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };
  return (
    <>
      <SectionTitle
        title="Make Payment"
        subTitle="Which month’s rent you want to pay?"
      />
      <div className="bg-[#e87726] rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="flex gap-10">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Member Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                {...register("user_email", { required: true })}
                readOnly
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Block Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("block_name", { required: true })}
                readOnly
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Floor No</span>
              </label>
              <input
                className="input input-bordered"
                {...register("floor_no", { required: true })}
                readOnly
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Apartment No</span>
              </label>
              <input
                className="input input-bordered"
                {...register("apartment_no", {
                  required: true,
                })}
                readOnly
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Rent</span>
              </label>
              <input
                name="rent"
                className="input input-bordered"
                {...register("rent", { required: true })}
                readOnly
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">
                  Which month’s rent you want to pay?
                </span>
              </label>
              <select
                className="input input-bordered capitalize"
                {...register("month", { required: true })}
              >
                <option value={month}>{month}</option>
                <option value="january">january</option>
                <option value="february">february</option>
                <option value="march">march</option>
                <option value="april">april</option>
                <option value="may">may</option>
                <option value="june">june</option>
                <option value="july">july</option>
                <option value="august">august</option>
                <option value="september">september</option>
                <option value="october">october</option>
                <option value="november">november</option>
                <option value="december">december</option>
              </select>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-[#D1A054B3] text-white"
              type="submit"
              value="Pay"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default MakePayment;
