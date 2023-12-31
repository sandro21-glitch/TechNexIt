import { useQuery } from "react-query";
import { productsWithDiscount } from "../../services/apiProduct";

import DiscountedList from "./DiscountedList";
import SmallSpinner from "../../ui/SmallSpinner";
export default function DiscountedProducts() {
  const {
    data: filteredProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productsWithDiscount,
  });

  if (isLoading) {
    return <SmallSpinner />;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <article className="">
      <h3 className="font-rexFontLight mb-10">ფასდაკლებული პროდუქცია</h3>
      <DiscountedList filteredProducts={filteredProducts} />
    </article>
  );
}
