import DiscountedProducts from "../features/HomePage/DiscountedProducts";
import Hero from "../features/HomePage/Hero";
import FullBuildItems from "../features/HomePage/fullBuildItems";
import Offer from "../features/HomePage/Offer";

const Home = () => {
  return (
    <section className="section-center py-10">
      <Hero />
      <FullBuildItems />
      <DiscountedProducts />
      <Offer />
    </section>
  );
};

export default Home;
