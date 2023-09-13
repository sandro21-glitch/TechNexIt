import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PlaceOrderBtn = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const handleOrder = () => {
    user
      ? navigate("/order/OrderPrepare")
      : toast.error("გაიარეთ ავტორიზაცია შესაკვეთად");
  };
  return (
    <button
      onClick={() => handleOrder()}
      className="
      border border-lightBlue bg-lightBlue text-white 
      px-2 py-1 font-rexFontLight hover:bg-transparent hover:text-black 
      transition-colors ease-in duration-100"
    >
      შეკვეთის გაფორმება
    </button>
  );
};

export default PlaceOrderBtn;
