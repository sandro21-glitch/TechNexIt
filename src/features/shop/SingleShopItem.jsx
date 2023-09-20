import Price from "../../ui/Price";
import SinglePageButton from "../../ui/SinglePageButton";

const SingleShopItem = ({ product }) => {
  const { id, name, price, discount, image, amount, category } = product;
  return (
    <li className="border border-greyBorder w-full max-w-[15rem] flex flex-col items-center justify-between p-4">
      <img src={image} alt={name} className="max-w-[10rem]" />
      <div className="text-center flex flex-col justify-between">
        <p className="text-[.9rem]">{name}</p>
        <Price discount={discount} price={price} />
      </div>
      <SinglePageButton category={category} id={id} />
    </li>
  );
};

export default SingleShopItem;
