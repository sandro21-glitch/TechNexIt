import { AiFillCopy } from "react-icons/ai";
const CopyOrderId = () => {
  return (
    <button className="flex items-center gap-1 border border-gray-500 bg-gray-500 p-1 hover:bg-transparent text-white hover:text-gray-500">
      <AiFillCopy />
      <span>აიდის დაკოპირება</span>
    </button>
  );
};

export default CopyOrderId;
