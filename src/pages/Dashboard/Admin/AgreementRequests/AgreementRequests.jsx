import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();
  const date = new Date();
  const accepted_date = date.toLocaleDateString();

  const { data: agreements = [], refetch } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreements", {
        params: { status: "pending" },
      });
      return res.data;
    },
  });

  const handleAccept = async (agreement) => {
    try {
      // Change the user role
      await axiosSecure.patch(`/users/role/${agreement.user_email}`);
      // Update agreement request status
      const { data } = await axiosSecure.patch(`/agreements/${agreement._id}`, {
        accepted_date,
      });
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: `Agreement accepted and user role changed to member!`,
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
            {agreements.length > 0 ? (
              <>
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
                      Room No {agreement.apartment_no} <br /> Rent $
                      {agreement.rent}
                    </td>
                    <td>{agreement?.request_date}</td>
                    <th className="flex gap-4">
                      <button
                        onClick={() => handleAccept(agreement)}
                        className="btn btn-outline"
                      >
                        Accept
                      </button>
                      <button className="btn btn-outline">Reject</button>
                    </th>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td className="text-center">No Agreement Request found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AgreementRequests;
