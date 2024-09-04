import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../ContextProvider/context";

const NewArrivals = ({ text, span, data }) => {
  const { addToCart } = useContext(Store);
  return (
    <div className="my-20 dark:text-white">
      <h1 className="heading uppercase mb-10">
        {text} <span className="span">{span}</span>
      </h1>
      <div className="grid max-[300px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {data.map((each) => (
          <div className="rounded-lg overflow-hidden pb-5" key={each._id}>
            <div className="overflow-hidden">
              <Link to={`/product/${each._id}`}>
                <img
                  className="hover:scale-[1.1] transition-all duration-300"
                  src={each.image[0]}
                  alt={each.title}
                />
              </Link>
            </div>
            <h2 className="heading2 mb-5">{each.name}</h2>
            <div className="flex justify-between gap-1 items-center py-2">
              <p className="font-semibold text-xl">${each.price}</p>
              <Link to={`/product/${each._id}`}>
                <button className="btn-primary" type="button">
                  Buy
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
