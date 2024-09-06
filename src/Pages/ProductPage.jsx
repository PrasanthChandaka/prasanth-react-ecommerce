import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useEffect, useState } from "react";
import { Store } from "../ContextProvider/context";

const ProductPage = () => {
  const params = useParams();
  const [productItem, setProductItem] = useState("");
  const [relatedItem, setRelatedItem] = useState([]);
  const [Image, setImage] = useState("");
  const [size, setSize] = useState("");
  const { products, addToCart } = useContext(Store);

  const getProduct = async () => {
    products.map((each) => {
      if (each._id === params.id) {
        setProductItem(each);
        setImage(each.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
    getProduct();
  }, [productItem, params.id]);

  useEffect(() => {
    let productsCopy = products.slice();
    const getRelated = () => {
      productsCopy = productsCopy.filter(
        (each) => each.category === productItem.category
      );
      productsCopy = productsCopy.filter(
        (each) => each.subCategory === productItem.subCategory
      );

      setRelatedItem(productsCopy.slice(0, 4));
    };
    getRelated();
  }, [productItem, params.id]);

  return (
    <div className="my-10">
      {/* Product Showcase */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex gap-2 sm:w-full bg-cover max-sm:flex-col-reverse">
          <div className="w-fit flex flex-col max-sm:flex-row gap-2 overflow-x-auto">
            {productItem.image?.map((i, index) => (
              <img
                onClick={() => setImage(i)}
                key={index}
                className={`w-20 rounded-md ${
                  Image === i && "border-[2px] border-orange-600 solid"
                }`}
                src={i}
                alt="img"
              />
            ))}
          </div>
          <div className="w-full">
            <img
              data-role="imagemagnifier"
              className="rounded-xl w-full sm:w-[80%] object-cover"
              src={Image}
              alt="hero-img"
            />
          </div>
        </div>

        {/* Product Detailed Descriiption */}

        <div className="py-3">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white mb-5 uppercase font-bold">
                {productItem.name}
              </h1>
              <div className="flex gap-2">
                <img className="w-5" src={assets.star_icon} alt="star" />
                <img className="w-5" src={assets.star_icon} alt="star" />
                <img className="w-5" src={assets.star_icon} alt="star" />
                <img className="w-5" src={assets.star_icon} alt="star" />
                <img className="w-5" src={assets.star_dull_icon} alt="star" />
                <p className="para">4.5/5 (12k)</p>
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-semibold dark:text-white">
              ${productItem.price}
            </p>
            <p className="text-neutral-700 dark:text-neutral-400">
              {productItem.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {productItem?.sizes?.map((each, index) => (
                <button
                  className={`btn-primary ${
                    size === each && "border-[2px] border-orange-600"
                  }`}
                  key={index}
                  type="button"
                  onClick={() => {
                    setSize(each);
                  }}
                >
                  {each}
                </button>
              ))}
            </div>
            <button
              className="btn-primary h-[38px] w-fit"
              type="button"
              onClick={() => addToCart(productItem, size)}
            >
              Add to Cart
            </button>
            <p className="h-[0.3px] bg-slate-300 dark:bg-slate-700 w-full my-1"></p>
            <p className="para">
              100% Original product. Cash on delivery is available on this
              product. Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews container */}

      <div className="my-20 border-slate-300">
        <div className=" flex w-fit cursor-pointer">
          <h2 className="heading2 border border-slate-300 px-4 py-2 ">
            Descripion
          </h2>
          <h2 className="heading2 border border-slate-300 px-4 py-2">
            Reviews
          </h2>
        </div>
        <div className="text-sm text-black dark:text-white gap-3 pt-5">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <br /> E-commerce websites typically display products or services
          along with detailed descriptions, images, prices, and any available
          variations (e.g., sizes, colors). Each product usually has its own
          dedicated page with relevant information.
        </div>
      </div>

      {/* related products container */}

      <div className="my-20 dark:text-white">
        <h1 className="heading uppercase mb-10">
          related <span className="span">products</span>
        </h1>
        <div className="grid max-[300px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {relatedItem?.map((each) => (
            <div className="rounded-lg overflow-hidden pb-5" key={each._id}>
              <div className="overflow-hidden">
                <img
                  className="hover:scale-[1.1] transition-all duration-300"
                  src={each.image[0]}
                  alt={each.title}
                />
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
    </div>
  );
};

export default ProductPage;
