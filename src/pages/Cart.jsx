import React from "react";
import SinglePageHeader from "../ui/SinglePageHeader";
import CartItems from "../features/cart/CartItems";
const Cart = () => {
  return (
    <div>
      <SinglePageHeader category={"კალათა"} />
      <CartItems />
    </div>
  );
};

export default Cart;
