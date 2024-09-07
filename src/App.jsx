import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import NewsLetter from "./Components/NewsLetter";
import ProductPage from "./Pages/ProductPage";
import { Toaster } from "react-hot-toast";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import PlaceOrder from "./Pages/PlaceOrder";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach and detach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative mx-auto w-full max-w-7xl px-4 overflow-hidden">
        <Toaster position="bottom-center" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <div
          onClick={scrollToTop}
          className={`fixed h-10 w-10 bg-slate-950 dark:bg-orange-600 cursor-pointer text-white top-[85dvh] rounded-full flex items-center justify-center transition-all ease-in-out duration-200 shadow-sm dark:shadow-orange-400 shadow-neutral-950 ${
            isVisible ? "right-10" : "right-[-100vw]"
          }`}
        >
          <ChevronUp size={24} className="scale-75 animate-bounce" />
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
