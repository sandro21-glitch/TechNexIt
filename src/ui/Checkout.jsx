import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  getProductWithId,
  increaseAmount,
  removeItem,
} from "../features/cart/cartSlice";

const Checkout = ({ singleItem }) => {
  const { id, minAmount } = singleItem;
  const dispatch = useDispatch();
  const checkAmount = useSelector(getProductWithId(id));

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between  border border-greyBorder p-2 ">
        <button onClick={() => dispatch(decreaseAmount(id))}>
          <AiOutlineMinus />
        </button>
        <p>{minAmount}</p>
        <button onClick={() => dispatch(increaseAmount(id))}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Checkout;
