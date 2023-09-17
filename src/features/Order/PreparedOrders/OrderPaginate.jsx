import React from "react";
import OrderInfo from "./OrderInfo";
import OrderOptions from "./orderOptions/OrderOptions";

const OrderPaginate = ({ userOrders }) => {
  return (
    <div>
      {userOrders &&
        userOrders.map((order) => (
          <div>
            <OrderInfo order={order} key={order.order_id} />
            <OrderOptions order={order} />
          </div>
        ))}
    </div>
  );
};

export default OrderPaginate;
