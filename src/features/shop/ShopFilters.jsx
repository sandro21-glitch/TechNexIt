import { useState } from "react";
import FilterByName from "./filters/FilterByName";
import FilterByCategory from "./filters/FilterByCategory";
import SortByPrice from "./filters/SortByPrice";
import { useEffect } from "react";

const ShopFilters = ({
  allProductData,
  setSelectedCategory,
  selectedCategory,
  products,
  setAllProductData,
}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (products && products.length > 0) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);
  return (
    <div>
      <FilterByName
        selectedCategory={selectedCategory}
        products={products}
        setAllProductData={setAllProductData}
      />
      <FilterByCategory
        products={products}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setAllProductData={setAllProductData}
      />
      <p className="font-bold">show only available products</p>
      <p className="font-bold">საწყობის ტიპი</p>
      <SortByPrice
        setAllProductData={setAllProductData}
        allProductData={allProductData}
      />
    </div>
  );
};

export default ShopFilters;
