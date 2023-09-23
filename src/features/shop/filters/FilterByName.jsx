import { useEffect } from "react";
import { useState } from "react";

const FilterByName = ({
  setAllProductData,
  products,
  selectedCategory,
}) => {
  const [searchProduct, setSearchProduct] = useState("");
  useEffect(() => {
    if (selectedCategory === "") {
      if (searchProduct !== "") {
        const newProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchProduct.toLowerCase())
        );
        setAllProductData(newProducts);
      } else {
        setAllProductData(products);
      }
    } else {
      const categoryAndNameProducts = products.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase() &&
          product.name.toLowerCase().includes(searchProduct.toLowerCase())
      );
      setAllProductData(categoryAndNameProducts);
    }
  }, [searchProduct, selectedCategory, products]);

  return (
    <input
      type="text"
      placeholder="ძებნა"
      onChange={(e) => setSearchProduct(e.target.value)}
      value={searchProduct}
      className="font-rexFontLight mb-5 w-full p-2 rounded-md
       border border-greyBorder focus:border-gray-600
        transition-all ease-in duration-200 outline-none"
    />
  );
};

export default FilterByName;
