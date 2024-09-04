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

const App = () => {
  return (
    <>
      <Navbar />
      <div className="relative mx-auto w-full max-w-7xl px-4 overflow-hidden">
        <Toaster position="right-top" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
