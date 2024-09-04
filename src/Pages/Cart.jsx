import { useContext } from "react";
import img from "../assets/p_img2_1.png";
import { ShoppingBag, Trash2 } from "lucide-react";
import { Store } from "../ContextProvider/context";
import { Link } from "react-router-dom";

const dummyList = [
  {
    id: 1,
    image: img,
    title: "Gradient Graphic T-shirt",
    size: "M",
    price: "$120",
  },
  {
    id: 2,
    image: img,
    title: "CHECKERED SHIRT",
    size: "M",
    price: "$120",
  },
  {
    id: 3,
    image: img,
    title: "SKINNY FIT JEANS",
    size: "L",
    price: "$120",
  },
  {
    id: 4,
    image: img,
    title: "Gradient Graphic T-shirt",
    size: "S",
    price: "$120",
  },
];

const Cart = () => {
  const { cartItem } = useContext(Store);
  return (
    <div className="py-10">
      <h1 className="heading mb-10">
        Your <span className="span">Cart</span>
      </h1>
      {cartItem?.length > 0 ? (
        <div className="flex flex-col sm:flex-row gap-3">
          {/* cart items */}

          <div className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 flex flex-col gap-5">
            {dummyList.map((each) => (
              <>
                <div key={each.id} className="flex gap-2">
                  <img className="w-28" src={each.image} alt={each.title} />
                  <div className="relative flex-grow flex flex-col p-2">
                    <div className="flex justify-between items-center">
                      <h2 className="heading2">{each.title}</h2>
                      <Trash2 className="right-2 top-2" size={18} color="red" />
                    </div>
                    <p className="para">Size:{each.size}</p>
                    <div className="absolute w-full bottom-1 flex justify-between items-center flex-wrap">
                      <p className="text-xl sm:2xl font-bold">{each.price}</p>

                      {/* counter */}

                      <div className="flex gap-1 flex-wrap">
                        <button className="btn-primary" type="button">
                          -
                        </button>
                        <input
                          className="w-[30px] text-center dark:bg-black dark:text-white rounded-md outline-none"
                          type="text"
                          value="1"
                        />
                        <button className="btn-primary" type="button">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="h-[0.3px] bg-slate-300 dark:bg-slate-700 w-full my-1"></p>
              </>
            ))}
          </div>

          {/* Order Summary */}

          <div className="flex flex-col gap-5 h-fit min-w-[300px] p-3 rounded-lg border border-slate-300 dark:border-slate-700 ">
            <h2 className="heading2">Order Summary</h2>
            <p className="para flex justify-between items-center">
              Subtotal
              <span className="font-semibold text-black dark:text-white">
                $565
              </span>
            </p>
            <p className="para flex justify-between items-center">
              Discount (-20%)
              <span className="text-red-500 font-semibold">$15</span>
            </p>
            <p className="para flex justify-between items-center">
              Delivery Fee
              <span className="font-semibold text-black dark:text-white">
                $467
              </span>
            </p>
            <p className="para flex justify-between items-center">
              Delivery Fee
              <span className="font-semibold text-black dark:text-white">
                $467
              </span>
            </p>
            <p className="h-[0.3px] bg-slate-300 dark:bg-slate-700 w-full my-1"></p>
            <p className="para flex justify-between items-center">
              Total
              <span className="font-semibold text-black dark:text-white">
                $490
              </span>
            </p>
            <button className="btn-primary h-[38px]" type="button">
              Go to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[500px] gap-5">
          <ShoppingBag size={200} />
          <h2>Your cart is Empty!</h2>
          <Link to="/collection">
            <button className="btn-primary w-fit">SHOP NOW</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
