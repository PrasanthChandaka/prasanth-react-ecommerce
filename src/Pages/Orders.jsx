import React, { useContext, useEffect, useState } from "react";
import { Store } from "../ContextProvider/context";

const Orders = () => {
  const { cartItems } = useContext(Store);
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    let copy = cartItems.slice();
    const getOrders = () => {
      copy = copy.map((each) => each);
      setOrdersList(copy);
    };
    getOrders();
  }, []);

  console.log(ordersList);

  return (
    <div className="my-5 sm:my-10 dark:text-white">
      <h1 className="text-2x sm:text-3xl md:text-4xl font-bold">
        MY <span className="span">ORDERS</span>
      </h1>
      {ordersList.map((each) => (
        <div
          key={each._id}
          className="flex justify-between items-center flex-wrap gap-3 border-b border-neutral-300 dark:border-neutral-700 py-5"
        >
          <div className="flex items-center gap-2">
            <img className="w-20" src={each.image[0]} alt="product-img" />
            <div className="flex flex-col gap-2">
              <p>{each.name}</p>
              <p className="flex justify-between items-center">
                ${each.price} <span>Quantity{each.quantity}</span>Size:
                {each.size}
                <span></span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="h-2 w-2 rounded-full bg-green-600"></p>Order Placed
          </div>
          <button type="button" className="btn-primary">
            Track Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
