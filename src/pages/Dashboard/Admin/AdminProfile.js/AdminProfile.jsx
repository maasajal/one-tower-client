import { Helmet } from "react-helmet";
import SectionTitle from "../../../../components/SectionTitle";

const AdminProfile = () => {
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
      <div>
        <h2>Admin Profile</h2>
      </div>
    </div>
  );
};
export default AdminProfile;
