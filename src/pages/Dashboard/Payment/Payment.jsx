import { useLocation } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useState } from "react";
import Swal from "sweetalert2";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCoupons from "../../../hooks/useCoupons";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const [coupons] = useCoupons();
  const location = useLocation();
  const { rent: currentRent, month } = location.state || {};
  const [rent, setRent] = useState(currentRent);
  const [coupon, setCoupon] = useState("");
  const applyCoupon = () => {
    // Check the coupon isValid or not | compare to database coupons
    const validCoupon = coupons.find(
      (c) => c.coupon_code.toUpperCase() === coupon.toUpperCase()
    );
    if (validCoupon) {
      // Calculate discount & set to rent payment
      const discount = validCoupon.discount_percentage;
      const discountedRent = currentRent - (currentRent * discount) / 100;
      setRent(discountedRent);
      Swal.fire({
        title: "Coupon Applied!",
        text: `You received a ${discount}% discount. New rent is $${discountedRent}.`,
        icon: "success",
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Invalid Coupon!",
        text: "Please enter a valid coupon code.",
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Payment - One Tower</title>
      </Helmet>
      <SectionTitle title="Payment" subTitle="Pay your rent now" />
      <div className="bg-[#e87726] rounded-xl p-10 flex justify-center gap-10">
        <div className="flex-1">
          <h3 className="text-3xl mb-5">Payment Calculation</h3>
          {month ? (
            <div className="space-y-5">
              <p>Room Rent: ${currentRent}</p>
              <p>Pay Month: {month.toUpperCase()}</p>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Coupon Code</span>
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="input input-bordered mr-2"
                    value={coupon}
                    placeholder="Enter a valid coupon..."
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn bg-[#D1A054B3] text-white"
                    onClick={applyCoupon}
                  >
                    Apply
                  </button>
                </div>
              </div>
              <p>Payable Rent: ${rent}</p>
            </div>
          ) : (
            <p>No payment details available.</p>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-3xl mb-5">Payment Method</h3>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm rent={rent} month={month} />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
