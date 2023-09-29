import DiscountedProducts from "../features/HomePage/DiscountedProducts";
import Hero from "../features/HomePage/Hero";
import FullBuildItems from "../features/HomePage/FullBuildItems";
import Offer from "../features/HomePage/Offer";
import LatestAddedPorducts from "../features/HomePage/LatestAddedPorducts";

const Home = () => {
  return (
    <section className="section-center py-10">
      <Hero />
      <FullBuildItems />
      <DiscountedProducts />
      <Offer />
      <LatestAddedPorducts />
    </section>
  );
};

export default Home;
