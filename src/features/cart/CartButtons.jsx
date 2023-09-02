import React from "react";
import ClearCartBtn from "../../ui/ClearCartBtn";
import PlaceOrderBtn from "./PlaceOrderBtn";

const CartButtons = () => {
  return (
    <div className="mt-10 flex items-center gap-10">
      <ClearCartBtn />
      <PlaceOrderBtn />
    </div>
  );
};

export default CartButtons;
