import ProductInfo from "../../ui/ProductInfo";
import SinglePageButton from "../../ui/SinglePageButton";
import Price from "../../ui/Price";
const SelectedPcItem = ({ selectedPc }) => {
  const { id, image, name, price, discount, cpu, gpu, ssd, ram, category } =
    selectedPc;

  return (
    <div className="group cursor-pointer border border-greyBorder ">
      <div className="flex flex-col items-center px-3 py-3 transition-all ease-in duration-150 ">
        <div className="overflow-hidden mb-5">
          <div className="hover:scale-110 transition-all ease-in duration-300">
            <img
              loading="lazy"
              src={image}
              alt=""
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

export default SelectedPcItem;
