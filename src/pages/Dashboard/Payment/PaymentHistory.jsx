import SectionTitle from "../../../components/SectionTitle";

const PaymentHistory = () => {
  return (
    <>
      <SectionTitle
        title="Payment History"
        subTitle="Your have paid the rents"
      />
      <div className="flex items-center gap-10 mb-10">
        <h2 className="text-3xl font-bold">Payment history of your rent</h2>
      </div>
    </>
  );
};
export default PaymentHistory;
