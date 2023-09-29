import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import ProductCard from "../../ui/ProductCard";
import { options } from "../../utils/splideOptions";

const LatestProduct = ({ latestProducts }) => {
  return (
    <Splide options={options}>
      {latestProducts.map((product) => {
        return (
          <SplideSlide key={product.id}>
            <ProductCard product={product} />
          </SplideSlide>
        );
      })}
      <div className="splide__progress mt-[31rem]">
        <div className="splide__progress__bar" />
      </div>
    </Splide>
  );
};

export default LatestProduct;
