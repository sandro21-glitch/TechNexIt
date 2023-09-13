import { Link } from "react-router-dom";
import DeliveryMethod from "./DeliveryMethod";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import UserOrderInfo from "./UserOrderInfo";
import { useState } from "react";
import PlaceOrderBtn from "./PlaceOrderBtn";

const OrderPrepare = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  return (
    <div className="w-full max-w-[50rem] border-2 border-greyBorder p-5">
      <h2 className="font-rexFontBold text-[1.7rem]">შეკვეთის დეტალები</h2>
      <hr className="my-5" />
      <form>
        <UserOrderInfo />
        <DeliveryMethod />
        <PaymentMethod />
        <OrderSummary />
        <div className="font-rexFontLight flex items-center gap-2 mb-7">
          <input type="checkbox" className="w-4 h-4" checked={activeCheckbox} />
          <p
            className="text-black cursor-pointer text-lg"
            onClick={() => setActiveCheckbox((prevState) => !prevState)}
          >
            გავეცანი და ვეთანხმები{" "}
            <Link className="text-darkBlue">საგარანტიო პირობებს</Link>
          </p>
        </div>
        <PlaceOrderBtn />
      </form>
    </div>
  );
};

export default OrderPrepare;
