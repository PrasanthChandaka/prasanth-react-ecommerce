import { useContext, useEffect, useState } from "react";
import HeaderSection from "../Components/HeroSection";
import { Store } from "../ContextProvider/context";
import NewArrivals from "../Components/NewArrivals";
import { qualityList } from "../assets/assets";
import { Link } from "react-router-dom";

const Home = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const { products } = useContext(Store);

  useEffect(() => {
    setNewArrivals(products.slice(0, 10));
    setTopSelling(products.slice(10, 15));
  }, []);

  return (
    <div className="my-20">
      <HeaderSection />
      <NewArrivals text="New" span="Arrivals" data={newArrivals} />
      <NewArrivals text="top" span="Selling" data={topSelling} />
      <div className="my-20 py-20 dark:text-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {qualityList.map((each) => (
            <div className="flex flex-col gap-1 items-center" key={each.id}>
              <Link to={`/product/${each.id}`}>
                <img src={each.image} alt="icons" className="w-12 mb-5" />
              </Link>
              <h2 className="heading2">{each.title}</h2>
              <p className="text-neutral-700 dark:text-neutral-400 text-center">
                {each.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
