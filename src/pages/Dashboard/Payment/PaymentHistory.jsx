import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import usePaymentHistory from "../../../hooks/usePaymentHistory";
import { Helmet } from "react-helmet";

const PaymentHistory = () => {
  const [paymentHistory, refetch] = usePaymentHistory();
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("");

  const handleSearch = () => {
    const monthExist = paymentHistory.find(
      (m) => m.month.toLowerCase() === search.toLowerCase()
    );
    console.log(monthExist);
    setMonth(monthExist);
    refetch();
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Payment History - One Tower</title>
      </Helmet>
      <SectionTitle
        title="Payment History"
        subTitle="Your have paid the rents"
      />
      <div className="mb-10 space-y-5">
        <h3 className="text-2xl">Search by Month name</h3>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <input
            type="text"
            placeholder="January"
            name="month"
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-outline">
            Search
          </button>
        </div>
        <div>
          {month && (
            <div className="overflow-x-auto">
              <table className="table bg-[#3d5cab] text-white">
                {/* head */}
                <thead>
                  <tr className=" text-white">
                    <th></th>
                    <th>Transaction ID</th>
                    <th>Month</th>
                    <th>Rent</th>
                    <th>Paid Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>{month.payment_id}</td>
                    <td>{month.month}</td>
                    <td>{month.rent}</td>
                    <td>{month.paid_date}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <hr />
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Transaction ID</th>
                <th>Month</th>
                <th>Rent</th>
                <th>Paid Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((pay, index) => (
                <tr key={pay._id}>
                  <th>{index + 1}</th>
                  <td>{pay.payment_id}</td>
                  <td>{pay.month}</td>
                  <td>{pay.rent}</td>
                  <td>{pay.paid_date.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default PaymentHistory;
