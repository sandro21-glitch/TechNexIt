import { useState } from "react";
import FilterByName from "./filters/FilterByName";
import FilterByCategory from "./filters/FilterByCategory";
import { useEffect } from "react";
import StoreType from "./filters/StoreType";
import FilterByPrice from "./filters/FilterByPrice";

const ShopFilters = ({
  allProductData,
  setSelectedCategory,
  selectedCategory,
  products,
  setAllProductData,
}) => {
  const [categories, setCategories] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [maxPrice, setMaxPrice] = useState(10000);
  useEffect(() => {
    if (products && products.length > 0) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);
  return (
    <div className="relative">
      <div className="md:sticky md:top-[1rem]">
        <FilterByName
          filterType={filterType}
          selectedCategory={selectedCategory}
          products={products}
          setAllProductData={setAllProductData}
        />
        <FilterByCategory
          maxPrice={maxPrice}
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
        <FilterByPrice
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          filterType={filterType}
          selectedCategory={selectedCategory}
          products={products}
          setAllProductData={setAllProductData}
        />
      </div>
    </div>
  );
};

export default ShopFilters;
