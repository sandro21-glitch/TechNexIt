import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import ProductCard from "../../ui/ProductCard";
import { options } from "../../utils/splideOptions";
const DiscountedList = ({ filteredProducts }) => {
  return (
    <Splide options={options}>
      {filteredProducts.map((product) => {
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

export default DiscountedList;
