import AddToCartBtn from "../../ui/AddToCartBtn";
import Price from "../../ui/Price";
import SinglePageButton from "../../ui/SinglePageButton";

const SingleShopItem = ({ product }) => {
  const { id, name, price, discount, image, amount, category } = product;
  const newCartItem = {
    ...product,
    totalPrice: product.price,
    minAmount: 1,
  };
  return (
    <li className="relative group border border-greyBorder cursor-pointer">
      <div className="max-w-[15rem] min-h-[20rem] flex flex-col items-center justify-between p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-[10rem] group-hover:scale-110 transition-all ease-in duration-200"
        />
        <div className="text-center flex flex-col justify-between">
          <p className="text-[.9rem]">{name}</p>
          <Price discount={discount} price={price} />
        </div>
      </div>
      {/* single page button */}
      <div className="hidden border border-t-0 -ml-[.05rem] -mr-[.05rem] pb-2 border-greyBorder overflow-hidden bg-white left-0 right-0 group-hover:flex absolute z-[9999] justify-center">
        <SinglePageButton category={category} id={id} />
      </div>
      {/* add to cart button */}
      {amount < 1 ? null : (
        <div className="absolute right-2 top-2 font-rexFontLight font-bold text-xl">
          <AddToCartBtn product={newCartItem} shop={true} />
        </div>
      )}
    </li>
  );
};

export default SingleShopItem;
