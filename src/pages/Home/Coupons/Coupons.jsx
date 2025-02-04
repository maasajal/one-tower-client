import SectionTitle from "../../../components/SectionTitle";
import useCoupons from "../../../hooks/useCoupons";

const Coupons = () => {
  const [coupons] = useCoupons();
  const getRandomCoupon = (coupons) => {
    const randomIndex = Math.floor(Math.random() * coupons.length);
    return coupons[randomIndex];
  };
  const randomCoupon = getRandomCoupon(coupons);

  return (
    <div className="py-14 border-2 border-[#3d5cab80] my-5 ">
      <SectionTitle
        title="Coupons"
        subTitle="Find a coupon and it for discount in rent"
      />
      <div className="text-center space-y-5">
        {coupons && randomCoupon && (
          <>
            <h3 className="text-3xl font-semibold">
              Coupons ({coupons.length}){" "}
            </h3>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById("coupons").showModal()}
            >
              Get valid Coupon
            </button>
            <dialog id="coupons" className="modal sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Random Coupon!</h3>
                <p className="py-4 flex flex-col md:flex-row justify-evenly items-center gap-3">
                  Coupon Code:
                  <span className="text-white bg-[#3d5cab] p-3 rounded-xl">
                    {randomCoupon.coupon_code}
                  </span>
                </p>
                <p className="py-4 flex flex-col md:flex-row justify-between items-center gap-3">
                  Use the Coupon Code on Payment page to get discount
                  <span className="text-white bg-[#3d5cab] p-3 rounded-xl max-w-fit">
                    {randomCoupon.discount_percentage}%
                  </span>
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </>
        )}
      </div>
    </div>
  );
};
export default Coupons;
