import React, { useEffect, useState } from "react";

const FilterByPrice = ({
  setAllProductData,
  products,
  selectedCategory,
  filterType,
  maxPrice,
  setMaxPrice,
}) => {
  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
  };

  useEffect(() => {
    let filteredProducts = products;

    if (filterType === "available") {
      filteredProducts = filteredProducts.filter(
        (product) => product.amount > 0
      );
    } else if (filterType === "pre") {
      filteredProducts = filteredProducts.filter(
        (product) => product.amount < 1
      );
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price <= maxPrice && product.category === selectedCategory
      );
    } else {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    }

    setAllProductData(filteredProducts);
  }, [maxPrice, setAllProductData, selectedCategory, filterType, products]);

  return (
    <div>
      <h6 className="text-[1.1rem] font-rexFontLight font-bold">
        ღირებულება ლარებში
      </h6>
      <hr />
      <div className="flex justify-between gap-3">
        <input
          type="range"
          className="w-full cursor-w-resize"
          min={0}
          max={10000}
          value={maxPrice}
          onChange={(e) => handleMaxPriceChange(e.target.value)}
        />
        <input
          className="max-w-[3.5rem] text-center px-[.3rem] w-full outline-none
             border border-greyBorder focus:border-gray-700 transition-all ease-in duration-150"
          type="number"
          value={maxPrice}
          onChange={(e) => handleMaxPriceChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterByPrice;
