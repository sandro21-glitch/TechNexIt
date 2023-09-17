import { BiBlock } from "react-icons/bi";
const PayWithCard = () => {
  return (
    <button
      title="ბარათით გადახდას შეძლებთ შეკვეთის დადასტურების შემდეგ"
      disabled
      className="flex items-center gap-1 border  border-gray-700 bg-gray-700 p-1 hover:bg-transparent text-white hover:text-gray-700"
    >
      <BiBlock />
      <span>ბარათით გადახდა</span>
    </button>
  );
};

export default PayWithCard;
