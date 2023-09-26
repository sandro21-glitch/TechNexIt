import { useState } from "react";
import FilterByName from "./filters/FilterByName";
import FilterByCategory from "./filters/FilterByCategory";
import { useEffect } from "react";
import StoreType from "./filters/StoreType";

const ShopFilters = ({
  allProductData,
  setSelectedCategory,
  selectedCategory,
  products,
  setAllProductData,
}) => {
  const [categories, setCategories] = useState([]);
  const [filterType, setFilterType] = useState("all");

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
        filterType={filterType}
        selectedCategory={selectedCategory}
        products={products}
        setAllProductData={setAllProductData}
      />
      <FilterByCategory
        filterType={filterType}
        products={products}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setAllProductData={setAllProductData}
      />
      <StoreType
        filterType={filterType}
        setFilterType={setFilterType}
        selectedCategory={selectedCategory}
        products={products}
        setAllProductData={setAllProductData}
      />
    </div>
  );
};

export default ShopFilters;
