import React from "react";
import SingleShopItem from "./SingleShopItem";
import { filterAllByCategory } from "../../services/apiProduct";
import { useQuery } from "react-query";

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
      <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {allProduct.map((product) => {
          return <SingleShopItem key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ShopProducts;
