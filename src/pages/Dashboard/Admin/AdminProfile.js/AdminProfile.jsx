import { Helmet } from "react-helmet";
import SectionTitle from "../../../../components/SectionTitle";
import useUsers from "../../../../hooks/useUsers";
import useApartment from "../../../../hooks/useApartment";

const AdminProfile = () => {
  const [users] = useUsers();
  const admin = users.find((user) => user.role === "admin");
  const [apartment] = useApartment();
  const allUsers = users.filter((user) => user.role === "user");
  const members = users.filter((member) => member.role === "member");

  const totalApartment = apartment.length; // Total apartment
  const totalUsers = allUsers.length; // Total user, they want the apartment
  const totalMembers = members.length; // Total member, they got the agreement
  // console.log(totalApartment, totalUsers, totalMembers)

  // Calculate the total percentage of agreement or unavailable apartment
  const agreementPercentage = (totalApartment / 100) * totalMembers;
  // console.log(agreementPercentage, "%");

  // Calculate the total percentage of available apartment
  const availablePercentage = 100 - agreementPercentage;
  // console.log(availablePercentage, "%");

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin Profile - One Tower</title>
      </Helmet>
      <SectionTitle
        title="Admin Profile"
        subTitle="The only one admin or House owner"
      />
      <div className="flex items-center flex-col lg:flex-row gap-5 mb-10">
        <img
          src={admin.image}
          alt={admin.name}
          className="w-full md:w-2/3 rounded-xl"
        />
        <div className="space-y-5 w-full">
          <h2 className="text-5xl font-bold">Name: {admin.name}</h2>
          <h3 className="text-2xl">Email: {admin.email} </h3>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-3 shadow my-10">
        <div className="stat border-2 border-[#3d5cab] ">
          <div className="stat-title">Total Apartment</div>
          <div className="stat-value">{totalApartment}</div>
          <p className="text-justify">Total number of rooms in the database</p>
        </div>

        <div className="stat border-2 border-[#3d5cab] ">
          <div className="stat-title">Percentage of Room availability</div>
          <div className="stat-value">{availablePercentage} %</div>
          <p className="text-justify">
            Percentage of available rooms in the database
          </p>
        </div>

        <div className="stat border-2 border-[#3d5cab] ">
          <div className="stat-title">Percentage of Agreement</div>
          <div className="stat-value">{agreementPercentage}%</div>
          <p className="text-justify">
            Percentage of agreement / unavailable rooms in the database
          </p>
        </div>

        <div className="stat border-2 border-[#3d5cab] ">
          <div className="stat-title">Users</div>
          <div className="stat-value">{totalUsers}</div>
          <p className="text-justify">Number of users in the database</p>
        </div>

        <div className="stat border-2 border-[#3d5cab] ">
          <div className="stat-title">Members</div>
          <div className="stat-value">{totalMembers}</div>
          <p className="text-justify">Number of members in the database</p>
        </div>
      </div>
    </div>
  );
};
export default AdminProfile;
