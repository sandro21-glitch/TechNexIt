import React from "react";
import SinglePageHeader from "../ui/SinglePageHeader";
import CartItems from "../features/cart/CartItems";
const Cart = () => {
  return (
    <section>
      <SinglePageHeader category={"კალათა"} />
      <CartItems />
    </section>
  );
};

export default Cart;
