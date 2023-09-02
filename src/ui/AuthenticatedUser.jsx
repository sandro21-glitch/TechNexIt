// import { useUser } from "../hooks/useUser";
import { BiSolidUser } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserOptions from "../features/auth/userOptions";
import SmallLoader from "../ui/SmallLoader";
import { toast } from "react-hot-toast";
const AuthenticatedUser = ({ setIsOpenAuth }) => {
  // const { cart } = useSelector((store) => store.cart);

  const { user } = useSelector((store) => store.auth);
  const { isLoading } = useSelector((store) => store.auth);
  const { error } = useSelector((store) => store.auth);
  if (isLoading) {
    return <SmallLoader />;
  }
  if (error) {
    toast.error(error);
  }

  return (
    <ul className="flex items-end gap-5 md:mt-2 md:justify-between justify-start lg:justify-normal">
      {!user && (
        <li
          onClick={() => setIsOpenAuth(true)}
          className="flex-center gap-2 cursor-pointer text-[1rem] text-black font-medium hover:text-darkBlue transition-colors ease-in duration-150"
        >
          <p className="mb-0">
            <BiSolidUser />
          </p>
          <p>ავტორიზაცია</p>
        </li>
      )}
      {user && (
        <li className="group relative flex items-center gap-1 cursor-pointer text-[1rem] text-black font-medium hover:text-darkBlue transition-colors ease-in duration-150">
          <p className="mb-0">
            <BiSolidUser />
          </p>
          <p>{user.user.email}</p>
          <UserOptions />
          <p className="text-xl">
            <IoMdArrowDropdown />
          </p>
        </li>
      )}

      {user && user.user.role === "authenticated" && (
        <li className="flex-center gap-2 cursor-pointer text-[1rem] text-black font-medium hover:text-darkBlue transition-colors ease-in duration-150">
          <p className="font-bold text-black">
            <FiLogOut className="font-extrabold text-black" />
          </p>
          <p>გამოსვლა</p>
        </li>
      )}
    </ul>
  );
};

export default AuthenticatedUser;
