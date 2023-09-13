import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalDiscount } from "../cart/cartSlice";
import { formatPrice } from "../../utils/calculateDiscount";
const OrderSummary = () => {
  const { cart } = useSelector((store) => store.cart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalDiscount = useSelector(getTotalDiscount);
  return (
    <div className="my-7 border border-greyBorder">
      <ul className="flex flex-col">
        <li className="font-rexFontLight font-bold border-b border-b-greyBorder p-2 flex justify-between items-center">
          ჯამური ფასი
          <span>{formatPrice(totalCartPrice)}</span>
        </li>

        <li className="font-rexFontLight font-bold border-b border-b-greyBorder p-2 flex justify-between items-center">
          ფასდაკლება
          <span>{formatPrice(totalDiscount)}</span>
        </li>

        <li className="font-rexFontLight font-bold p-2 flex justify-between items-center">
          პროდუქციის რაოდენობა
          <span>{cart ? cart.length : null}</span>
        </li>
      </ul>
    </div>
  );
};

export default OrderSummary;
