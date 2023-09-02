import Price from "../../ui/Price";
import { BsFillCheckCircleFill, BsFillCalendarCheckFill } from "react-icons/bs";
import Share from "../../ui/Share";
import AddToCartBtn from "../../ui/AddToCartBtn";
import AmountCheck from "../../ui/AmountCheck";

const SingleProductInfo = ({ singleItem }) => {
  const { name, discount, price, amount } = singleItem;

  return (
    <div className="font-rexFontLight">
      <h1 className="text-[1.5rem] font-semibold mb-5">{name}</h1>
      <div className="mb-5">
        <Price discount={discount} price={price} />
      </div>
      <p className="text-2xl flex items-start gap-2 mb-5">
        <BsFillCheckCircleFill />
        მოქმედებს 6 თვიანი გარანტია საუკეთესო პირობებით
      </p>
      <p className="text-2xl flex items-start gap-2 mb-5">
        <BsFillCalendarCheckFill />
        შეგიძლიათ ისარგებლოთ განვადებით
      </p>
      <AmountCheck amount={amount} />
      <hr />
      <p className="mt-5 flex gap-5">
        <b className="font-bold">მდგომარეობა </b>:<span>ახალი</span>
      </p>
      <p className="mt-5 flex gap-5 mb-5">
        <b className="font-bold">საერთო რაოდენობა</b>:<span>{amount}</span>
      </p>
      <Share />
      {amount >= 1 && (
        <div className="mb-5">
          <AddToCartBtn product={singleItem} />
        </div>
      )}
    </div>
  );
};

export default SingleProductInfo;
