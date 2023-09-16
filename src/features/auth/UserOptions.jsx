import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const UserOptions = () => {
  return (
    <ul className="group-hover:block py-3 hidden absolute min-w-[13rem] h-auto border bg-white text-black border-gray-500 top-full left-0 z-[9999]">
      <li>
        <Link to='/account/user' className='text-[.9rem] flex items-center  gap-1 py-2 pl-2 hover:bg-gray-400'>
          <FaAngleDoubleRight />
          <span className="mb-0">პირადი ინფორმაცია</span>
        </Link>
      </li>
      <li>
        <Link to='/account/passwordReset' className='text-[.9rem] flex items-center  gap-1 py-2 pl-2 hover:bg-gray-400'>
          <FaAngleDoubleRight />
          <span className="mb-0">პაროლის შეცვლა</span>
        </Link>
      </li>
      <li>
        <Link to='/cart' className='text-[.9rem] flex items-center  gap-1 py-2 pl-2 hover:bg-gray-400'>
          <FaAngleDoubleRight />
          <span className="mb-0">კალათა</span>
        </Link>
      </li>
      <li>
        <Link to='/order/confirmedOrders' className='text-[.9rem] flex items-center gap-1 py-2 pl-2 hover:bg-gray-400'>
          <FaAngleDoubleRight />
          <span className="mb-0">შეკვეთები</span>
        </Link>
      </li>
    </ul>
  );
};

export default UserOptions;
