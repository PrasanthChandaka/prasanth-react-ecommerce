import { ShoppingCart, ChevronUp, SlidersHorizontal } from "lucide-react";
// import FilterComponent from "../Components/FilterComponent";
import { act, useContext, useEffect, useState } from "react";
import { Store } from "../ContextProvider/context";
import { Link, NavLink } from "react-router-dom";

const filterCheckList = [
  { id: 1, label: "Men" },
  { id: 2, label: "Women" },
  { id: 3, label: "Kids" },
];

const sizes = ["S", "M", "L", "XL", "XXL", "All"];

const subCategories = [
  { id: 1, label: "Topwear" },
  { id: 2, label: "Bottomwear" },
  { id: 3, label: "Winterwear" },
];

const Collection = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sizeCategory, setSizeCategory] = useState("All");
  const [sortType, setSortType] = useState("");
  const { products } = useContext(Store);

  const categoryFunction = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const subCategoryFunction = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    if (sizeCategory !== "All") {
      productsCopy = productsCopy.filter((product) =>
        product.sizes.some((size) => size === sizeCategory)
      );
    }

    setFilteredProducts(productsCopy);
  };

  const ProductSorting = () => {
    let productsCopy = filteredProducts.slice();
    switch (sortType) {
      case "price_low_to_high":
        setFilteredProducts(productsCopy.sort((a, b) => a.price - b.price));
        break;
      case "price_high_to_low":
        setFilteredProducts(productsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sizeCategory]);

  useEffect(() => {
    ProductSorting();
    console.log(sortType);
  }, [sortType]);

  return (
    <div className="my-5 sm:my-20 w-full dark:text-white">
      <div className="w-full flex flex-col md:flex-row gap-5">
        {/* left filter container */}

        <div className="bg-white p-5 md:w-[250px] flex-shrink-0 border border-slate-300 dark:border-slate-700 rounded-xl dark:bg-transparent dark:text-white h-fit">
          <div className="w-full flex justify-between items-center gap-5">
            <h2 className="heading2">FILTERS</h2>
            <SlidersHorizontal size={18} />
          </div>
          <p className="h-[0.3px] bg-slate-300 dark:bg-slate-900 w-full my-5"></p>

          {/* category filter */}

          <h2 className="heading2 mb-3">Category</h2>
          <div className="flex flex-col gap-2">
            {filterCheckList.map((each) => (
              <div
                className="flex gap-3 items-center hover:scale-[1.1] origin-left transition-all duration-200"
                key={each.id}
              >
                <input
                  type="checkbox"
                  id={each.label}
                  value={each.label}
                  onChange={categoryFunction}
                />
                <label htmlFor={each.label}>{each.label}</label>
              </div>
            ))}
          </div>

          {/* size filter */}
          <p className="h-[0.3px] bg-slate-300 dark:bg-slate-900 w-full my-5"></p>
          <div>
            <div className="flex justify-between items-center">
              <h2 className="heading2 mb-3">Size</h2>
              <ChevronUp size={18} />
            </div>
            <div className="flex flex-wrap gap-3">
              {sizes.map((each) => (
                <button
                  className={`btn-primary ${
                    sizeCategory === each && "border-[2px] border-orange-600"
                  }`}
                  type="button"
                  key={each}
                  onClick={(e) => setSizeCategory(e.target.textContent)}
                >
                  {each}
                </button>
              ))}
            </div>
          </div>

          {/* sub category */}
          <p className="h-[0.3px] bg-slate-300 dark:bg-slate-900 w-full my-5"></p>
          <div>
            <h2 className="heading2 mb-3">Sub Category</h2>
            <div className="flex flex-col gap-2">
              {subCategories.map((each) => (
                <div
                  className="flex gap-3 items-center hover:scale-[1.1] origin-left transition-all duration-200"
                  key={each.id}
                >
                  <input
                    type="checkbox"
                    id={each.label}
                    value={each.label}
                    onChange={subCategoryFunction}
                  />
                  <label htmlFor={each.label}>{each.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-3 flex-grow">
          {/* Add your collection page content here */}

          <div className="flex gap-5 justify-between flex-wrap">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide pointer-events-none max-w-[800px]">
              All <span className="span">Collections</span>
            </h1>
            <div className="flex gap-1 items-center border px-2 rounded-md flex-wrap">
              <p>Sort by:</p>
              <select
                className="outline-none bg-transparent"
                onChange={(e) => setSortType(e.target.value)}
              >
                <option className="bg-black text-white">Default</option>
                <option
                  className="bg-black text-white"
                  value="price_high_to_low"
                >
                  Price: High to Low
                </option>
                <option
                  className="bg-black text-white"
                  value="price_low_to_high"
                >
                  Price: Low to High
                </option>
              </select>
            </div>
          </div>

          {/* product section */}

          <div className="mt-10 grid max-[300px]:grid-cols-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredProducts.map((each) => (
              <div className="rounded-xl overflow-hidden pb-5" key={each._id}>
                <NavLink
                  to={`/product/${each._id}`}
                  className="h-full overflow-hidden"
                >
                  <img
                    className="hover:scale-[1.1] origin-bottom transition-all duration-300"
                    src={each.image[0]}
                    alt={each.title}
                  />
                </NavLink>
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
    </div>
  );
};

export default Collection;
