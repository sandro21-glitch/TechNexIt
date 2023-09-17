import RemoveOrder from "./RemoveOrder";
import CopyOrderId from "./CopyOrderId";
import ShowProducts from "./ShowProducts";
import PayWithCard from "./PayWithCard";
import PrintOrder from "./PrintOrder";
const OrderOptions = ({ order }) => {
  return (
    <div className="font-rexFontLight mt-5 flex flex-col lg:flex-row lg:justify-between gap-2 text-[1rem]">
      <PrintOrder />
      <ShowProducts />
      <CopyOrderId />
      <PayWithCard />
      <RemoveOrder />
    </div>
  );
};

export default OrderOptions;
