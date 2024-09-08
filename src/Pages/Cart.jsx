import { useContext } from "react";
import { Trash2 } from "lucide-react";
import { Store } from "../ContextProvider/context";
import { Link } from "react-router-dom";
import emptyCartImage from "../assets/undraw_empty_cart_co35.svg";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(Store);

  // order summary logic

  const subTotal = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const discount = (20 / 100) * parseInt(subTotal);
  const deliveryFee = (5 / 100) * parseInt(subTotal);
  const total = subTotal - discount + deliveryFee;

  // remove item from cart

  const deleteProduct = (itemId, size) => {
    const exist = cartItems.find(
      (each) => each._id === itemId && each.size === size
    );
    if (exist) {
      setCartItems(cartItems.filter((each) => each !== exist));
    }
  };

  // updating quantity of an item

  const onIncrement = (itemId, count, size) => {
    let cartItemsCopy = cartItems.slice();
    const exist = cartItems.find(
      (each) => each._id === itemId && each.size === size
    );
    if (exist) {
      setCartItems(
        cartItemsCopy.map((each) =>
          each._id === itemId && each.size === exist.size
            ? { ...each, quantity: count + 1 }
            : each
        )
      );
    }
  };

  const onDecrement = (itemId, count, size) => {
    if (count > 1) {
      let cartItemsCopy = cartItems.slice();
      const exist = cartItems.find(
        (each) => each._id === itemId && each.size === size
      );
      if (exist) {
        setCartItems(
          cartItemsCopy.map((each) =>
            each._id === itemId && each.size === exist.size
              ? { ...each, quantity: count - 1 }
              : each
          )
        );
      }
    }
  };

  return (
    <div className="py-10">
      <h1 className="heading mb-10">
        Your <span className="span">Cart</span>
      </h1>
      {cartItems?.length > 0 ? (
        <div className="flex flex-col sm:flex-row gap-5">
          {/* cart items */}

          <div className="w-full rounded-lg flex flex-col gap-3">
            {cartItems.map((each, index) => (
              <div
                key={index}
                className="flex gap-2 py-3 border-t border-t-slate-300 dark:border-t-slate-700"
              >
                <img className="w-20" src={each.image[0]} alt={each.name} />
                <div className="relative flex-grow flex flex-col p-2">
                  <div className="flex justify-between items-center">
                    <h2 className="heading2">{each.name}</h2>
                    <Trash2
                      className="right-2 top-2 text-orange-500 cursor-pointer"
                      size={18}
                      onClick={() => deleteProduct(each._id, each.size)}
                    />
                  </div>
                  <p className="para">Size:{each.size}</p>
                  <div className="absolute w-full bottom-1 flex justify-between items-center flex-wrap">
                    <p className="text-xl sm:2xl text-white font-bold">
                      ${each.price}
                    </p>

                    {/* counter */}

                    <div className="flex gap-1 flex-wrap">
                      <button
                        className="btn-primary"
                        type="button"
                        onClick={() =>
                          onDecrement(each._id, each.quantity, each.size)
                        }
                      >
                        -
                      </button>
                      <p
                        className="w-[30px] text-center dark:bg-black
                        dark:text-white rounded-md outline-none"
                      >
                        {each.quantity}
                      </p>
                      <button
                        className="btn-primary"
                        type="button"
                        onClick={() =>
                          onIncrement(each._id, each.quantity, each.size)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}

          <div className="flex flex-col gap-5 h-fit min-w-[300px] p-3 rounded-lg border border-slate-300 dark:border-slate-700 ">
            <h2 className="heading2">Order Summary</h2>
            <p className="para flex justify-between items-center">
              Subtotal
              <span className="font-semibold text-black dark:text-white">
                ${subTotal}
              </span>
            </p>
            <p className="para flex justify-between items-center">
              Discount (-20%)
              <span className="text-orange-500 font-semibold">
                -${discount}
              </span>
            </p>
            <p className="para flex justify-between items-center">
              Delivery Fee
              <span className="font-semibold text-black dark:text-white">
                ${deliveryFee}
              </span>
            </p>
            <p className="h-[0.3px] bg-slate-300 dark:bg-slate-700 w-full my-1"></p>
            <p className="para flex justify-between items-center">
              Total
              <span className="font-semibold text-black dark:text-white">
                ${total}
              </span>
            </p>
            <Link to="/place-order">
              <button className="btn-primary h-[38px]" type="button">
                Go to Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex h-[80vh] flex-col items-center justify-center gap-5 w-full mx-auto">
          <div className="">
            <img
              src={emptyCartImage}
              alt="emply-img"
              className="max-w-[300px]"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="heading2 h-[38px] mb-3">Your cart is Empty!</h2>
            <Link to="/collection">
              <button className="btn-primary w-fit h-[40px]">SHOP NOW</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
