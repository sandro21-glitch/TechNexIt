import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
const AddToCartBtn = ({ product, shop = false }) => {

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(product));
  };
  if (shop) {
    return (
      <button
        onClick={handleAddItem}
        className="w-auto border p-2 text-white border-transparent bg-darkBlue hover:border-darkBlue hover:bg-transparent hover:text-darkBlue"
      >
        <BsCartPlus />
      </button>
    );
  }
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
