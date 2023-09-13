import { Link } from "react-router-dom";
import DeliveryMethod from "./DeliveryMethod";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import UserOrderInfo from "./UserOrderInfo";
import { useState } from "react";
import PlaceOrderBtn from "./PlaceOrderBtn";

const OrderPrepare = () => {
  return (
    <div className="w-full max-w-[50rem] border-2 border-greyBorder p-5">
      <h2 className="font-rexFontBold text-[1.7rem]">შეკვეთის დეტალები</h2>
      <hr className="my-5" />
      <form>
        <UserOrderInfo />
        <DeliveryMethod />
        <PaymentMethod />
        <OrderSummary />
        <TermsCheckbox />
        <PlaceOrderBtn />
      </form>
    </div>
  );
};

export default OrderPrepare;
