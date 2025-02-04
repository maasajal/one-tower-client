import { FaBuilding } from "react-icons/fa";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="max-w-md mx-auto text-center pb-10 space-y-2">
      <h2 className="text-4xl text-[#e87726] uppercase py-3 border-x-4 border-[#e87726] flex flex-col items-center gap-5">
        <FaBuilding />
        {title}{" "}
      </h2>
      <p>_____*****{subTitle}*****_____</p>
    </div>
  );
};
export default SectionTitle;
