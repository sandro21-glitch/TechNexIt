import React from "react";
import SingleShopItem from "./SingleShopItem";
import { filterAllByCategory } from "../../services/apiProduct";
import { useQuery } from "react-query";
import PaginatedItems from "./PaginatedItems";

const ShopProducts = () => {
  const {
    data: allProduct,
    isLoading,
    isError,
  } = useQuery({
    queryFn: ["fetchProducts"],
    queryFn: () => filterAllByCategory(""),
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  return (
    <div className="flex-1">
      {/* Products grid */}
      <PaginatedItems itemsPerPage={9} allProducts={allProduct} />
    </div>
  );
};

export default ShopProducts;
