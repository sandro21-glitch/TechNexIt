import { Link } from "react-router-dom";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useSelector } from "react-redux";
const FixedCart = () => {
  const { cart } = useSelector((store) => store.cart);
  if (cart.length < 1) return null;
  return (
    <Link
      to="/cart"
      className="fixed z-[9999] bottom-5 right-5 text-[1rem] text-black font-medium "
    >
      <div className="relative ">
        <BsFillBasket2Fill className="text-yellow-400 text-[3.5rem]" />
        <div className="flex items-center justify-center font-bold text-[1rem] absolute top-[2px] left-0 right-0 ">
          <p>{cart.length}</p>
        </div>
      </div>
    </Link>
  );
};

export default FixedCart;
