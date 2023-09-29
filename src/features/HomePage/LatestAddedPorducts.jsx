import { useQuery } from "react-query";
import { fetchLatestProducts } from "../../services/apiProduct";

import SmallSpinner from "../../ui/SmallSpinner";
import LatestProduct from "./LatestProduct";
const LatestAddedPorducts = () => {
  const {
    data: latestProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fetchLatest"],
    queryFn: fetchLatestProducts,
  });

  if (isLoading) {
    return <SmallSpinner />;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <article>
      <h3 className="font-rexFontLight mb-10">ბოლოს დამატებულები</h3>
      <LatestProduct latestProducts={latestProducts} />
    </article>
  );
};

export default LatestAddedPorducts;
