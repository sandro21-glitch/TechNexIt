import React from "react";
import QuantityDisplay from "../../ui/QuantityDisplay";
const OrderConfirmation = () => {
  return (
    <div>
      <QuantityDisplay count={1} label="თქვენ გაქვთ განთავსებული" />
      <ul className="section-center">Confirmed Orders Page</ul>
    </div>
  );
};

export default OrderConfirmation;
