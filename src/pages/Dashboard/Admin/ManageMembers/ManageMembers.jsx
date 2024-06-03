import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle";
import useUsers from "../../../../hooks/useUsers";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const ManageMembers = () => {
  const [users, refetch] = useUsers();
  const members = users.filter((user) => user.role === "member");
  const axiosSecure = useAxiosSecure();

  const handleRemoveMember = async (user) => {
    try {
      const { data } = await axiosSecure.patch(`/users/member/${user._id}`);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: `${user.name} is removed from member!`,
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: `An error occurred: ${error.message}`,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Members - One Tower</title>
      </Helmet>
      <SectionTitle title="Manage Members" subTitle="All of the Tenants" />
      <h2 className="text-4xl font-bold py-10">Manege Members</h2>
      {members && (
        <div className="overflow-x-auto">
          <table className="table bg-[#3d5cab] text-white">
            {/* head */}
            <thead>
              <tr className=" text-white">
                <th></th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1} </th>
                  <th>{user.name}</th>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveMember(user)}
                      className="btn btn-outline text-red-500"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default ManageMembers;
