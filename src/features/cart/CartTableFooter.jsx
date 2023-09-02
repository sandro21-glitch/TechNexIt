import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalDiscount } from "./cartSlice";
import { formatPrice } from "../../utils/calculateDiscount";
const CartTableFooter = () => {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalDiscount = useSelector(getTotalDiscount);
  return (
    <div className="border border-greyBorder">
      <div className="flex justify-between  p-10 bor">
        <div className="font-rexFontLight">საერთო ფასდაკლება</div>
        <div>{formatPrice(totalDiscount)}</div>
      </div>
      <hr />
      <div className="flex justify-between p-10 bor">
        <div className="font-rexFontLight">საერთო ღირებულება</div>
        <div>{formatPrice(totalCartPrice)}</div>
      </div>
    </div>
  );
};

export default CartTableFooter;
