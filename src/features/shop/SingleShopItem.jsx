import AddToCartBtn from "../../ui/AddToCartBtn";
import Price from "../../ui/Price";
import SinglePageButton from "../../ui/SinglePageButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const SingleShopItem = ({ product, isGrid }) => {
  const { id, name, price, discount, image, amount, category } = product;
  const newCartItem = {
    ...product,
    totalPrice: product.price,
    minAmount: 1,
  };
  return (
    <li className="relative group border border-greyBorder cursor-pointer shadow-md flex items-center justify-center flex-col">
      <div
        className={` flex ${
          isGrid ? "flex-col justify-between" : "flex-col md:flex-row w-full"
        } items-center text-center p-4`}
      >
        <LazyLoadImage
          src={image}
          alt={name}
          effect="blur"
          loading="lazy"
          className="w-full max-w-[10rem] mb-5 group-hover:scale-110 transition-all ease-in duration-200"
        />
        <div
          className={`${
            isGrid
              ? "text-center flex flex-col justify-between "
              : "text-center md:text-start md:ml-10"
          }`}
        >
          <p className={`${isGrid ? "text-[.9rem]" : "text-[1.5rem]"}`}>
            {name}
          </p>
          <Price discount={discount} price={price} />
          {!isGrid ? (
            <p className="text-[1rem] font-rexFontLight mb-5">
              {amount < 1 ? (
                <span>წინასწარი შეკვეთით</span>
              ) : (
                <span>საერთო რაოდენობა: {amount}</span>
              )}
            </p>
          ) : null}
        </div>
      </div>
      {/* single page button */}
      <div
        className={`${
          isGrid ? "hidden group-hover:flex" : "flex justify-center static"
        } border border-t-0 -ml-[.05rem] -mr-[.05rem] pb-2 border-greyBorder bg-white left-0 right-0 -bottom-5
         absolute z-[9999] justify-center`}
      >
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
