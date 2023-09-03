import { FaAngleDoubleRight } from "react-icons/fa";
const UserOptions = () => {
  return (
    <ul className="group-hover:block py-3 hidden absolute min-w-[13rem] h-auto border bg-white text-black border-gray-500 top-full left-0 z-[9999]">
      <li className="text-[.9rem] flex items-center  gap-1 py-2 pl-2 hover:bg-gray-400">
        <FaAngleDoubleRight />
        <span className="mb-0">პირადი ინფორმაცია</span>
      </li>
      <li className="text-[.9rem] flex items-center  gap-1 py-2 pl-2 hover:bg-gray-400">
        <FaAngleDoubleRight />
        <span className="mb-0">პაროლის შეცვლა</span>
      </li>
      <li className="text-[.9rem] flex items-center gap-1 py-2 pl-2 hover:bg-gray-400">
        <FaAngleDoubleRight />
        <span className="mb-0">კალათა</span>
      </li>
      <li className="text-[.9rem] flex items-center gap-1 py-2 pl-2 hover:bg-gray-400">
        <FaAngleDoubleRight />
        <span className="mb-0">შეკვეთები</span>
      </li>
    </ul>
  );
};

export default UserOptions;
