import { useEffect } from "react";
import { useState } from "react";

const FilterByName = ({
  setAllProductData,
  products,
  selectedCategory,
  filterType,
  maxPrice,
}) => {
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    let filteredProducts = products;

    // Apply the current filter based on filterType
    if (filterType === "available") {
      filteredProducts = filteredProducts.filter(
        (product) => product.amount > 0 && product.price <= maxPrice
      );
    } else {
      filteredProducts = filteredProducts.filter(
        (product) => product.amount < 1 && product.price <= maxPrice
      );
    }

    // Filter products by name
    if (selectedCategory === "") {
      if (searchProduct !== "") {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(searchProduct.toLowerCase())
        );
      }
    } else {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase() &&
          product.name.toLowerCase().includes(searchProduct.toLowerCase())
      );
    }

    setAllProductData(filteredProducts);
  }, [searchProduct, selectedCategory, filterType, products]);

  return (
    <input
      type="text"
      placeholder="ჩაწერეთ ტექსტი..."
      onChange={(e) => setSearchProduct(e.target.value)}
      value={searchProduct}
      className=" mb-5 w-full p-2 rounded-md
       border border-greyBorder focus:border-gray-600
        transition-all ease-in duration-200 outline-none"
    />
  );
};

export default FilterByName;
