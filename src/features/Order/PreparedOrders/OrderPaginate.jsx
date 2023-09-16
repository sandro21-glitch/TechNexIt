import React from "react";
import OrderInfo from "./OrderInfo";

const OrderPaginate = ({ userOrders }) => {
  return (
    <div>
      {userOrders &&
        userOrders.map((order) => (
          <OrderInfo order={order} key={order.order_id} />
        ))}
    </div>
  );
};

export default OrderPaginate;
