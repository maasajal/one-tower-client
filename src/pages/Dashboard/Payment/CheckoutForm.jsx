import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ rent, month }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { rent }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("Confirm Error", confirmError);
    } else {
      console.log("Payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your rent of ${month} is ${paymentIntent.status}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setTransactionId(paymentIntent.id);
        const payment = {
          payment_id: paymentIntent.id,
          name: user?.displayName || "anonymous",
          email: user?.email || "anonymous",
          rent,
          month,
          paid_date: new Date(),
        };
        const res = await axiosSecure.post("/payments", payment);
        if (res.data.insertedId) {
          Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: `Payment details save to database`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {/* Show error message to your customers */}
        {error && <div>{error}</div>}
        <button
          type="submit"
          disabled={!stripe || !elements || !clientSecret}
          className="btn bg-[#D1A054B3] text-white mt-4"
        >
          Pay ${rent}
        </button>
      </form>
      <div className="my-10">
        {transactionId && (
          <>
            <h3 className="text-2xl mb-5">Payment Successful!</h3>
            <p className="text-green-600">
              Your Transaction ID: {transactionId}
            </p>
          </>
        )}
      </div>
    </>
  );
};
export default CheckoutForm;
