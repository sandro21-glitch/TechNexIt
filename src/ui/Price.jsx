import { calcDiscount, formatPrice } from "../utils/calculateDiscount";

const Price = ({ discount, price, br = false }) => {
  // calculate the discounted price
  const discountedPrice = discount ? calcDiscount(price, discount) : price;

  return (
    <div
      className={`${
        br ? "text-[1rem] mb-0" : "text-[1.1rem] mb-5"
      } font-[500] text-veryLightBlue `}
    >
      {discount ? (
        <p>
          {formatPrice(discountedPrice)}
          {br && <br />}
          <span
            className={`${br ? "ml-0" : "ml-5"} line-through text-greyBorder`}
          >
            {formatPrice(price)}
          </span>
        </p>
      ) : (
        <span>{formatPrice(price)}</span>
      )}
    </div>
  );
};

export default Price;
