import React, { useEffect, useState } from "react";
import PaginatedItems from "./PaginatedItems";
import HeaderFilters from "./filters/header filters/HeaderFilters";
const ShopProducts = ({
  allProduct,
  selectedCategory,
  itemsPerPage,
  setItemsPerPage,
}) => {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <div className="flex-1">
      <HeaderFilters
        itemsPerPage={itemsPerPage}
        allProduct={allProduct}
        setIsGrid={setIsGrid}
        isGrid={isGrid}
        setItemsPerPage={setItemsPerPage}
      />
      {/* Products grid */}
      {allProduct.length === 0 ? (
        <p className="text-center font-rexFontLight text-2xl">
          თქვენი კრიტერიუმების შესაბამისი პროდუქტი ვერ მოიძებნა.
        </p>
      ) : (
        <PaginatedItems
          selectedCategory={selectedCategory}
          itemsPerPage={itemsPerPage}
          allProducts={allProduct}
          isGrid={isGrid}
        />
      )}
    </div>
  );
};

export default ShopProducts;
