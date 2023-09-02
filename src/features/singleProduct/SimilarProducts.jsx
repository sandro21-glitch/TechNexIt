import { useQuery } from "react-query";
import { filterByCategory } from "../../services/apiProduct";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";
import ProductCard from "../../ui/ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { options } from "../../utils/splideOptions";

const SimilarProducts = ({ singleItem }) => {
  const {
    isLoading,
    error,
    data: sameCategory,
  } = useQuery({
    queryKey: ["product", singleItem.category],
    queryFn: () => filterByCategory(singleItem.category),
  });

  if (error) {
    return <Error />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="section-center">
      <h3 className="mb-5 font-rexFontBold">მსგავსი პროდუქცია</h3>
      <Splide options={options}>
        {sameCategory.map((product) => {
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
    </section>
  );
};

export default SimilarProducts;
