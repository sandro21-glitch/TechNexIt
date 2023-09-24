import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import ShopFilters from "../features/shop/ShopFilters";
import ShopProducts from "../features/shop/ShopProducts";
import SinglePageHeader from "../ui/SinglePageHeader";
import { filterAllByCategory } from "../services/apiProduct";
import Loading from "../ui/Loading";
const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allProductData, setAllProductData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["fetchProducts"],
    queryFn: () => filterAllByCategory(),
  });
  useEffect(() => {
    if (products && products.length > 0) {
      setAllProductData(products);
      setSelectedCategory("");
    }
  }, [products]);

  if (isLoading)
    return (
      <section>
        <SinglePageHeader category={"მაღაზია"} name={""} />
        <article className="h-full min-h-[50vh]">
          <Loading />
        </article>
      </section>
    );
  if (isError) return <p>Error...</p>;

  return (
    <section>
      <SinglePageHeader category={"მაღაზია"} name={""} />
      <article className="section-center pb-[3.5rem]">
        <div className="flex justify-between gap-[5rem] flex-col sm:flex-row">
          {/* Filters */}
          <ShopFilters
            setAllProductData={setAllProductData}
            products={products}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            allProductData={allProductData}
          />
          {/* allProduct */}
          <ShopProducts
            setItemsPerPage={setItemsPerPage}
            itemsPerPage={itemsPerPage}
            selectedCategory={selectedCategory}
            allProduct={allProductData}
          />
        </div>
      </article>
    </section>
  );
};

export default Shop;
