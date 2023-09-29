import SinglePageButton from "./SinglePageButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Price from "./Price";

const ProductCard = ({ product }) => {
  const { id, name, discount, image, price, category } = product;

  return (
    <div className="group cursor-pointer flex flex-col  items-center px-5 py-8 border transition-all ease-in duration-150 border-greyBorder ">
      <div className="overflow-hidden">
        <div className="hover:scale-110 transition-all ease-in duration-300 ">
          <LazyLoadImage
            src={image}
            alt="alt"
            className="min-h-[200px] max-h-[200px]"
            effect="blur"
            loading="lazy"
          />
        </div>
      </div>
      <h6 className="mb-5 whitespace-nowrap" title={name}>
        {name.substring(0, 25)}...
      </h6>
      <Price discount={discount} price={price} />
      <div className="hidden group-hover:block">
        <SinglePageButton id={id} category={category} />
      </div>
    </div>
  );
};

export default ProductCard;
