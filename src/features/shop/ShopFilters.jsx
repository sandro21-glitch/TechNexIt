import React from "react";
import FilterByName from "./filters/FilterByName";
import FilterByCategory from "./filters/FilterByCategory";

const ShopFilters = () => {
  return (
    <div>
      <FilterByName />
      <FilterByCategory />
    </div>
  );
};

export default ShopFilters;
