import { BiSolidUser } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import UserOptions from "../features/auth/UserOptions";
import { toast } from "react-hot-toast";
import { userSignOut } from "../features/auth/authSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useUser } from "../hooks/useUser";
const AuthenticatedUser = ({ setIsOpenAuth }) => {
  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const {
    userData,
    isLoading: loadUser,
    isError: loadUserError,
  } = useUser(user?.user.id);

  const handleUserLogout = () => {
    dispatch(userSignOut())
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Logout failed:", error);
      });
  };

  if (loadUser) {
    return (
      <SkeletonTheme baseColor="#fff" highlightColor="rgb(0, 102, 102)">
        <p>
          <Skeleton />
        </p>
      </SkeletonTheme>
    );
  }
  if (loadUserError) {
    toast.dismiss();
    toast.error(loadUserError);
  }
  if (!userData) {
    return (
      <ul className="flex items-end gap-5 md:mt-2 justify-between lg:justify-normal">
        <li
          onClick={() => setIsOpenAuth(true)}
          className="flex-center gap-2 cursor-pointer text-[1rem] text-black font-medium hover:text-darkBlue transition-colors ease-in duration-150"
        >
          <p className="mb-0">
            <BiSolidUser />
          </p>
          <p>ავტორიზაცია</p>
        </li>
      </ul>
    );
  }

  return (
    <ul className="flex items-end gap-5 md:mt-2 justify-between lg:justify-normal">
      {userData && (
        <li className="group relative flex items-center gap-1 cursor-pointer text-[1rem] text-black font-medium hover:text-darkBlue transition-colors ease-in duration-150">
          <p className="mb-0">
            <BiSolidUser />
          </p>
          <p>{userData.name}</p>
          <UserOptions />
          <p className="text-xl">
            <IoMdArrowDropdown />
          </p>
        </li>
      )}

      {userData && (
        <li className="flex-center gap-2 cursor-pointer text-[1rem] text-black font-medium hover:text-darkBlue transition-colors ease-in duration-150">
          <p className="font-bold text-black">
            <FiLogOut className="font-extrabold text-black" />
          </p>
          <button onClick={handleUserLogout}>გამოსვლა</button>
        </li>
      )}
    </ul>
  );
};

export default AuthenticatedUser;
