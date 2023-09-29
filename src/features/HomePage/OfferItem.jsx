import Price from "../../ui/Price";
import ProductInfo from "../../ui/ProductInfo";
import SinglePageButton from "../../ui/SinglePageButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const OfferItem = ({ pcItem }) => {
  const { image, name, discount, price, id, category, cpu, gpu, ssd, ram } =
    pcItem;
  return (
    <div className="group cursor-pointer border border-greyBorder ">
      <div className="flex flex-col items-center px-3 py-3 transition-all ease-in duration-150 ">
        <div className="overflow-hidden mb-5">
          <div className="hover:scale-110 transition-all ease-in duration-300">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              src={image}
              alt="product image"
              className="w-full h-[200px]"
            />
          </div>
        </div>
        <h6 className="mb-5">{name.substring(0, 25)}...</h6>
        <Price discount={discount} price={price} />
      </div>
      <div className="hidden group-hover:flex flex-col gap-5 px-[.8rem] pb-[.8rem]">
        <SinglePageButton id={id} category={category} />
        <ProductInfo cpu={cpu} gpu={gpu} ssd={ssd} ram={ram} />
      </div>
    </div>
  );
};

export default OfferItem;
