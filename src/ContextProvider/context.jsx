import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import toast from "react-hot-toast";

export const Store = createContext();

const ContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (item) => {
    const exist = cartItem.find((x) => x._id === item._id);
    if (exist) {
      setCartItem((prev) =>
        prev.map((each) =>
          each._id === item._id
            ? { ...each, quantity: each.quantity + 1 }
            : each
        )
      );
      toast.success("Go to cart");
    } else {
      cartItem.push({ ...item, quantity: 1 });
      toast.success("Added to cart");
    }
  };

  const values = {
    products,
    cartItem,
    addToCart,
    setCartItem,
  };

  return <Store.Provider value={values}>{children}</Store.Provider>;
};

export default ContextProvider;
