import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axiosSecure.post("/announcements", data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          title: "Success!",
          text: `Announcements published`,
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
        title="Make announcement"
        subTitle="Announcement for all users"
      />
      <h2 className="text-4xl font-bold py-10">Create an announcement</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Announcement title..."
              className="input input-bordered"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-600">Title is required</span>
            )}
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Announcement description..."
              className="input input-bordered"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-600">Description is required</span>
            )}
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-[#D1A054B3] text-white"
            type="submit"
            value="Announce"
          />
        </div>
      </form>
    </div>
  );
};
export default MakeAnnouncement;
