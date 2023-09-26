import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import toast from "react-hot-toast";
const ClearCartBtn = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("თქვენი კალათა გასუფთავდა");
  };
  return (
    <button
      onClick={handleClearCart}
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
