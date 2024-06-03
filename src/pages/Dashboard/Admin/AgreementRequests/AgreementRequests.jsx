import { useEffect } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();
  const { data: agreements = [], refetch } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreements");
      return res.data;
    },
  });

  //   const getAllAgreement = async () => {
  //     const { data } = await axiosSecure.get("/agreements");
  //     console.log(data);
  //   };
  //   useEffect(() => {
  //     getAllAgreement();
  //   }, []);

  return (
    <div>
      <SectionTitle
        title="Agreement Requests"
        subTitle="All agreement request information"
      />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>User Name & Email</th>
              <th>Block & Floor</th>
              <th>Room No & Rent</th>
              <th>Agreement Request Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {agreements.map((agreement, index) => (
              <tr key={agreement._id} className="hover">
                <th>{index + 1}</th>
                <td>
                  <div className="font-bold">{agreement.user_name}</div>
                  <div className="text-sm opacity-50">
                    {agreement.user_email}
                  </div>
                </td>
                <td>
                  Block {agreement.block_name}
                  <br />
                  Floor {agreement.floor_no}
                </td>
                <td>
                  Room No {agreement.apartment_no} <br /> Rent ${agreement.rent}
                </td>
                <td>{agreement?.request_date}</td>
                <th className="flex gap-4">
                  <button className="btn btn-outline">Accept</button>
                  <button className="btn btn-outline">Reject</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AgreementRequests;
