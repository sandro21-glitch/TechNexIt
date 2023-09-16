import React from "react";
import { formatPrice } from "../../../utils/calculateDiscount";

const OrderInfo = ({ order }) => {
  const {
    order_id,
    user_name: name,
    user_number: number,
    order_date: date,
    product_price: price,
    delivery_method,
    payment_method,
    bank,
  } = order;
  return (
    <ul className="border border-greyBorder">
      <li className="p-2 border-b border-greyBorder">
        <div className="flex justify-between">
          <span className="font-rexFontLight font-bold">შეკვეთის აიდი</span>
          <span>{order_id}</span>
        </div>
      </li>
      <li className="p-2 border-b border-greyBorder">
        <div className="flex justify-between">
          <span className="font-rexFontLight font-bold">
            შემკვეთის სახელი და გვარი
          </span>
          <span>{name}</span>
        </div>
      </li>
      <li className="p-2 border-b border-greyBorder">
        <div className="flex justify-between">
          <span className="font-rexFontLight font-bold">
            შემკვეთის ტელეოფნი
          </span>
          <span>{number}</span>
        </div>
      </li>
      <li className="p-2 border-b border-greyBorder">
        <div className="flex justify-between">
          <span className="font-rexFontLight font-bold">
            განთავსების თარიღი
          </span>
          <span>{date}</span>
        </div>
      </li>
      <li className="p-2 border-b border-greyBorder">
        <div className="flex justify-between">
          <span className="font-rexFontLight font-bold">
            შეკვეთის ღირებულება
          </span>
          <span>{formatPrice(price)}</span>
        </div>
      </li>
      <li className="p-2 border-b border-greyBorder">
        <div className="flex justify-between">
          <span className="font-rexFontLight font-bold">მიწოდების მეთოდი</span>
          <span>{delivery_method}</span>
        </div>
      </li>
      <li className="p-2 border-b border-greyBorder">
        <div className="flex justify-between">
          <span className="font-rexFontLight font-bold">გადახდის მეთოდი</span>
          <span>
            {`${bank}ს`} {payment_method}
          </span>
        </div>
      </li>
      <li className="p-2">
        <div className="flex justify-between">
          <span className="font-rexFontLight font-bold">შეკვეთის სტატუსი</span>
          <span>დადასტურების მოლოდინში</span>
        </div>
      </li>
    </ul>
  );
};

export default OrderInfo;
