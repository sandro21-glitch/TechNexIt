import React, { useState } from "react";
import { filterAllByCategory } from "../../services/apiProduct";
import { useQuery } from "react-query";
import PaginatedItems from "./PaginatedItems";
import HeaderFilters from "./filters/header filters/HeaderFilters";
const ShopProducts = () => {
  const [isGrid, setIsGrid] = useState(true);
  const {
    data: allProduct,
    isLoading,
    isError,
  } = useQuery({
    queryFn: ["fetchProducts"],
    queryFn: () => filterAllByCategory(""),
  });
  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>Error...</p>;
  return (
    <div className="flex-1">
      <HeaderFilters
        allProduct={allProduct}
        setIsGrid={setIsGrid}
        isGrid={isGrid}
      />
      {/* Products grid */}
      <PaginatedItems
        itemsPerPage={9}
        allProducts={allProduct}
        isGrid={isGrid}
      />
    </div>
  );
};

export default ShopProducts;
