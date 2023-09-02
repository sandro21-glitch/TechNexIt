import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
const ClearCartBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(clearCart())}
      className="
      border border-gray-700 bg-gray-700 text-white 
      px-2 py-1 font-rexFontLight hover:bg-transparent hover:text-black 
      transition-colors ease-in duration-100"
    >
      კალათის გასუფთავება
    </button>
  );
};

export default ClearCartBtn;
