import CartTableFooter from "./CartTableFooter";
import SinglCartItem from "./SinglCartItem";
import { useSelector } from "react-redux";

const CartTable = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <article className="border border-greyBorder ">
      <ul className="border border-greyBorder p-5 flex justify-between font-semibold font-rexFontLight">
        <li className="flex-1 text-center">პროდუქცია</li>
        <li className="flex-1 text-center hidden md:block">კოდი</li>
        <li className="flex-1 text-center hidden md:block">რაოდენობა</li>
        <li className="flex-1 text-center hidden md:block">ფასი</li>
        <li className="flex-1 text-center hidden md:block">გარანტია</li>
        <li className="flex-1 text-center hidden md:block">წაშლა</li>
      </ul>
      {cart.map((cartItem) => {
        return <SinglCartItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <CartTableFooter />
    </article>
  );
};

export default CartTable;
