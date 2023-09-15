import { useSelector } from "react-redux";
import CartTable from "./CartTable";

import CartButtons from "./CartButtons";
import QuantityDisplay from "../../ui/QuantityDisplay";

const CartItems = () => {
  const { cart } = useSelector((store) => store.cart);
  if (cart.length < 1)
    return (
      <div className="section-center text-center py-52">
        <h4 className="border border-gray-200 p-10 mb-0 font-rexFontBold">
          ამჟამად თქვენი კალათა ცარიელია
        </h4>
      </div>
    );
  return (
    <section className="section-center pb-10">
      <QuantityDisplay count={cart.length} label="თქვენს კალათაში არის" />
      <CartTable />
      <CartButtons />
    </section>
  );
};

export default CartItems;
