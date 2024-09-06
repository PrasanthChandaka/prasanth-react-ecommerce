import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import toast from "react-hot-toast";

export const Store = createContext();

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, size) => {
    const existingItem = cartItems.find(
      (i) => i._id === item._id && i.size === size
    );
    if (size) {
      if (existingItem) {
        setCartItems((prev) =>
          prev.map((each) =>
            each._id === item._id && each.size === size
              ? { ...each, quantity: each.quantity + 1, size: size }
              : each
          )
        );
        toast.success("Go to cart");
      } else {
        let obj = { ...item, quantity: 1, size };
        setCartItems((prev) => [...prev, obj]);
        toast.success("Item Added to cart");
      }
    } else {
      toast.error("Please select a size");
      return;
    }
  };

  const values = {
    products,
    cartItems,
    setCartItems,
    addToCart,
  };

  return <Store.Provider value={values}>{children}</Store.Provider>;
};

export default ContextProvider;
