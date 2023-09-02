import { useSelector } from "react-redux";
import CartTable from "./CartTable";

import CartButtons from "./CartButtons";

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
      <div className="border border-greyBorder text-center mb-7">
        <h4 className="p-10 mb-0 font-rexFontBold tracking-widest">
          თქვენ კალათაში არის
          <span className="font-bold mx-2 text-darkBlue font-sans">
            {cart.length}
          </span>
          პროდუქტი
        </h4>
      </div>
      <CartTable />
      <CartButtons />
    </section>
  );
};

export default CartItems;
