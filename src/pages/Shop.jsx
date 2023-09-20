import ShopFilters from "../features/shop/ShopFilters";
import ShopProducts from "../features/shop/ShopProducts";
import SinglePageHeader from "../ui/SinglePageHeader";
const Shop = () => {
  return (
    <section>
      <SinglePageHeader category={"მაღაზია"} name={""} />
      <article className="section-center pb-[3.5rem]">
        <div className="flex justify-between gap-[5rem] flex-col sm:flex-row">
          {/* Filters */}
          <ShopFilters />
          {/* allProduct */}
          <ShopProducts />
        </div>
      </article>
    </section>
  );
};

export default Shop;
