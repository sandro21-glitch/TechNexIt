import { useQuery } from "react-query";
import { getSelectedPc } from "../../services/apiPc";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SelectedPcItem from "./SelectedPcItem";
import Loading from "../../ui/Loading";
// Default theme
import "@splidejs/splide/css";
import { options } from "../../utils/splideOptions";
const SelectedCategoryBuilds = ({ selectedCategory }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["pc", selectedCategory],
    queryFn: () => getSelectedPc(selectedCategory),
  });
  if (error) {
    return <p>error</p>;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Splide options={options}>
      {data.map((selectedPc) => {
        return (
          <SplideSlide tag="article" key={selectedPc.id}>
            <SelectedPcItem selectedPc={selectedPc} />
          </SplideSlide>
        );
      })}
      <div className="splide__progress mt-[33rem]">
        <div className="splide__progress__bar" />
      </div>
    </Splide>
  );
};

export default SelectedCategoryBuilds;
