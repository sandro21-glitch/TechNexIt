import { AiFillPrinter } from "react-icons/ai";
const PrintOrder = () => {
  return (
    <button className="flex items-center gap-1 border border-darkBlue bg-darkBlue p-1 hover:bg-transparent text-white hover:text-darkBlue">
      <AiFillPrinter />
      <span>შეკვეთის ამობჭდვა</span>
    </button>
  );
};

export default PrintOrder;
