import { useLocation } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";

const Payment = () => {
  const location = useLocation();
  const { rent, month } = location.state || {};
  console.log(rent, month);
  return (
    <>
      <SectionTitle title="Payment" subTitle="Pay your rent now" />
      <div className="flex items-center gap-10 mb-10">
        <h2 className="text-3xl font-bold">Payment method implement</h2>
      </div>
    </>
  );
};
export default Payment;
