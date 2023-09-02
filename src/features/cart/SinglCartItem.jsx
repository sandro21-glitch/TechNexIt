import Checkout from "../../ui/Checkout";
import { TiDelete } from "react-icons/ti";
import Price from "../../ui/Price";
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";
import { Link } from "react-router-dom";
const SinglCartItem = ({ cartItem }) => {
  const { id, name, image, category, totalPrice, discount } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="p-5 border-b border-greyBorder flex md:justify-between items-center flex-col gap-5 md:gap-0 md:flex-row">
      {/* product */}
      <div className="flex-1">
        <Link
          to={`/${category}/${id}`}
          className="flex items-center flex-col text-center"
        >
          <img src={image} alt={name} className="w-full max-w-[130px] h-auto" />
          <h6>{name}</h6>
        </Link>
      </div>
      {/* product code */}
      <div className="flex-1 text-center">
        <span className="font-bold">{id.slice(0, 5)}</span>
      </div>
      {/* quntity */}
      <div className="flex-1 text-center">
        <Checkout singleItem={cartItem} />
      </div>
      {/* price */}
      <div className="flex-1 text-center">
        <Price discount={discount} price={totalPrice} br={true} />
      </div>
      {/* guarantee */}
      <div className="flex-1 text-center">
        {category === "სისტემური ბლოკები" ? "1 წლიანი" : "6 თვიანი"}
      </div>
      {/* remove */}
      <button
        onClick={() => dispatch(removeItem(id))}
        className="flex-1 text-center flex justify-center font-rexFontBold"
      >
        <TiDelete className="text-4xl hover:text-darkBlue hidden md:block" />
        <div className="px-4 py-1 text-white text-[1rem] font-extrabold bg-lightBlue hover:bg-transparent border border-lightBlue hover:text-lightBlue md:hidden">
          წაშლა
        </div>
      </button>
    </div>
  );
};

export default SinglCartItem;
