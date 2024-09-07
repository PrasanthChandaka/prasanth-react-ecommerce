import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [radio, setRadio] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (radio === "") {
      alert("Please select a payment method");
      return;
    }
    alert(`Order placed successfully for ${radio} payment method`);
  };

  const action = (e) => {
    console.log(e);
  };

  return (
    <div className="my-5 sm:my-20 dark:text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-black dark:text-white font-bold">
        DELIVERY <span className="span">INFORMATION</span>
      </h1>
      <form
        className="grid grid-cols-1 md:grid-cols-2 my-5 sm:my-10 gap-5"
        onSubmit={submit}
      >
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              id="first"
              placeholder="First Name"
              className="w-full px-2 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md dark:bg-transparent dark:text-white shadow outline-none"
              required
            />

            <input
              type="text"
              id="last"
              placeholder="Last Name"
              className="w-full px-2 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md dark:bg-transparent dark:text-white shadow outline-none"
              required
            />
          </div>

          <input
            type="email"
            id="last"
            placeholder="Email Address"
            className="w-full px-2 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md dark:bg-transparent dark:text-white shadow outline-none"
            required
          />
          <input
            type="text"
            id="last"
            placeholder="Street"
            className="w-full px-2 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md dark:bg-transparent dark:text-white shadow outline-none"
            required
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              id="first"
              placeholder="City"
              className="w-full px-2 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md dark:bg-transparent dark:text-white shadow outline-none"
              required
            />

            <input
              type="text"
              id="last"
              placeholder="State"
              className="w-full px-2 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md dark:bg-transparent dark:text-white shadow outline-none"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              id="first"
              placeholder="Zipcode"
              className="w-full px-2 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md dark:bg-transparent dark:text-white shadow outline-none"
              required
            />

            <input
              type="text"
              id="last"
              placeholder="Country"
              className="w-full px-2 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md dark:bg-transparent dark:text-white shadow outline-none"
              required
            />
          </div>
          <input
            type="text"
            id="last"
            placeholder="Street"
            className="w-full px-2 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md dark:bg-transparent dark:text-white shadow outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase text-black dark:text-white font-bold">
            Card <span className="span">Details</span>
          </h1>
          <div>
            <p className="flex justify-between items-center py-3 border-b border-neutral-300 dark:border-neutral-700">
              Subtotal <span>$498</span>
            </p>
            <p className="flex justify-between items-center py-3 border-b border-neutral-300 dark:border-neutral-700">
              Shipping Fee <span>$498</span>
            </p>
            <p className="flex justify-between items-center py-3 border-b border-neutral-300 dark:border-neutral-700">
              Total <span>$498</span>
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
            <div className="flex gap-2 border shadow-md border-neutral-300 dark:border-neutral-700  items-center px-3 py-2 rounded-md">
              <input type="radio" id="stripe" name="radio" onClick={action} />
              <label htmlFor="stripe" className="cursor-pointer">
                <img
                  src={assets.stripe_logo}
                  className="w-14"
                  alt="payment-logo"
                />
              </label>
            </div>
            <div className="flex gap-2 border shadow-md border-neutral-300 dark:border-neutral-700  items-center px-3 py-2 rounded-md">
              <input type="radio" id="razor" name="radio" onClick={action} />

              <label htmlFor="razor" className="cursor-pointer">
                <img
                  src={assets.razorpay_logo}
                  className="w-24"
                  alt="payment-logo"
                />
              </label>
            </div>
            <div className="flex gap-2 border shadow-md border-neutral-300 dark:border-neutral-700  items-center px-3 py-2 rounded-md">
              <input
                type="radio"
                id="cashondelivery"
                name="radio"
                onClick={action}
              />
              <label
                htmlFor="cashondelivery"
                className="text-nowrap font-semibold text-gray-500 cursor-pointer"
              >
                CASH ON DELIVERY
              </label>
            </div>
          </div>
          <Link to="/orders">
            <button
              className="btn-primary h-[40px] max-[400px]:w-full w-fit self-end mt-5"
              type="submit"
            >
              PLACE ORDER
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
