import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const ManageCoupons = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      coupon_code: "",
      discount_percentage: "",
      coupon_description: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axiosSecure.post("/coupons", data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          title: "Success!",
          text: `Add new coupon seccessfullly`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };
  return (
    <div>
      <SectionTitle
        title="Manage Coupons"
        subTitle="All coupons here & add more"
      />
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold py-10">Manege Coupons</h2>
        <label htmlFor="add_coupon" className="btn btn-outline">
          Add Coupon
        </label>
        <input type="checkbox" id="add_coupon" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Coupon</h3>
            <p className="py-4">Add your new coupon here</p>
            <div className="modal-action">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Coupon Code</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Coupon code..."
                    className="input input-bordered"
                    {...register("coupon_code", { required: true })}
                  />
                  {errors.coupon_code && (
                    <span className="text-red-600">
                      Coupon code is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Discount Percentage</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Discount Percentage..."
                    className="input input-bordered"
                    {...register("discount_percentage", { required: true })}
                  />
                  {errors.discount_percentage && (
                    <span className="text-red-600">
                      Discount Percentage is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Coupon Description</span>
                  </label>
                  <textarea
                    placeholder="Coupon Description..."
                    className="input input-bordered"
                    {...register("coupon_description", { required: true })}
                  />
                  {errors.coupon_description && (
                    <span className="text-red-600">
                      Coupon Description is required
                    </span>
                  )}
                </div>
                <div className="mt-6 modal-action flex justify-between">
                  <button className="btn btn-outline flex-1">Add</button>
                  <label
                    htmlFor="add_coupon"
                    className="btn btn-outline flex-1"
                  >
                    Close
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table bg-[#3d5cab] text-white">
          {/* head */}
          <thead>
            <tr className=" text-white">
              <th></th>
              <th>Coupon Code</th>
              <th>Discount Percentage</th>
              <th>Coupon Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1 </th>
              <th>Coupon Code</th>
              <td>Discount Percentage</td>
              <td>Coupon Description</td>
              <td>
                <button className="btn btn-outline text-red-500">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageCoupons;
