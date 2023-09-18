import OrderInfo from "./OrderInfo";
import OrderOptions from "./orderOptions/OrderOptions";

const OrderPaginate = ({ order, index }) => {
  return (
    <div>
      <h3 className="font-rexFontLight">შეკვეთა №{index}</h3>
      <OrderInfo order={order} />
      <OrderOptions order={order} />
    </div>
  );
};

export default OrderPaginate;
