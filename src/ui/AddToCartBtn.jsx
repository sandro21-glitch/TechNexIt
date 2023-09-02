import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
const AddToCartBtn = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(product));
  };

  return (
    <button
      onClick={handleAddItem}
      className="w-auto border p-2 text-white border-transparent bg-veryLightBlue hover:border-veryLightBlue hover:bg-transparent hover:text-veryLightBlue"
    >
      <div className="flex items-center justify-center gap-2 text-xl">
        <BsCartPlus />
        კალათაში დამატება
      </div>
    </button>
  );
};

export default AddToCartBtn;
