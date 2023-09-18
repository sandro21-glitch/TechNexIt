import RemoveOrder from "./RemoveOrder";
import CopyOrderId from "./CopyOrderId";
import ShowProducts from "./ShowProducts";
import PayWithCard from "./PayWithCard";
import PrintOrder from "./PrintOrder";
const OrderOptions = ({ order }) => {
  const { order_id: orderId } = order;
  return (
    <div className="font-rexFontLight mt-2 flex flex-col lg:flex-row  gap-2 text-[1rem]">
      <PrintOrder />
      <ShowProducts />
      <CopyOrderId orderId={orderId} />
      <PayWithCard />
      <RemoveOrder orderId={orderId} />
    </div>
  );
};

export default OrderOptions;
