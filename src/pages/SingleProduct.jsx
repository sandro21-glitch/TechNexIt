import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSingleProduct } from "../services/apiProduct";
import Loading from "../ui/Loading";
import SinglePageItem from "../features/singleProduct/SinglePageItem";
import SinglePageHeader from "../ui/SinglePageHeader";
import SimilarProducts from "../features/singleProduct/SimilarProducts";
// const calculateTotalPrice = (price, amount) => {
//   return price * amount;
// };
const SingleProduct = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: singleItem,
  } = useQuery(["products", id], () => getSingleProduct(id));

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }
  const newCartItem = {
    ...singleItem,
    totalPrice: singleItem.price,
    minAmount: 1,
  };
  return (
    <section>
      <SinglePageHeader
        category={newCartItem.category}
        name={newCartItem.name}
      />
      <SinglePageItem singleItem={newCartItem} />
      <SimilarProducts singleItem={newCartItem} />
    </section>
  );
};

export default SingleProduct;
