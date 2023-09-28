import OfferItem from "./OfferItem";
import SmallSpinner from "../../ui/SmallSpinner";
import { useQuery } from "react-query";
import { getPcProducts } from "../../services/apiPc";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { options } from "../../utils/splideOptions";
const Offer = () => {
  const {
    data: allPc,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pc"],
    queryFn: getPcProducts,
  });

  if (isLoading) {
    return <SmallSpinner />;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <article className="">
      <h3 className="font-rexFontLight  mb-10">ჩვენ გთავაზობთ</h3>
      <Splide options={options}>
        {allPc.map((pcItem) => {
          return (
            <SplideSlide key={pcItem.id}>
              <OfferItem pcItem={pcItem} />
            </SplideSlide>
          );
        })}
        <div className="splide__progress mt-[33rem]">
          <div className="splide__progress__bar" />
        </div>
      </Splide>
    </article>
  );
};
export default Offer;
